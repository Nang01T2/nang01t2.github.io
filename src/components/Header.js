import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import DarkModeSwitch from "./DarkModeSwitch";

export default function Header() {
  const router = useRouter();
  const { route } = router;
  const [blogDropdownOpen, setblogDropdownOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const onHome = route === "/" ? true : false;
  const onAbout = route === "/about" ? true : false;
  const onContact = route === "contact" ? true : false;
  const onBlog = route && route.includes("blog") ? true : false;
  const onFAQ = route === "faq" ? true : false;
  const onCookie = route === "cookie" ? true : false;
  const onFreeTrial = route === "free-trial" ? true : false;
  const onSignIn = route === "sign-in" ? true : false;
  const onTerms = route === "terms" ? true : false;

  return (
    <nav className="sticky inset-0 z-20 bg-white dark:bg-gray-900 py-4 shadow border-solid">
      <div className="w-full lg:container lg:mx-auto lg:flex lg:px-8 items-center justify-between">
        <div className="container mx-auto flex justify-between w-full px-8 pb-5 lg:pb-0 lg:px-0 lg:w-auto">
          {/* <div className="pl-1 lg:pl-0 flex items-center flex-shrink-0 text-gray-800 dark:text-gray-100">
            <img src="/logo.svg" height={30} width={150} />
          </div> */}
          <div
            onClick={() => setMobileNavOpen((prev) => !prev)}
            className="block lg:hidden"
          >
            <button
              id="nav"
              className="flex items-center px-3 py-2 border-2 rounded text-blue-700 border-blue-700 hover:text-blue-700 hover:border-blue-700"
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="https://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-full border-solid border-b-2 border-gray-300 lg:border-b-0 lg:hidden"></div>
        {/* <div className="container mx-auto px-8 lg:hidden">
          <SearchBox />
        </div> */}

        <div
          className={`${
            mobileNavOpen ? "" : "hidden "
          }menu w-full lg:block flex-grow lg:flex lg:items-center lg:w-auto lg:pl-3 lg:pr-0 px-8`}
        >
          <div className="text-md font-bold text-gray-700 dark:text-blue-300 lg:flex-grow">
            <Link href="/">
              <p
                className={`${
                  onHome ? "text-blue-700 " : ""
                }block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded mr-1 hover:text-blue-700 cursor-pointer`}
              >
                Home
              </p>
            </Link>
            <Link href="/about">
              <p
                className={`${
                  onAbout ? "text-blue-700 " : ""
                }block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded mr-1 hover:text-blue-700 cursor-pointer`}
              >
                About
              </p>
            </Link>
            <Link href="/contact">
              <p
                className={`${
                  onContact ? "text-blue-700 " : ""
                }block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded mr-1 hover:text-blue-700 cursor-pointer`}
              >
                <span>Contact</span>
              </p>
            </Link>
            <div className="relative inline">
              <a href="#responsive-header">
                <p
                  onClick={() => setblogDropdownOpen((prev) => !prev)}
                  className={`${
                    onBlog ? "text-blue-700 " : ""
                  }block mt-4 lg:inline-block lg:mt-0 px-3 py-2 rounded hover:text-blue-700 cursor-pointer`}
                >
                  <span>Blog</span>
                  <span className="ml-2 font-size inline-block">
                    {" "}
                    <svg
                      xmlns="https://www.w3.org/2000/svg"
                      className="h-3 w-3"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </p>
              </a>
              <div
                className={`${
                  blogDropdownOpen ? "" : "hidden "
                }bg-white shadow-md rounded border border-gray-300 text-sm absolute top-auto left-0 min-w-full w-56 z-30 mt-1`}
              >
                <span className="absolute top-0 left-0 w-3 h-3 bg-white border transform rotate-45 -mt-1 ml-6"></span>
                <div className="bg-white rounded w-full relative z-10 py-1">
                  <ul className="list-reset">
                    <li className="relative">
                      <Link
                        href="/blogs/blog-1"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <div className="px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                          <span className="flex-1">Blog 1</span>
                        </div>
                      </Link>
                    </li>
                    <li className="relative">
                      <Link href="/blogs/blog-2">
                        <div className="px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                          <span className="flex-1">Blog 2</span>
                        </div>
                      </Link>
                    </li>
                    <li className="relative">
                      <Link
                        href="/blogs/blog-3"
                        className="px-4 py-2 flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer"
                      >
                        <div className="px-4 py-2 inline flex w-full items-start hover:bg-gray-100 no-underline hover:no-underline transition-colors duration-100 cursor-pointer">
                          <span className="flex-1">Blog 3</span>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          {/* Edit margin right: lg:mr-2 */}
          <div className="mt-4 lg:mt-0 lg:mr-2">
            <DarkModeSwitch />
          </div>
          {/* <div className="hidden lg:block">
            <SearchBox />
          </div> */}

          <div className="text-center lg:flex">
            <Link href="/sign-in">
              <p className="block text-md px-3 py-2 dark:text-blue-300 font-bold mt-4 hover:text-blue-700 dark:hover:text-blue-700 lg:mt-0 cursor-pointer">
                Sign in
              </p>
            </Link>

            {/* <Link href="/free-trial">
              <p className=" block text-md px-3 py-2 rounded text-white dark:text-white bg-blue-700 font-bold mt-4 hover:bg-blue-800 lg:ml-2 lg:mt-0 cursor-pointer">
                <span className="lg:hidden xl:inline">Start </span>Free Trial
              </p>
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
