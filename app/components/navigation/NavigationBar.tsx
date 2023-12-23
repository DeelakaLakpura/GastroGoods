import Link from "next/link";
import Container from "../Container";
import { Nunito, Redressed } from "next/font/google";
import CartCount from "./CartCount";
import UserMenu from "./UserMenu";
import getCurrentUser from "@/actions/getCurrentUser";
import Categories from "./Categories";
import SearchBar from "./SearchBar";
import Image from "next/image";

const nunito = Nunito({ subsets: ["latin"], weight: ["400"] });

const NavBar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <div
      className="
  sticky
  top-0
  w-full
  bg-white
  z-30
  shadow-sm
  "
    >
      <div className="py-4 border-b-[1px]">
        <Container>
          <div
            className="
          flex
          items-center
          justify-between
          gap-3
          md:gap-0
          "
          >
            <Link href="/"> <Image src={"https://i.ibb.co/v4Mg4Jt/logo.png"} width={200} height={100}  alt="logo" ></Image> </Link>
            <div className="flex items-center gap-8 md:gap-12">
            <SearchBar/>
              <CartCount />
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
      <Categories/>
    </div>
  );
};

export default NavBar;
