import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import RevealOnScroll from "./RevealOnScroll";

function DashboardHeader() {
  return (
    <div className="h-[550px] sm:h-[613px] relative">
      <div className="md:grid md:grid-cols-4 xl:grid-cols-2 absolute h-full w-full">
        <div className="hidden md:block w-full h-full md:col-span-1 bg-white" />
        <Image
          className="h-full object-cover md:col-span-3 xl:col-span-1"
          src="/images/db_bg.jpeg"
          alt="db_bg"
          width={1000}
          height={613}
        />
      </div>
      <div className="container h-full w-full flex flex-col items-center lg:items-start justify-center text-white md:text-black">
        <RevealOnScroll animate="z-10 animate__fadeInLeft">
          <h1 className="z-10 !leading-snug uppercase font-extrabold text-5xl sm:text-6xl">
            Read and add <br /> your insight
          </h1>
          <h2 className="z-10 capitalize text-center text-[16px] sm:text-xl mt-3">
            Find your favorite book and read it here for free
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              console.log("object");
            }}
            className="z-10 flex items-center mt-5 rounded-[4px] shadow-md bg-neutral-100 max-w-[400px]"
          >
            <CiSearch color="black" size={20} className="ml-3" />
            <input
              type="text"
              placeholder="Search Book"
              className="w-full text-black bg-transparent border-none focus:ring-transparent"
            />
          </form>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default DashboardHeader;
