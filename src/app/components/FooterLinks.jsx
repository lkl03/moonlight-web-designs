import * as React from "react";

const FooterLinks = ({ title, links }) => {
  return (
    <div className="flex flex-col">
      <div className="font-bold leading-tight">{title}</div>
      <div className="flex flex-col mt-5">
        {links.map((link, index) => (
          <a 
            href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
            key={index}
            className="mt-3 first:mt-0"
            tabIndex="0"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;