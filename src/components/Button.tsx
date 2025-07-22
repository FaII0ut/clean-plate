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
      ? "bg-[#e36d4e] hover:bg-[#d95f37] focus:ring-[#e36d4e]/60"
      : "bg-[#1f3040] hover:bg-[#11202f] focus:ring-[#1f3040]/60";
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

