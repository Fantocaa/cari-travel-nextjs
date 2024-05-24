import { NextResponse, NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // return NextResponse.json({
  //   products: [
  //     {
  //       id: 1,
  //       name: "meong",
  //     },
  //   ],
  // });

  // console.log(request);

  const data = [
    {
      id: 1,
      name: "meong",
      price: 100,
    },
  ];

  return NextResponse.json({ status: 200, message: "Success", data });
}
