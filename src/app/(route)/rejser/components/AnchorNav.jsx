"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LinkButton from "@/app/components/LinkButton";

const links = [
  { label: "Overblik", href: "overview" },
  { label: "Dagsplan", href: "dagsplan" },
  { label: "Oplevelser", href: "oplevelser" },
  { label: "Praktisk info", href: "praktisk" },
  { label: "Anmeldelser", href: "anmeldelser" },
  { label: "Galleri", href: "galleri" },
  { label: "FAQ", href: "faq" },
];

const AnchorNav = ({ rejseId }) => {
  const [active, setActive] = useState("overview");

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-30% 0px -60% 0px",
        threshold: 0,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const handleClick = (href) => {
    setActive(href);

    document.getElementById(href)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="sticky top-0 z-60 col-[content] grid grid-cols-subgrid border-b border-[var(--grey-100)] bg-[var(--background-primary)]">
      <div className="col-[content] flex justify-between gap-6 overflow-x-auto pt-2.5">
        {links.map((link) => {
          const isActive = active === link.href;
          return (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className={`relative cursor-pointer pb-4 px-4 text-[16px] font-medium whitespace-nowrap transition-colors md:text-[20px] ${
                isActive
                  ? "text-[var(--text-primary)]"
                  : "text-[var(--grey-300)] hover:text-[var(--text-primary)]"
              }`}
            >
              {link.label}

              {isActive && (
                <motion.span
                  layoutId="activeAnchorUnderline"
                  className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-[var(--text-primary)]"
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                />
              )}
            </button>
          );
        })}
        <div className="pb-4">
          <LinkButton href={`/booking?id=${rejseId}`}>Book nu</LinkButton>
        </div>
      </div>
    </nav>
  );
};

export default AnchorNav;
