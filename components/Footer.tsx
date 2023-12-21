import { FOOTER_CONTACT_INFO, FOOTER_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-10 text-white">
      <div className="max-container mx-auto padding-container relative z-30">
        <div className='text-center mb-32'>
          <p className="medium-32">We can help to improve your business</p>
          <p className="medium-32 text-blue-500">by upgrading your technology!</p>
          <p className="regular-16 py-10 text-gray-500">Schedule a free 30 mins calls with us</p>
          <div className="flexCenter medium-16">
            <Button type="button" title="Book an appointment" variant="bg-blue-500" />
          </div>
        </div>
        {/* footer content */}
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-10 mb-10">

          {/* about us */}
          <div className="flex flex-col col-span-1 lg:col-span-2">
          <Link href="/" className="mb-6">
            <Image src="/hyge-logo.png" alt="logo" width={128} height={32} />
          </Link>
            <p className="mb-2">Hygeis a Singapore based company that provides customisation and specialisation in website design, development, as well as mobile app development.</p>
            <div className="flexStart mt-4">
              <Image src="/location.svg" alt="location" width={32} height={32} />
              <p className="medium-14 ml-4">North Point Bizhub, Singapore.</p>
            </div>
          </div>

          {/* contact us */}
          <div className="col-span-1">
          {FOOTER_CONTACT_INFO.links.map((link) => (
            <div className="mb-6" key={link.label}>
              <p className="medium-24">{link.label}</p>
              <Link href={link.exactLink} className="mt-8">
                {link.value}
              </Link>
            </div>
          ))}
          </div>

          {/* social links */}
          <div className="col-span-1">
          {FOOTER_LINKS.map((link) => (
            <Link href={link.href} key={link.key}>
              <div className="flexBetween">
                <p className="regular-20">{link.label}</p>
                <Image src="/ion_arrow-up.svg" alt="arrow" width={24} height={24} />
              </div>
              <div className="w-full h-0.5 bg-white my-4"></div> 
            </Link>
          ))}
          </div>
        </div>
        
        {/* copyright */}
        <div className="bg-gradient-to-r from-black via-gray-700 to-black h-0.5 my-4"></div>
        <div className="flexBetween text-gray-500">
          <p>Copyright © 2023 Hyge, Pte. Ltd.</p>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
 };
 
 export default Footer;