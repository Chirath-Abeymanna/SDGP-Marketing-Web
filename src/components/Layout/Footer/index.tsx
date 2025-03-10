import Link from "next/link";
import Image from "next/image";
import Logo from "../Header/Logo";
import { Icon } from "@iconify/react/dist/iconify.js";

interface links {
  link: string;
}

interface socialLinks {
  imgSrc: string;
  link: string;
  width: number;
}

const socialLinks: socialLinks[] = [
  {
    imgSrc: "fa-brands:youtube",
    link: "https://www.youtube.com/@skillify-inc",
    width: 10,
  },
  {
    imgSrc: "fa6-brands:instagram",
    link: "https://www.instagram.com/skillify.inc/",
    width: 14,
  },
  {
    imgSrc: "fa6-brands:linkedin",
    link: "https://www.linkedin.com/in/skillify-incorporation-548b35352/",
    width: 14,
  },
];

const footer = () => {
  return (
    <div className="bg-[#0c151a]">
      <div className="mx-auto max-w-2xl pt-4 px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="my-12 grid grid-cols-1 gap-y-10 sm:grid-cols-6 lg:grid-cols-12">
          {/* COLUMN-1 */}
          <div className="sm:col-span-6 lg:col-span-3">
            <div className="flex flex-shrink-0 items-center border-right">
              <Image
                src="/images/logo/logo-white.svg"
                alt="logo"
                width={214}
                height={55}
              />
            </div>
          </div>
          <div className="sm:col-span-6 lg:col-span-5 flex items-center"></div>
          <div className="sm:col-span-6 lg:col-span-4">
            <div className="flex gap-4 lg:justify-end">
              {socialLinks.map((items, i) => (
                <Link href={items.link} key={i}>
                  <div className="bg-white/20 h-12 w-12 shadow-xl text-base rounded-full flex items-center justify-center text-white hover:text-black hover:bg-white">
                    <Icon icon={items.imgSrc} className="text-2xl" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div className="pt-12 pb-10 lg:flex items-center justify-between border-t border-t-white border-opacity-30">
          <h4 className="text-lg text-center md:text-start font-normal text-white opacity-60">
            @2024.All rights reserved by Skillify
          </h4>
          <div className="flex gap-5 mt-6 md:mt-0 justify-center md:justify-start">
            <div className="h-5 bg-white opacity-60 w-0.5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default footer;
