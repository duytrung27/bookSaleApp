import Image from "next/image";

function BookDetailHeader() {
  return (
    <div className="h-[550px] sm:h-[613px] relative">
      <div className="h-full w-full">
        <Image
          className=" w-full h-[550px] sm:h-[613px] object-cover "
          src="/images/detail_bg.jpeg"
          alt="db_bg"
          width={0}
          height={613}
        />
      </div>
    </div>
  );
}

export default BookDetailHeader;
