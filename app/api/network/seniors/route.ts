import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

function getUserId(req: NextRequest): string | null {
  try {
    const token = req.cookies.get("token")?.value;
    if (!token) return null;
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    return decoded.userId;
  } catch { return null; }
}

export async function GET(req: NextRequest) {
  try {
    const userId = getUserId(req);
    if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const currentUser = await prisma.user.findUnique({
      where: { id: userId },
      select: { branch: true, year: true },
    });

    // Get accepted connections
    const accepted = await prisma.connection.findMany({
      where: {
        OR: [
          { fromUserId: userId, status: "accepted" },
          { toUserId: userId, status: "accepted" },
        ],
      },
      include: {
        from: { select: { id: true, name: true, year: true, branch: true, cgpa: true } },
        to:   { select: { id: true, name: true, year: true, branch: true, cgpa: true } },
      },
    });

    const network = accepted.map((c) =>
      c.fromUserId === userId ? c.to : c.from
    );

    const excludeIds = [userId, ...network.map((u) => u.id)];

    // Suggest other users from same branch, exclude already connected
    const suggested = await prisma.user.findMany({
      where: {
        id: { notIn: excludeIds },
        branch: currentUser?.branch ?? undefined,
        onboarded: true,
      },
      select: {
        id: true,
        name: true,
        year: true,
        branch: true,
        cgpa: true,
      },
      take: 5,
    });

    return NextResponse.json({ network, suggested });
  } catch (error) {
    console.error("GET network error:", error);
    return NextResponse.json({ error: String(error) }, { status: 500 });
  }
}