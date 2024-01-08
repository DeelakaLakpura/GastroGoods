import "./globals.css";

import { Nunito, Poppins } from "next/font/google";
import NavBar from "./components/navigation/NavigationBar";
import Footer from "./components/footer/Footer";
import CartProvider from "@/providers/CartProvider";
import { Toaster } from "react-hot-toast";
import { Metadata } from "next/types";

const nunito = Nunito({ subsets: ["latin"], weight: ["700", "500"] });

export const metadata: Metadata = {
  title: "GastroGoods",
  description: "Ecommerce Project",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${nunito.className} text-slate-700`}>
        <Toaster
          toastOptions={{
            style: {
              background: "rgb(51 65 85)",
              color: "#fff",
            },
          }}
        />
        <CartProvider>
          <div className="flex flex-col min-h-screen">
            <NavBar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
