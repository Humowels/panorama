"use client";
import React from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { usePathname } from "next/navigation";

interface IProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: string;
}

export const NavLink = React.forwardRef<HTMLAnchorElement, IProps>(
  ({ className, ...props }, ref) => {
    const pathName = usePathname();
    const isActive = pathName.includes(props.href as string);

    const defaultClass =
      "border border-secondary text-center bg-primary text-white flex items-center py-2 text-sm px-5";
    const activeClass =
      "bg-secondary relative after:content-['']  after:absolute after:-bottom-[11px] after:-left-[1px] after:w-0 after:h-0  after:border-l-[95px] after:border-r-[95px] after:border-t-[10px] after:border-t-secondary after:border-l-white after:border-r-white ";

    return (
      <Link
        ref={ref}
        href={props.href as string}
        className={twMerge(defaultClass, className, isActive && activeClass)}
        {...props}
      >
        {props.children}
      </Link>
    );
  },
);

NavLink.displayName = "NavLink";
