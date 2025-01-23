import * as React from "react";
import FooterLinks from "./FooterLinks";
import ContactInfo from "./ContactInfo";

const Footer = () => {
  const sitemapLinks = ["What We Do", "How It Works", "Portfolio", "Services", "Pricing"];

  return (
    <footer className="flex relative z-0 justify-center items-start px-10 pt-36 pb-40 w-full max-md:px-5 max-md:py-24 max-md:max-w-full">
      <div className="flex flex-wrap gap-11 items-start bg-neutral-100 min-w-[240px] w-[944px]">
        <div className="flex flex-wrap grow shrink gap-10 justify-between min-h-[240px] min-w-[240px] w-[755px] max-md:max-w-full">
          <div className="flex relative flex-col justify-between items-start text-sm leading-5 text-center min-w-[240px] w-[301px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e3c0e5458e3f34bd5c8cb35b74ecda62420600b7f83955f21dcc9d0fe2f211?placeholderIfAbsent=true&apiKey=265a80ab3ad14638b15552c0f1bf9915"
              alt="Moonlight Web Designs Logo"
              className="object-contain absolute top-2.5 left-2/4 z-0 max-w-full -translate-x-2/4 aspect-[3.5] h-[59px] translate-y-[0%] w-[206px]"
            />
            <div className="absolute left-2/4 z-0 -translate-x-2/4 bottom-[89px] h-[42px] translate-y-[0%] w-[278px]">
              Copyright © 2024 | Moonlight Web Designs
              <br />
              All Rights Reserved
            </div>
          </div>
          <div className="flex gap-10 items-start self-start px-16 pt-3 text-base min-w-[240px] max-md:px-5 max-md:max-w-full">
            <FooterLinks title="Sitemap" links={sitemapLinks} />
            <ContactInfo />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;