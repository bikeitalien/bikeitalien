"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { ChevronDownIcon, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { usePathname } from "next/navigation";

// Mapping fra kategori til kanonisk rejse-ID (kun 3 rejser har rigtige sider)
const KATEGORI_ID = {
  Mountainbike: 1,
  Cykelturisme: 2,
  Eventyrrejse: 3,
  Familieferie: 1,
  Gravel: 2,
  Landevej: 3,
};

// Kolonner til desktop-dropdown — hver kolonne vises side om side
const KOLONNER = [
  ["Se alle rejser", "Mountainbike", "Landevej"],
  ["Cykelturisme", "Eventyrrejse"],
  ["Familieferie", "Gravel"],
];

// Alle kategorier uden "Se alle rejser" — bruges i mobil panel 1
const KATEGORIER = KOLONNER.flat().filter((k) => k !== "Se alle rejser");

const HeaderClient = ({ rejse }) => {
  // --- State ---
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobilePanel, setMobilePanel] = useState(0);
  const [selectedKategori, setSelectedKategori] = useState(null);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const isIndex = pathname === "/";
  const isRejser = pathname === "/rejser" || pathname.startsWith("/rejser/");
  const isOm = pathname === "/om";
  const isKontakt = pathname === "/kontakt";

  // --- Luk alle menuer og nulstil state ---
  const closeAll = () => {
    setMenuOpen(false);
    setMobileOpen(false);
    setMobilePanel(0);
    setSelectedKategori(null);
  };

  // --- Baggrundsfarve og skygge fader ind ved scroll; overrides når menu er åben ---
  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(251,248,243,0)", "rgba(251,248,243,1)"],
  );
  const shadow = useTransform(
    scrollY,
    [0, 80],
    ["0 4px 20px rgba(0,0,0,0)", "0 4px 20px rgba(0,0,0,0.1)"],
  );
  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 10));
  const isLight = isIndex && !scrolled;

  // --- Desktop dropdown: renders kategori-kolonner med rejser under hver ---
  const renderKategorier = (onClose) =>
    KOLONNER.map((kolonne, i) => (
      <div key={i} className="flex w-full flex-col gap-4 px-0 md:gap-10.5">
        {kolonne.map((kategori) => {
          const alleRejser = kategori === "Se alle rejser";
          return (
            <ul
              key={kategori}
              className={
                alleRejser ? "border-b border-(--grey-200) p-1" : "p-1"
              }
            >
              <div
                className={`flex items-center justify-between rounded-[10px] p-1.5 hover:bg-(--card-background)${alleRejser ? "" : " md:hover:bg-transparent"}`}
              >
                {alleRejser ? (
                  <Link
                    href="/rejser"
                    className="flex-1 font-semibold"
                    onClick={onClose}
                  >
                    <span style={{ fontSize: "var(--p-size)" }}>
                      {kategori}
                    </span>
                  </Link>
                ) : (
                  <span
                    className="flex-1 font-semibold"
                    style={{ fontSize: "var(--p-size)" }}
                  >
                    {kategori}
                  </span>
                )}
                {alleRejser && (
                  <IoIosArrowForward color="var(--text-primary)" />
                )}
              </div>
              {!alleRejser && (
                <div className="pt-1 pb-3 pl-1 md:pb-0">
                  <li className="border-t border-(--grey-200) py-1 pl-1">
                    <Link
                      href={`/rejser?kategori=${encodeURIComponent(kategori)}`}
                      className="flex items-center justify-between rounded-[10px] px-2 py-1.5 hover:bg-(--card-background)"
                      onClick={onClose}
                    >
                      <p
                        style={{
                          fontSize: "var(--tag-size)",
                          fontWeight: "semibold",
                        }}
                      >
                        Se alle
                      </p>
                      <IoIosArrowForward color="var(--text-primary)" />
                    </Link>
                  </li>
                  {rejse
                    ?.filter((item) => item.kategori === kategori)
                    .map((item) => (
                      <li
                        key={item.id}
                        className="border-t border-(--grey-200) py-1 pl-1"
                      >
                        <Link
                          href={`/rejser/${KATEGORI_ID[item.kategori] ?? item.id}`}
                          className="flex items-center justify-between rounded-[10px] px-2 py-1.5 hover:bg-(--card-background)"
                          onClick={onClose}
                        >
                          <p style={{ fontSize: "var(--tag-size)" }}>
                            {item.titel}
                          </p>
                          <IoIosArrowForward color="var(--text-primary)" />
                        </Link>
                      </li>
                    ))}
                </div>
              )}
            </ul>
          );
        })}
      </div>
    ));

  return (
    <>
      <motion.section
        style={{
          backgroundColor:
            !isIndex || scrolled ? "var(--background-primary)" : bg,
          boxShadow:
            !isIndex || scrolled ? "0 4px 20px rgba(0,0,0,0.1)" : shadow,
        }}
        className={`relative col-[full] grid grid-cols-subgrid${isIndex ? "" : " mb-8"}`}
      >
        <div
          className="font-family relative col-[content] flex items-center justify-between py-4"
          onMouseLeave={closeAll}
          style={{
            color: isLight ? "var(--text-secondary)" : "var(--text-primary)",
            transition: "color 0.3s ease",
            "--nav-hover-bg": isLight
              ? "rgba(243,242,234,0.2)"
              : "var(--card-background)",
          }}
        >
          <Link href="/">
            <h5 className="font-semibold">BikeItalien</h5>
          </Link>

          {/* Desktop nav */}
          <div className="hidden items-center md:flex">
            <div className="px-2 md:px-6">
              <button
                onMouseEnter={() => setMenuOpen(true)}
                className="group flex w-fit flex-col items-start px-5 py-2.5"
              >
                <span className="-mr-1 inline-flex items-center gap-1">
                  <p className="font-semibold">Alle rejser</p>
                  <ChevronDownIcon
                    className={`size-6 transition duration-300 ${menuOpen ? "rotate-180" : ""}`}
                    aria-hidden="true"
                  />
                </span>
                <div
                  className={`h-px w-full origin-left rounded-full ${isLight ? "bg-(--text-secondary)" : "bg-(--text-primary)"} transition-transform duration-300 ease-out ${isRejser ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </button>
            </div>
            <div className="px-2 md:px-6">
              <Link
                href="/om"
                className="group flex flex-col items-start px-5 py-2.5"
                onMouseEnter={() => setMenuOpen(false)}
                onClick={closeAll}
              >
                <p className="font-semibold">Om BikeItalien</p>
                <div
                  className={`h-px w-full origin-left rounded-full ${isLight ? "bg-(--text-secondary)" : "bg-(--text-primary)"} transition-transform duration-300 ease-out ${isOm ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            </div>
            <div className="pl-2 md:pl-6">
              <Link
                href="/kontakt"
                className="group flex flex-col items-start px-5 py-2.5"
                onMouseEnter={() => setMenuOpen(false)}
                onClick={closeAll}
              >
                <p className="font-semibold">Kontakt</p>
                <div
                  className={`h-px w-full origin-left rounded-full ${isLight ? "bg-(--text-secondary)" : "bg-(--text-primary)"} transition-transform duration-300 ease-out ${isKontakt ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            </div>
          </div>

          {/* Mobile burger button */}
          <button
            aria-label={mobileOpen ? "Luk menu" : "Åbn menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-all md:hidden"
            onClick={() => {
              setMobileOpen((prev) => !prev);
              setMobilePanel(0);
              setSelectedKategori(null);
            }}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          {/* Desktop "Alle rejser" dropdown */}
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute top-full right-0 left-0 z-50 hidden md:block"
                style={{ color: "var(--text-primary)" }}
              >
                <div className="mt-1.5 overflow-hidden rounded-[20px] bg-(--background-primary) shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                  <div className="p-7">
                    <div className="flex gap-10.5">
                      {renderKategorier(() => setMenuOpen(false))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile burger dropdown */}
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                className="absolute top-full right-0 left-0 z-50 md:hidden"
                style={{ color: "var(--text-primary)" }}
              >
                <div className="mt-1.5 overflow-hidden rounded-[20px] bg-(--background-primary) shadow-[0_0_20px_rgba(0,0,0,0.1)]">
                  <motion.div
                    className="flex"
                    animate={{ x: `${-mobilePanel * (100 / 3)}%` }}
                    transition={{
                      type: "tween",
                      ease: "easeInOut",
                      duration: 0.3,
                    }}
                    style={{ width: "300%" }}
                  >
                    {/* Panel 0: Hoved-navigation */}
                    <div
                      className="flex flex-col overflow-y-auto"
                      style={{
                        width: "33.333%",
                        maxHeight: "calc(100dvh - 70px)",
                      }}
                    >
                      <button
                        onClick={() => setMobilePanel(1)}
                        className="flex w-full items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                      >
                        <p
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Alle rejser
                        </p>
                        <IoIosArrowForward
                          color="var(--text-primary)"
                          size={20}
                        />
                      </button>
                      <Link
                        href="/om"
                        className="flex items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                        onClick={closeAll}
                      >
                        <p
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Om BikeItalien
                        </p>
                        <IoIosArrowForward
                          color="var(--text-primary)"
                          size={20}
                        />
                      </Link>
                      <Link
                        href="/kontakt"
                        className="flex items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                        onClick={closeAll}
                      >
                        <p
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Kontakt
                        </p>
                        <IoIosArrowForward
                          color="var(--text-primary)"
                          size={20}
                        />
                      </Link>
                    </div>

                    {/* Panel 1: Kategorier */}
                    <div
                      className="flex flex-col overflow-y-auto"
                      style={{
                        width: "33.333%",
                        maxHeight: "calc(100dvh - 70px)",
                      }}
                    >
                      <button
                        onClick={() => setMobilePanel(0)}
                        className="flex w-full items-center gap-2 border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                      >
                        <IoIosArrowBack color="var(--text-primary)" size={20} />
                        <span
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Gå tilbage til oversigten
                        </span>
                      </button>
                      <Link
                        href="/rejser"
                        className="flex items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                        onClick={closeAll}
                      >
                        <p
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Se alle rejser
                        </p>
                        <IoIosArrowForward
                          color="var(--text-primary)"
                          size={20}
                        />
                      </Link>
                      {KATEGORIER.map((kategori) => (
                        <button
                          key={kategori}
                          onClick={() => {
                            setSelectedKategori(kategori);
                            setMobilePanel(2);
                          }}
                          className="flex w-full items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                        >
                          <p style={{ fontSize: "var(--p-size)" }}>
                            {kategori}
                          </p>
                          <IoIosArrowForward
                            color="var(--text-primary)"
                            size={20}
                          />
                        </button>
                      ))}
                    </div>

                    {/* Panel 2: Rejser i valgt kategori */}
                    <div
                      className="flex flex-col overflow-y-auto"
                      style={{
                        width: "33.333%",
                        maxHeight: "calc(100dvh - 70px)",
                      }}
                    >
                      <button
                        onClick={() => setMobilePanel(1)}
                        className="flex w-full items-center gap-2 border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                      >
                        <IoIosArrowBack color="var(--text-primary)" size={20} />
                        <span
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Gå tilbage til kategorierne
                        </span>
                      </button>
                      <Link
                        href={`/rejser?kategori=${encodeURIComponent(selectedKategori ?? "")}`}
                        className="flex items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                        onClick={closeAll}
                      >
                        <p
                          className="font-semibold"
                          style={{ fontSize: "var(--p-size)" }}
                        >
                          Se alle rejser i kategorien, {selectedKategori}
                        </p>
                        <IoIosArrowForward
                          color="var(--text-primary)"
                          size={20}
                        />
                      </Link>
                      {rejse
                        ?.filter((item) => item.kategori === selectedKategori)
                        .slice(0, 5)
                        .map((item) => (
                          <Link
                            key={item.id}
                            href={`/rejser/${KATEGORI_ID[item.kategori] ?? item.id}`}
                            className="flex items-center justify-between border-b border-(--grey-200) px-5 py-5 hover:bg-(--card-background)"
                            onClick={closeAll}
                          >
                            <p style={{ fontSize: "var(--p-size)" }}>
                              {item.titel}
                            </p>
                            <IoIosArrowForward
                              color="var(--text-primary)"
                              size={20}
                            />
                          </Link>
                        ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.section>
    </>
  );
};

export default HeaderClient;
