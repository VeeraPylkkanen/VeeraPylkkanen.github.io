import type { Metadata } from "next";
import NavItem from "../components/NavItem";
import ThemeToggle from "@/components/ThemeToggle";
import Image from "next/image";
import "./globals.css";

// Add fonts to the global scope

export const iconSize = 30;

export const metadata: Metadata = {
  title: "Veera Pylkkänen",
  description: "Developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-cover bg-center h-full flex items-center justify-center relative">
        <img className="defaultBG z-[-1]" src="/defaultBG.jpg" />
        <img className="pinkBG z-[-1]" src="/pinkBG.png" />

        <div className="h-[98%] sm:h-[95%] max-w-screen-xl w-full sm:w-11/12 bg-white sm:rounded sm:dark:rounded-2xl flex flex-col lg:flex-row p-2 lg:p-4">

          <nav className="mb-2 lg:mb-0 bg-primaryBG lg:min-w-[200px] lg:max-w-[200px] lg:overflow-y-scroll no-scrollbar shadow-md dark:shadow-none p-4 rounded dark:rounded-2xl flex flex-row lg:flex-col transition-colors duration-500">
            <h2 className="hidden lg:block font-bold text-l my-4 text-center">Navigation</h2>
            <ul className="flex flex-row lg:flex-col flex-grow">
              <NavItem href="/" src="/icons/Home.png" alt="home" label="Home" />
              <NavItem href="/aboutme" src="/icons/AboutMe.png" alt="about me" label="About me"  />
              <NavItem href="/portfolio" src="/icons/Portfolio.png" alt="portfolio" label="Portfolio" />
              <NavItem href="/koodsisu" src="/icons/kood.png" alt="kood/Sisu" label="kood/Sisu" />
              <li className="lg:my-1.5 lg:w-full flex flex-row items-center space-x-2 hover:bg-white p-1.5 rounded-md transition duration-300 ease-in-out dark:hover:bg-primaryAccent">
                <a href='www.linkedin.com/in/veera-pylkkänen-14ba14301' className="flex flex-row items-center space-x-2">
                  <Image src="/icons/LinkedIn.png" alt="linkedin" width={iconSize} height={iconSize}/>
                  <span className="hidden lg:block">LinkedIn</span>
                </a>
              </li>
              <li className="lg:my-1.5 ml-auto lg:mt-auto lg:ml-1 flex lg:flex-col items-center">
                <ThemeToggle />
              </li>
            </ul>
          </nav>

          <main className="grow overflow-y-scroll no-scrollbar">{children}</main>

        </div>
      </body>
    </html>
  );
}
