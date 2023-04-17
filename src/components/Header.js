import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from '@/data/headerNavLinks';
import DarkModeSwitch from './DarkModeSwitch';
import MobileNav from './MobileNav';

export default function Header() {
  const router = useRouter();
  const { route } = router;
  const [blogDropdownOpen, setblogDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const onHome = route === '/' ? true : false;
  const onAbout = route === '/about' ? true : false;
  const onContact = route === 'contact' ? true : false;
  const onTags = route === '/tags' ? true : false;
  const onBlog = route && route.includes('blog') ? true : false;
  const onFAQ = route === 'faq' ? true : false;
  const onCookie = route === 'cookie' ? true : false;
  const onFreeTrial = route === 'free-trial' ? true : false;
  const onSignIn = route === 'sign-in' ? true : false;
  const onTerms = route === 'terms' ? true : false;

  return (
    <nav className="w-full flex items-center border-b justify-between px-4 py-4 backdrop-blur dark:bg-transparent fixed shadow">
      <div>
        <Link href="/" aria-label={siteMetadata.headerTitle}>
          <div className="flex items-center justify-between">
            {/* <div className="mr-3"> <Logo /> </div> */}

            {typeof siteMetadata.headerTitle === 'string' ? (
              <div className="font-title fonthidden text-xl md:text-2xl xl:text-3xl font-semibold sm:block">
                {siteMetadata.headerTitle}
              </div>
            ) : (
              siteMetadata.headerTitle
            )}
          </div>
        </Link>
      </div>

      <div className="flex items-center text-base leading-5">
        <div className="hidden sm:block">
          {headerNavLinks.map((link) => (
            <Link
              key={link.title}
              href={link.href}
              className="font-title p-1 text-xl md:text-xl xl:text-2xl font-medium text-gray-900 dark:text-gray-100 sm:p-4"
            >
              {' '}
              {link.title}{' '}
            </Link>
          ))}
        </div>

        <DarkModeSwitch />

        <MobileNav />
      </div>
    </nav>
  );
}
