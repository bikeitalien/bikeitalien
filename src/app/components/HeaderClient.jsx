"use client";
import { IoIosArrowForward } from "react-icons/io";
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
  const { scrollY } = useScroll();

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
        <div className="font-family text-primary col-[content] flex h-16 items-center justify-between">
          <Link href="/">
            <h6 className="font-semibold">LOGO</h6>
          </Link>
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem className="px-10">
                <NavigationMenuTrigger className="hover:bg-(--card-background)">
                  <h6 className="font-semibold">Alle Rejser</h6>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="text-primary rounded-[30px] border-none bg-(--background-primary)">
                  <div className="grid w-300 grid-cols-3 px-6 py-5">
                    <ul className="w-full border-r border-(--grey-200) px-6">
                      <h6 className="p-2 font-semibold">Cykelturisme</h6>
                      {rejse
                        ?.filter((item) => item.kategori === "Cykelturisme")
                        .map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-(--grey-200) p-1"
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
                    </ul>
                    <ul className="w-full border-r border-(--grey-200) px-6">
                      <h6 className="p-2 font-semibold">Mountainbike</h6>
                      {rejse
                        ?.filter((item) => item.kategori === "Mountainbike")
                        .map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-(--grey-200) p-1"
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
                    </ul>
                    <ul className="w-full border-r border-(--grey-200) px-6">
                      <h6 className="p-2 font-semibold">Familieferie</h6>
                      {rejse
                        ?.filter((item) => item.kategori === "Familieferie")
                        .map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-(--grey-200) p-1"
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
                    </ul>
                  </div>

                  <div className="px-6 py-5">
                    <div className="border-t border-(--grey-200)" />
                  </div>

                  <div className="grid w-300 grid-cols-3 px-6 py-5">
                    <ul className="w-full border-r border-(--grey-200) px-6">
                      <h6 className="p-2 font-semibold">Landevej</h6>
                      {rejse
                        ?.filter((item) => item.kategori === "Landevej")
                        .map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-(--grey-200) p-1"
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
                    </ul>
                    <ul className="w-full border-r border-(--grey-200) px-6">
                      <h6 className="p-2 font-semibold">Eventyrrejse</h6>
                      {rejse
                        ?.filter((item) => item.kategori === "Eventyrrejse")
                        .map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-(--grey-200) p-1"
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
                    </ul>
                    <ul className="w-full border-r border-(--grey-200) px-6">
                      <h6 className="p-2 font-semibold">Gravel</h6>
                      {rejse
                        ?.filter((item) => item.kategori === "Gravel")
                        .map((item) => (
                          <li
                            key={item.id}
                            className="border-b border-(--grey-200) p-1"
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
                    </ul>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-10">
                <NavigationMenuLink
                  className="hover:bg-(--card-background)"
                  href="/om-bikeitalien"
                >
                  <h6 className="font-semibold">Om BikeItalien</h6>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem className="px-10">
                <NavigationMenuLink
                  className="hover:bg-(--card-background)"
                  href="/kontakt"
                >
                  <h6 className="font-semibold">Kontakt</h6>
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
