import GithubIcon from "../icons/GithubIcon";
import InstagramIcon from "../icons/InstagramIcon";
import LinkedinIcon from "../icons/LinkedinIcon";
import MailIcon from "../icons/MailIcon";
import TagIcon from "../icons/TagIcon";
import TwitterIcon from "../icons/TwitterIcon";
import VelogIcon from "../icons/VelogIcon";
import YoutubeIcon from "../icons/YoutubeIcon";

const icons = {
  email: MailIcon,
  github: GithubIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  velog: VelogIcon,
  linkedin: LinkedinIcon,
  youtube: YoutubeIcon,
};

type T = keyof typeof icons;

export default function ContactsIcon({
  contact,
  ...props
}: React.ComponentProps<"svg"> & { contact: T }) {
  const Component = icons[contact] ?? TagIcon;

  return <Component {...props} />;
}
