import { MdLightMode } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === "dark" ? (
          <MdLightMode
            className="flex justify-center items-center text-md text-white lg:text-current px-3 w-full h-10 py-2 rounded bg-blue-700 font-bold hover:bg-blue-800 lg:mt-0 lg:bg-transparent lg:hover:bg-transparent cursor-pointer"
            onClick={() => setTheme("light")}
          />
        ) : (
          <BsMoon
            className="flex justify-center items-center text-md text-white lg:text-current px-3 w-full h-10 py-2 rounded bg-blue-700 font-bold hover:bg-blue-800 lg:mt-0 lg:bg-transparent lg:hover:bg-transparent cursor-pointer"
            onClick={() => setTheme("dark")}
          />
        ))}
    </>
  );
}
