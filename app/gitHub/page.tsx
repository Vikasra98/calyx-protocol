import React from "react";
import HeaderSecondary from "../components/HeaderSecondary";
import HeroSecondary from "../components/HeroSecondary";
import Footer from "../components/Footer";
import DocsContent from "../components/DocsContent";
import Image from "next/image";

const page = () => {
  return (
    <>
      <HeaderSecondary />
      <HeroSecondary title="GitHub" backgroundImage="/img/Docs.png" />
      <section className="bg-[#12291E] lg:py-[78px] py-11 w-full">
        <div className="flex items-center justify-center ">
          <Image
            src="/images/comming_soon.png"
            alt="comming_soon"
            width={704}
            height={551}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default page;
