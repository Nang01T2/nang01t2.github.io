import {
  SiGithub,
  SiGmail,
  SiFacebook,
  SiYoutube,
  SiLinkedin,
  SiTwitter,
} from "react-icons/si";

const components = {
  mail: SiGmail,
  github: SiGithub,
  facebook: SiFacebook,
  youtube: SiYoutube,
  linkedin: SiLinkedin,
  twitter: SiTwitter,
};

const SocialIcon = ({ kind, href, size = 30 }) => {
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
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        size={size}
        className={`space-x-3 fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400`}
      />
    </a>
  );
};

export default SocialIcon;
