import { NextRequest, NextResponse } from "next/server";

 import { PrismaClient } from "../../generated/prisma/client"; 


const client = new PrismaClient();

export async function GET(request: NextRequest) {
  const user = await client.user.findMany();

  return NextResponse.json({
    email: user.length > 0 ? user[0].email : null
  });
}

export async function POST(request: NextRequest) {
    const body =await request.json();
    console.log( body);
    try{
   await client.user.create({
      data: {
        email: body.email,
        password: body.password,
      },
    });

  return NextResponse.json({
    message: "User data received successfully",
  });
}catch(e){
  console.error("Error creating user:", e);
  return NextResponse.json({
    message: "Error creating user",
    error: e instanceof Error ? e.message : String(e)
  },{status: 411});
}
}