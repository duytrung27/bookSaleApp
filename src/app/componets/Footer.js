import { AiFillInstagram } from "react-icons/ai";
import { BsFacebook, BsYoutube } from "react-icons/bs";

function Footer() {
  return (
    <div className="bg-primary overflow-x-hidden font-synonym">
      <div className="px-10 xl:px-0 xl:max-w-7xl m-auto">
        <div className="md:flex md:justify-between pt-5 xl:pt-[60px] text-white border-b-[1px] border-white">
          <div>
            <div className="text-lg font-normal capitalize leading-7">
              Read and add your ingight
              <br />
              Find Your Favorite Book And Read It Here For Free
            </div>
            <div className="flex gap-5 mt-3">
              <AiFillInstagram className="w-[19px] h-[19px] cursor-pointer" />
              <BsFacebook className="w-[18px] h-[17px] cursor-pointer" />
              <BsYoutube className="w-[19px] h-[19px] cursor-pointer" />
            </div>
          </div>
          <div className="flex justify-between text-base mt-6 md:mt-0 md:justify-end md:gap-8 lg:gap-[93px] lg:text-lg pb-10">
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white font-normal  leading-7">
              <div className="text-white text-xl font-semibold  leading-[30.40px]">
                Company
              </div>
              <div className="flex-col justify-start items-start gap-[11px] flex">
                <div className="cursor-pointer">About us</div>
                <div className="cursor-pointer">Blog</div>
                <div className="cursor-pointer">Careers</div>
              </div>
            </div>
            <div className="flex-col justify-start items-start gap-[17px] inline-flex text-white font-normal  leading-7">
              <div className="text-white text-xl font-semibold  leading-[30.40px]">
                Resources
              </div>
              <div className="flex-col justify-start items-start gap-[11px] flex">
                <div className="cursor-pointer">Community</div>
                <div className="cursor-pointer">Contract</div>
                <div className="cursor-pointer">Terms of services</div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:flex text-base justify-between pt-20 pb-11 text-white md:text-lg font-normal  leading-7">
          <div>@2023 Copy right. All rights reserved</div>
          <div className="cursor-pointer mt-4 md:mt-0">Term & Condition</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
