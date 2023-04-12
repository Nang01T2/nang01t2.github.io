import siteMetadata from '@/lib/siteMetadata';
import Link from './Link';

export default function Footer() {
  return (
    <footer className="border-t">
      <div className="mt-4 flex flex-col items-center">
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>

          <div>{` • `}</div>
          <div>{`${new Date().getFullYear()}`}</div>

          <div>{` • `}</div>
          <Link href="/">{siteMetadata.headerTitle}</Link>
        </div>

        <div className="mb-4 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://openpuppies.com/#DS2IZ6K">
            Have a nice day! 🐶❤️
          </Link>
        </div>
      </div>
    </footer>
  );
}
