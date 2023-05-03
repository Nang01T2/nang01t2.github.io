import Logo from "../Logo";
import NavBar from "../NavBar";
import MobileNavBar from "../MobileNavBar";
import DarkModeButton from "../DarkModeButton";
import LocaleSwitch from "../LocaleSwitch";

export default function HeaderNav2() {
  return (
    <div
      id="headernav"
      className="fixed h-16 z-50 w-full text-gray-900 bg-white bg-opacity-50 dark:bg-dark dark:text-gray-100 backdrop-filter backdrop-blur-lg dark:bg-opacity-50 shadow-md"
    >
      <div className="flex items-center justify-between max-w-6xl px-4 py-2 mx-auto sm:px-6 md:space-x-10">
        <Logo />
        <NavBar />
        <LocaleSwitch />
        <DarkModeButton />

        {/* Conditional rendering here to ensure that dialog portal isn't removed on route change. */}
        <MobileNavBar />
      </div>
    </div>
  );
}
