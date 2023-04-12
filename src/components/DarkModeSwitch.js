import { MdLightMode } from 'react-icons/md';
import { BsMoon } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function DarkModeSwitch() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const currentTheme = theme === 'system' ? systemTheme : theme;
  return (
    <>
      {mounted &&
        (currentTheme === 'dark' ? (
          <MdLightMode
            className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 cursor-pointer"
            onClick={() => setTheme('light')}
          />
        ) : (
          <BsMoon
            className="ml-1 mr-1 h-8 w-8 rounded p-1 sm:ml-4 cursor-pointer"
            onClick={() => setTheme('dark')}
          />
        ))}
    </>
  );
}
