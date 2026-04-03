import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

// Helper to get userId from token
function getUserId(req: NextRequest): string | null {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    return decoded.userId;
  } catch {
    return null;
  }
}

// GET - fetch current user's onboarding data
export async function GET(req: NextRequest) {
  try {
    const userId = getUserId(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        year: true,
        semester: true,
        branch: true,
        cgpa: true,
        credits: true,
        totalCredits: true,
        subjects: true,
        onboarded: true,
      },
    });

    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    return NextResponse.json({ data: user });
  } catch (error) {
    console.error("GET onboarding error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// POST - create/save onboarding data for the first time
export async function POST(req: NextRequest) {
  try {
    const userId = getUserId(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    const user = await prisma.user.update({
      where: { id: userId },
      data: {
        year: body.year,
        semester: body.semester,
        branch: body.branch,
        cgpa: parseFloat(body.cgpa) || null,
        credits: parseInt(body.credits) || null,
        totalCredits: parseInt(body.totalCredits) || null,
        subjects: body.subjects ?? [],
        onboarded: true,
      },
    });

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error("POST onboarding error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// PATCH - partially update onboarding data (e.g. just update CGPA)
export async function PATCH(req: NextRequest) {
  try {
    const userId = getUserId(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const body = await req.json();

    // Only update fields that are actually sent
    const updateData: any = {};
    if (body.year !== undefined) updateData.year = body.year;
    if (body.semester !== undefined) updateData.semester = body.semester;
    if (body.branch !== undefined) updateData.branch = body.branch;
    if (body.cgpa !== undefined) updateData.cgpa = parseFloat(body.cgpa) || null;
    if (body.credits !== undefined) updateData.credits = parseInt(body.credits) || null;
    if (body.totalCredits !== undefined) updateData.totalCredits = parseInt(body.totalCredits) || null;
    if (body.subjects !== undefined) updateData.subjects = body.subjects;

    if (Object.keys(updateData).length === 0) {
      return NextResponse.json({ error: "No fields to update" }, { status: 400 });
    }

    const user = await prisma.user.update({
      where: { id: userId },
      data: updateData,
    });

    return NextResponse.json({ success: true, data: user });
  } catch (error) {
    console.error("PATCH onboarding error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}

// DELETE - reset onboarding (clear all onboarding fields)
export async function DELETE(req: NextRequest) {
  try {
    const userId = getUserId(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    await prisma.user.update({
      where: { id: userId },
      data: {
        year: null,
        semester: null,
        branch: null,
        cgpa: null,
        credits: null,
        totalCredits: null,
        subjects: [],
        onboarded: false,
      },
    });

    return NextResponse.json({ success: true, message: "Onboarding data cleared" });
  } catch (error) {
    console.error("DELETE onboarding error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}