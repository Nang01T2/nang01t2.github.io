import Link from "next/link";
import { useRouter } from "next/router";
import headerNavLinks from "@/data/headerNavLinks";

function NavItem({ href, text, ...props }) {
  const router = useRouter();
  //const isActive = router.asPath.startsWith(href ?? "/");
  const isActive = router.asPath === href;

  return (
    <Link {...props} href={href} passHref>
      <span
        className={`${
          isActive
            ? "font-bold text-teal-500 dark:text-teal-400"
            : "font-normal text-gray-500 dark:text-gray-400"
        } 'hidden md:inline-block rounded-full hover:text-gray-900 dark:hover:text-gray-200 transition-all`}
      >
        {text}
      </span>
    </Link>
  );
}

export default function NavBar() {
  return (
    <nav className="hidden space-x-8 text-lg md:flex">
      {headerNavLinks.map((link) => (
        <NavItem key={link.title} href={link.href} text={link.title} />
      ))}
    </nav>
  );
}
