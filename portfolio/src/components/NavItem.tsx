// components/NavItem.tsx
import Link from "next/link";
import Image from "next/image";

interface NavItemProps {
  href: string;
  src: string;
  alt: string;
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, src, alt, label }) => {
  return (
    <li className="lg:my-1.5 lg:w-full">
      <Link href={href} className="flex flex-row items-center space-x-2 hover:bg-white p-1.5 rounded-md transition duration-300 ease-in-out dark:hover:bg-primaryAccent">
      <Image src={src} alt={alt} width={30} height={30} />
          <div className="text-l hidden lg:block">{label}</div>
      </Link>
    </li>
  );
};

export default NavItem;