/* 
This component is used to create the tags in the TAGS page
*/

import Link from 'next/link';
import kebabCase from '@/libs/utils/kebabCase';

const Tag = ({ text }) => {
  return (
    <Link
      href={`/tags/${kebabCase(text)}`}
      className="mr-4 text-mm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
    >
      {text.split(' ').join('-')}
    </Link>
  );
};

export default Tag;
