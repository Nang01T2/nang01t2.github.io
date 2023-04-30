import HeaderNav2 from "./HeaderNav2";
import Footer2 from "./Footer2";
import BottomRays from "public/footer_rays.png";
import TopRays from "public/rays.png";
import Image from "next/legacy/image";

export default function Container(props) {
  const { children, ...customMeta } = props;
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-dark min-h-screen ">
      <HeaderNav2 />
      <main className="flex flex-col mx-auto max-w-6xl justify-center px-4 prose prose-lg dark:prose-dark relative pt-24">
        {/* <div className="absolute overflow-hidden -top-32 md:-top-72 md:right-36">
          <Image
            className="absolute top-0 right-0"
            src={TopRays}
            alt=""
            width={924}
            height={718}
            unoptimized
          />
        </div> */}
        <div className="z-10">{children}</div>
      </main>
      <Footer2 />
      {/* <div className="absolute bottom-0 overflow-hidden">
        <Image
          className="absolute -right-44 -bottom-64 md:right-0 md:-bottom-96"
          src={BottomRays}
          alt=""
          width={924}
          height={718}
          unoptimized
        />
      </div> */}
    </div>
  );
}
