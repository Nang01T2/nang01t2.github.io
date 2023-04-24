import { fontMono, fontSans } from '@/libs/fonts';

export default function Fonts() {
  return (
    <>
      <style jsx global>{`
        :root {
          --font-sans: ${fontSans.style.fontFamily};
          --font-mono: ${fontMono.style.fontFamily};
        }
      `}</style>
    </>
  );
}
