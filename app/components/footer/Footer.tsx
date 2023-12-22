"use client"
import Link from "next/link";
import Container from "../Container";
import FooterList from "./FooterList";
import { MdFacebook } from "react-icons/md";
import  Image from "next/image";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-green-600 text-slate-200 text-sm mt-16">
      <Container>
        <div className="flex flex-col md:flex-row justify-between pt-16 pb-8">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-base font-bold mb-2">About Us</h3>
            <p className="mb-2">
            Welcome to GastroGoods, your one-stop destination for premium quality
            groceries and gourmet delights delivered right to your doorstep. At GastroGoods,
            we believe that shopping for your favorite food items should be convenient, enjoyable, 
            and tailored to your unique tastes.
            </p>
          </div>
          <FooterList>
            <h3 className="text-base font-bold mb-2">Follow Us</h3>
            <div className="flex gap-2">
              <Link href="#">
                <MdFacebook size={24} />
              </Link>
              <Link href="#">
                <AiFillTwitterCircle size={24} />
              </Link>
              <Link href="#">
                <AiFillInstagram size={24} />
              </Link>
              <Link href="#">
                <AiFillYoutube size={24} />
              </Link>
            </div>
          </FooterList>
        </div>
        {/* Bottom section for copyright text and badge */}
        <div className="border-t border-slate-300 pt-4  pb-2 flex justify-between items-center">
          <p>&copy; {new Date().getFullYear()} GastroGoods. All rights reserved - (DEVELOPED BY GROUP 28)</p>
          <div className="flex items-center gap-2">
            {/* Add your badge or any other elements here */}
            <span className=" text-white px-2 py-1 rounded-md"><Image src={"https://i.ibb.co/rvhBkjX/footer-logo.png"} width={50} height={50} alt={"foot logo"}  /> </span>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
