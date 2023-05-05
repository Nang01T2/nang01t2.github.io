// import Mail from "./mail.svg";
// import Github from "./github.svg";
// import Facebook from "./facebook.svg";
// import Youtube from "./youtube.svg";
// import Linkedin from "./linkedin.svg";
// import Twitter from "./twitter.svg";

import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import TagIcon from "../icons/TagIcon";
import TwitterIcon from "../icons/TwitterIcon";
import VelogIcon from "../icons/VelogIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

// Icons taken from: https://simpleicons.org/

const components = {
  mail: MailIcon,
  github: GithubIcon,
  //facebook: Facebook,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  twitter: TwitterIcon,
};

type T = keyof typeof components;

const SocialIcon = ({
  kind,
  href,
  size = 8,
}: {
  kind: T;
  href?: string;
  size: number;
}) => {
  if (
    !href ||
    (kind === "mail" &&
      !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href))
  )
    return null;

  const SocialSvg = components[kind];

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      data-no-external-icon
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-400 hover:text-gray-700 dark:text-gray-200 dark:hover:text-gray-400 h-${size} w-${size} transition-colors`}
      />
    </a>
  );
};

export default SocialIcon;
