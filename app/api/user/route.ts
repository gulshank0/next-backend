import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  return NextResponse.json({
    email:"kunal@gmail.com",
    name:"Kunal",
    age: 25,
    location: "India",
    hobbies: ["coding", "reading", "gaming"],
    profession: "Software Engineer",
    skills: ["JavaScript", "TypeScript", "React", "Node.js"],
  });
}

export async function POST(request: NextRequest) {
    const body =await request.json();
    console.log( body);

  return NextResponse.json({
    message: "User data received successfully",
  });
}