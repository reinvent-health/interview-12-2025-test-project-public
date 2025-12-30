import { NextResponse } from "next/server";
import { User } from "@/types/user";

export async function GET() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users", {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch users");
    }

    const users: User[] = await response.json();
    return NextResponse.json(users);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    );
  }
}
