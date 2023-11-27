import Image from "next/image";
import { useRouter } from "next/navigation";
import RevealOnScroll from "./RevealOnScroll";
import SearchBook from "./SearchBook";

function DashboardHeader() {
  const router = useRouter();

  return (
    <div className="h-[550px] sm:h-[613px] relative">
      <div className="md:grid md:grid-cols-4 xl:grid-cols-2 absolute h-full w-full">
        <div className="hidden md:block w-full h-[550px] sm:h-[613px] md:col-span-1 bg-white" />
        <Image
          className="h-[550px] sm:h-[613px] object-cover md:col-span-3 xl:col-span-1"
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
          <div className="mt-5">
            <SearchBook
              onSubmit={(book) => {
                router.push(`/search?word=${book}`);
              }}
            />
          </div>
        </RevealOnScroll>
      </div>
    </div>
  );
}

export default DashboardHeader;
