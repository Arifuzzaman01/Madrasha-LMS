"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoMdMail, IoMdCall } from "react-icons/io";
import { MdLocationOn } from "react-icons/md";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    quickLinks: [
      { name: "সকল কোর্স", href: "/courses" },
      { name: "ভর্তি তথ্য", href: "/admission" },
      { name: "নোটিশ বোর্ড", href: "/notice" },
      { name: "ফলাফল", href: "/results" },
    ],
    support: [
      { name: "সহায়তা কেন্দ্র", href: "/help" },
      { name: "প্রাইভেসি পলিসি", href: "/privacy" },
      { name: "শর্তাবলী", href: "/terms" },
      { name: "যোগাযোগ", href: "/contact" },
    ],
  };

  return (
    <footer className="bg-green-100 border-t border-emerald-100 pt-10 pb-5">
      <div className=" px-6 lg:px-8 ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-12 ">
          {/* 1. Brand Section */}
          <div className="space-y-5 md:col-span-2">
            <div className="flex flex-col md:flex-row md:items-end justify-around">
              <Link
                href="/"
                className="text-2xl font-bold text-emerald-700 "
              >
                <Image
                  src="/footer-logo.png"
                  width={100}
                  height={60}
                  alt="Footer Logo"
                />
                <span></span>
              </Link>
              <div className="flex gap-4 pt-2">
                {[FaFacebookF, FaTwitter, FaYoutube, FaLinkedinIn].map(
                  (Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="p-2.5 bg-white border border-emerald-100 text-emerald-700 rounded-full hover:bg-emerald-700 hover:text-white transition-all shadow-sm"
                    >
                      <Icon size={16} />
                    </a>
                  ),
                )}
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">
              একটি আধুনিক ডিজিটাল মাদরাসা প্ল্যাটফর্ম। আমরা দ্বীনি শিক্ষার সাথে
              আধুনিক প্রযুক্তির সমন্বয় ঘটিয়ে শিক্ষার্থীদের ভবিষ্যৎ গড়ায়
              অঙ্গীকারবদ্ধ।
            </p>
          </div>

          {/* 2. Quick Links */}
          <div className="md:col-span-1 font-semibold">
            <h3 className="text-gray-900 font-bold mb-6 text-lg">
              প্রয়োজনীয় লিংক
            </h3>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-700 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Support & Legal */}
          <div className="md:col-span-1 font-semibold">
            <h3 className="text-gray-900 font-bold mb-6 text-lg">সাপোর্ট</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="text-gray-600 hover:text-emerald-700 text-sm transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 4. Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-gray-900 font-bold mb-6 text-lg">যোগাযোগ</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li className="flex items-start gap-3 leading-relaxed">
                <MdLocationOn className="text-emerald-600 shrink-0" size={20} />
                <span>বরগুনা- ৮৭০০, বাংলাদেশ</span>
              </li>
              <li className="flex items-center gap-3">
                <IoMdCall className="text-emerald-600 shrink-0" size={20} />
                <span>+৮৮০ ১৭০০-০০০০০০</span>
              </li>
              <li className="flex items-center gap-3">
                <IoMdMail className="text-emerald-600 shrink-0" size={20} />
                <span>info@educate-lms.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-5 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 text-center">
          <p>All rights reserved © {currentYear} Educate LMS.</p>
          <p className="flex items-center gap-1">
            Built with ❤️ by{" "}
            <span className="text-emerald-700 font-semibold hover:underline cursor-pointer">
             Arifuzzaman Rakib
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
