"use client"; 

import { NAV_LINKS } from "@/constants"
import Image from "next/image"
import Link from "next/link"
import Button from "./Button"
import React, {useState} from "react"
import { usePathname } from "next/navigation";

const Navbar = () => {
    const [mobileNavVisible, setMobileNavVisible] = useState(false);
  
    const toggleMobileNav = () => {
      setMobileNavVisible(!mobileNavVisible);
    };

    const pathname = usePathname()

    const handleClick = () =>  alert("you click the button")
  
    return (
      <div className="fixed w-screen z-30 padding-container bg-blue-950 bg-opacity-95">
        <nav className={`flexBetween py-5`}>
        <Link href="/">
          <Image src="/hyge-logo.png" alt="logo" width={128} height={128} />
        </Link>
  
        {/* Mobile Navigation */}
        <div className="relative lg:hidden flex">
          <Button type="button" title="Let's Talk" variant="bg-blue-500" />
          <Image 
            src="/ci_menu-duo-lg.svg"
            alt='menu'
            width={32}
            height={32}
            className="inline-block cursor-pointer ml-4"
            onClick={toggleMobileNav}
          />
        </div>
  
        {/* Desktop Navigation */}
        <ul className="hidden h-full lg:flex bgGrayOpacity text-white">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className={`regular-16 flexCenter cursor-pointer transition-all ${pathname === link.href || pathname === `${link.href}/1` ? 'bg-blue-500' : ''} hover:bg-blue-700 p-4 rounded-full`}>
              <Link href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
  
        <div className="lg:flexCenter hidden">
          <Button 
            type="button"
            title="Let's Talk"
            onClick={handleClick}
            variant="bgGrayOpacity"
          />
        </div>
      </nav>
  
        {/* Overlay */}
        {mobileNavVisible && (
        <div className="fixed top-0 left-0 w-full h-full bg-blue-950/80 pt-5 text-center z-50 text-white">
          <div className="flexBetween mx-6">
            <Link href="/">
              <Image src="/hyge-logo.png" alt="logo" width={128} height={128} />
            </Link>
            <div className='flex'>
              <Button type="button" title="Let's Talk" variant="bg-blue-500" />
              <Image 
                src="/ci_menu-duo-lg.svg"
                alt='menu'
                width={32}
                height={32}
                className="inline-block cursor-pointer ml-4"
                onClick={toggleMobileNav}
              />
            </div>  
          </div>
          <ul className="p-4">
            {NAV_LINKS.map((link) => (
              <li
                key={link.key}
                className="medium-20 flexStart border-b-2 border-blue-500/25 cursor-pointer pb-2 mb-2 transition-all hover:font-bold"
              >
                <Link href={link.href} onClick={toggleMobileNav}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    );
  }
  
  export default Navbar;