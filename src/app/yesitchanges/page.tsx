import Link from "next/link";
import React from "react";

function Page() {
  return (
    <div className="h-full flex flex-col items-center justify-center gap-2">
      <div className="text-lg">Easter Egg</div>
      <div className="flex items-center justify-center">
        Yes, it changes automatically every year
      </div>
      <div >
        <Link href="/" className="underline">Go back</Link>
      </div>
    </div>
  );
}

export default Page;
