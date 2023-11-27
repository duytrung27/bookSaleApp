import Image from "next/image";
import React from "react";

function NoBookFound() {
  return (
    <div className="flex flex-col justify-center items-center h-[400px]">
      <Image src="/images/no-book-found.jpeg" alt="" height={200} width={200} />
      <h1 className="text-3xl font-semibold mt-7 mb-1">Sorry, NO book found</h1>
      <h3 className="text-gray-500">Please try to search other books</h3>
    </div>
  );
}

export default NoBookFound;
