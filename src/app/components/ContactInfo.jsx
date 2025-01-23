import * as React from "react";

const ContactInfo = () => {
  return (
    <div className="flex flex-col items-end">
      <div className="flex flex-col">
        <div className="font-bold leading-tight">Contact Info</div>
        <div className="mt-5 leading-6">
          <a href="tel:+11234567890" tabIndex="0">+ 1(123) 456 7890</a>
          <br />
          <a href="mailto:info@codestitch.com" tabIndex="0">info@codestitch.com</a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;