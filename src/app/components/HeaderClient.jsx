"use client";
import { useState } from "react";
import { IoIosArrowForward, IoIosAdd, IoIosRemove } from "react-icons/io";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { motion, useScroll, useTransform } from "framer-motion";

const HeaderClient = ({ rejse }) => {
  const [openCategories, setOpenCategories] = useState(new Set());
  const { scrollY } = useScroll();

  const toggleCategory = (kategori) => {
    setOpenCategories((prev) => {
      const next = new Set(prev);
      next.has(kategori) ? next.delete(kategori) : next.add(kategori);
      return next;
    });
  };

  const bg = useTransform(
    scrollY,
    [0, 80],
    ["rgba(255,255,255,0)", "var(--background-primary)"],
  );

  const boxShadow = useTransform(
    scrollY,
    [0, 80],
    ["0 0 0 rgba(0,0,0,0)", "0 1px 3px rgba(0,0,0,0.1)"],
  );

  return (
    <>
      <motion.section
        style={{
          backgroundColor: bg,
          boxShadow,
        }}
        className="col-[full] grid grid-cols-subgrid"
      >
        <div className="font-family text-primary col-[content] flex items-center justify-between py-4">
          <Link href="/">
            <h5 className="font-semibold">BikeItalien</h5>
          </Link>
          <NavigationMenu
            viewport={false}
            onValueChange={(value) => {
              if (!value) setOpenCategories(new Set());
            }}
          >
            <NavigationMenuList>
              <NavigationMenuItem className="static px-2 xl:px-6">
                <NavigationMenuTrigger className="hover:bg-(--card-background)">
                  <p className="font-medium">Alle rejser</p>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-primary right-0! left-auto! translate-x-0! rounded-[20px] border-none bg-(--background-primary)">
                  <div className="flex max-h-[80svh] flex-col gap-6 overflow-y-auto overscroll-contain px-6 py-5 xl:max-h-none xl:flex-row xl:gap-4 xl:overflow-visible">
                    {[
                      ["Cykelturisme", "Gravel"],
                      ["Familieferie", "Mountainbike"],
                      ["Landevej", "Eventyrrejse"],
                    ].map((kolonne, i) => (
                      <div
                        key={i}
                        className="flex min-w-95 flex-col gap-6 px-6 xl:gap-10"
                      >
                        {kolonne.map((kategori) => (
                          <ul key={kategori}>
                            <p
                              className="flex cursor-pointer items-center justify-between rounded-[10px] p-2 font-semibold hover:bg-(--card-background) xl:cursor-default xl:rounded-none xl:hover:bg-transparent"
                              onClick={() => toggleCategory(kategori)}
                            >
                              {kategori}
                              <span className="xl:hidden">
                                {openCategories.has(kategori) ? (
                                  <IoIosRemove
                                    color="var(--text-primary)"
                                    size={24}
                                  />
                                ) : (
                                  <IoIosAdd
                                    color="var(--text-primary)"
                                    size={24}
                                  />
                                )}
                              </span>
                            </p>
                            <div
                              className={`${openCategories.has(kategori) ? "block" : "hidden"} xl:block`}
                            >
                              {rejse
                                ?.filter((item) => item.kategori === kategori)
                                .map((item) => (
                                  <li
                                    key={item.id}
                                    className="border-t border-(--grey-200) p-1"
                                  >
                                    <Link
                                      href={`/rejser/${item.id}`}
                                      className="flex items-center justify-between rounded-[10px] px-2 py-1.5 hover:bg-(--card-background)"
                                    >
                                      <p>{item.titel}</p>
                                      <IoIosArrowForward color="var(--text-primary)" />
                                    </Link>
                                  </li>
                                ))}
                            </div>
                          </ul>
                        ))}
                      </div>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-2 xl:px-6">
                <NavigationMenuLink
                  className="hover:bg-(--card-background)"
                  href="/om"
                >
                  <p className="font-medium">Om BikeItalien</p>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="pl-2 xl:pl-6">
                <NavigationMenuLink
                  className="hover:bg-(--card-background)"
                  href="/kontakt"
                >
                  <p className="font-medium">Kontakt</p>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </motion.section>
    </>
  );
};

export default HeaderClient;
