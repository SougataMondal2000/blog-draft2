import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        style={{
          background: "linear-gradient(to right, #ECE4D6, #F9F4EC, #ECE4D6)",
        }}
        className={inter.className}
      >
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
