import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcryptjs";


export async function GET(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return NextResponse.json({ user: null }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    const user = await prisma.user.findUnique({
      where: { id: decoded.userId },
      select: { id: true, name: true, email: true },
    });

    if (!user) return NextResponse.json({ user: null }, { status: 401 });
    return NextResponse.json({ user });
  } catch {
    return NextResponse.json({ user: null }, { status: 401 });
  }
}


export async function PATCH(req: NextRequest) {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      userId: string;
    };

    const body = await req.json();
    const updateData: any = {};

    // Update name/email
    if (body.name !== undefined) updateData.name = body.name;
    if (body.email !== undefined) updateData.email = body.email;

    //  Change password
    if (body.currentPassword && body.newPassword) {
      const user = await prisma.user.findUnique({
        where: { id: decoded.userId },
      });

      const isMatch = await bcrypt.compare(
        body.currentPassword,
        user!.password
      );

      if (!isMatch) {
        return NextResponse.json(
          { error: "Incorrect current password" },
          { status: 400 }
        );
      }

      updateData.password = await bcrypt.hash(body.newPassword, 10);
    }

    // Nothing to update
    if (Object.keys(updateData).length === 0) {
      return NextResponse.json(
        { error: "No data to update" },
        { status: 400 }
      );
    }

    const updatedUser = await prisma.user.update({
      where: { id: decoded.userId },
      data: updateData,
      select: { id: true, name: true, email: true },
    });

    return NextResponse.json({ success: true, user: updatedUser });

  } catch (err) {
    console.error("PATCH /auth/me error:", err);
    return NextResponse.json(
      { error: "Update failed" },
      { status: 500 }
    );
  }
}