import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <html>
      <body className="text-center">
        <h1 className="mt-10 font-semibold">404 Not Found</h1>
        <Link href="/" className="underline">
          <p>Back to Home</p>
        </Link>
      </body>
    </html>
  );
}
