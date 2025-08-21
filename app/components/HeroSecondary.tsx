import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Home, MoveRight } from "lucide-react";

interface IProps {
  title: string;
  backgroundImage: string; // path to background image
  breadcrumb?: { label: string; href?: string }[];
}
const HeroSecondary = (props: IProps) => {
  const {
    backgroundImage,
    title,
    breadcrumb = [{ label: "Home", href: "/" }, { label: title }]
  } = props;
  return (
    <>
      <section className="relative w-full h-[220px] md:h-[300px] flex items-center justify-center">
        {/* Background image */}
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-[linear-gradient(269.66deg,#000000_50%,#000000_99.74%)] opacity-70"></div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center px-4">
          <h1 className="text-3xl md:text-4xl text-white mb-[30px] font_title font-bold lg:text-[52px]">
            {title}
          </h1>

          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm md:text-base border-2 backdrop-blur-md px-4 py-3 rounded-md text-white">
            <Home size={16} className="text-[#D99A70] w-[24px] h-[24px]" />
            {breadcrumb.map((item, index) => (
              <React.Fragment key={index}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className="hover:text-orange-400 text-xl"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-xl">{item.label}</span>
                )}
                {index < breadcrumb.length - 1 && (
                  <Image
                    src={"/images/icons/arrow_right_alt.png"}
                    alt="arrow"
                    height={24}
                    width={24}
                  />
                  //   <MoveRight className="text-[#D99A70] h-[24px] w-[24px]" />
                )}
              </React.Fragment>
            ))}
          </nav>
        </div>
      </section>
    </>
  );
};

export default HeroSecondary;
