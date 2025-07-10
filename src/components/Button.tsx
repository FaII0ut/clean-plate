import React from "react";


type ButtonProps = (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string })
) & {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
};

export default function Button(props: ButtonProps) {
  const {
    children,
    className = "",
    variant = "primary",
    href,
    ...rest
  } = props;

  const base =
    "text-white px-6 py-3 rounded-full font-satoshi font-semibold text-base transition-colors focus:outline-none focus:ring-2";
  const color =
    variant === "secondary"
      ? "bg-[#eb7147] hover:bg-[#d95f37] focus:ring-[#eb7147]/60"
      : "bg-[#396042] hover:bg-[#2d4c33] focus:ring-[#396042]/60";
  const allClasses = `${base} ${color} ${className}`;

  if (href) {
    // Only pass anchor props
    const anchorProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={href} className={allClasses} {...anchorProps}>
        {children}
      </a>
    );
  } else {
    // Only pass button props
    const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={allClasses} {...buttonProps}>
        {children}
      </button>
    );
  }
}

