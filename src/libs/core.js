import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const $ = (...inputs) => {
  return twMerge(clsx(inputs));
};

//export const isDev = process.env.NODE_ENV === "development";
export const isDev = false;