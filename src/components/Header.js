import Link from "next/link";
import styles from "@/styles/Header.module.css";
import { Navbar } from "flowbite-react";
import React from "react";

export default function Header({ service_title }) {
  return (
    <>
      <Navbar
        fluid={true}
        rounded={true}
        className="fixed z-50 w-full shadow bg-opacity-60 justify-between backdrop-filter backdrop-blur-lg"
      >
        <Link href="/">
          <h2 className="font-extrabold text-xl">{service_title}</h2>
        </Link>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Link href="/">
            <Navbar.Link>Home</Navbar.Link>
          </Link>
          <Link href="/reading-history">
            <Navbar.Link>Reading History</Navbar.Link>
          </Link>
          <Link href="/post-blog">
            <Navbar.Link>Post Blog</Navbar.Link>
          </Link>
          <Link href="/delete-blog">
            <Navbar.Link>Delete Blog</Navbar.Link>
          </Link>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
