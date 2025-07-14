import React, { useEffect, useState } from "react";
import Link from "next/link";


interface MobileNavDropdownProps {
  open: boolean;
  onClose: () => void;
}

const ANIMATION_DURATION = 350; // ms

export default function MobileNavDropdown({ open, onClose }: MobileNavDropdownProps) {
  const [show, setShow] = useState(open);
  const [animation, setAnimation] = useState("fadeInDown");
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (open) {
      setShow(true);
      setAnimation("fadeInDown");
      setLeaving(false);
    } else {
      setAnimation("fadeInUp");
      setLeaving(true);
      const timeout = setTimeout(() => {
        setShow(false);
        setLeaving(false);
      }, ANIMATION_DURATION);
      return () => clearTimeout(timeout);
    }
  }, [open]);

  if (!show) return null;

  return (
    <div
      className={`md:hidden absolute overflow-hidden px-3 top-20 left-0 w-full z-50 transition-opacity duration-300 ${open && !leaving ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
      style={{ pointerEvents: open && !leaving ? "auto" : "none" }}
    >
      <nav
        className={`flex flex-col gap-4 px-6 pb-6 pt-2 bg-white rounded-3xl animate-${animation}`}
        style={{ animationDuration: `${ANIMATION_DURATION}ms` }}
      >
        <Link href="/" onClick={onClose} className="py-1 font-satoshi text-base text-[#22223B]">Home</Link>
        <Link href="/menu" onClick={onClose} className="py-1 font-satoshi text-base text-[#22223B]">Menu</Link>
        <Link href="/about" onClick={onClose} className="py-1 font-satoshi text-base text-[#22223B]">About</Link>
        <Link href="/pricing" onClick={onClose} className="py-1 font-satoshi text-base text-[#22223B]">How it works</Link>
        <Link href="/contact" onClick={onClose} className="py-1 font-satoshi text-base text-[#22223B]">Contact</Link>
        {/* Add subscribe button if needed */}
      </nav>
    </div>
  );
}
