import { supabase } from "@/lib/supabase";
import { FaLongArrowAltRight } from "react-icons/fa";

import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = async () => {
  const { data: rejse, error } = await supabase.from("cykelrejser").select("*");

  if (error) {
    console.error(error);
  }

  return (
    <>
      {/* udkommenteret da modal er dumt ellers <section className="font-family col-[content] text-primary flex h-16 grid-cols-subgrid items-center justify-between"> */}
      <section className="font-family text-primary col-[content] flex h-16 grid-cols-subgrid items-center justify-between gap-20">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem className="px-10">
              <Link href="/">LOGO</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-10">
              <NavigationMenuTrigger className="hover:bg-(--card-background)">
                Alle Rejser
              </NavigationMenuTrigger>
              <NavigationMenuContent className="text-primary rounded-[30px] border-none bg-(--background-primary)">
                {/* <div className="grid w-300 grid-cols-3 pt-8 pr-4 pb-8 pl-4"> */}
                <div className="grid w-300 grid-cols-3 px-6 py-5">
                  <ul className="w-full border-r border-(--grey-200) px-6">
                    <p className="p-2 font-semibold">Cykelturisme</p>
                    {rejse
                      ?.filter((item) => item.kategori === "Cykelturisme")
                      .map((item) => (
                        // udkommenteret da padding fylder meget <li key={item.id} className="pt-2.25 pr-4 pb-1.75 pl-2">
                        <li
                          key={item.id}
                          className="border-b border-(--grey-200) p-1"
                        >
                          <Link
                            href={`/rejser/${item.id}`}
                            className="flex items-center justify-between rounded-[10px] px-2 py-1.5 hover:bg-(--card-background)"
                          >
                            {item.titel}

                            <FaLongArrowAltRight color="var(--text-primary)" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <ul className="w-full border-r border-(--grey-200) px-6">
                    <p className="p-2 font-semibold">Mountainbike</p>
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
                            {item.titel}

                            <FaLongArrowAltRight color="var(--text-primary)" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <ul className="w-full border-r border-(--grey-200) px-6">
                    <p className="p-2 font-semibold">Familieferie</p>
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
                            {item.titel}

                            <FaLongArrowAltRight color="var(--text-primary)" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                </div>

                {/* <div className="mx-10 my-10 border-t border-(--grey-200)" /> */}
                <div className="px-11">
                  <div className="border-t border-(--grey-200)" />
                </div>

                <div className="grid w-300 grid-cols-3 px-4 py-5">
                  <ul className="w-full border-r border-(--grey-200) px-6">
                    <p className="p-2 font-semibold">Landevej</p>
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
                            {item.titel}

                            <FaLongArrowAltRight color="var(--text-primary)" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <ul className="w-full border-r border-(--grey-200) px-6">
                    <p className="p-2 font-semibold">Eventyrrejse</p>
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
                            {item.titel}

                            <FaLongArrowAltRight color="var(--text-primary)" />
                          </Link>
                        </li>
                      ))}
                  </ul>
                  <ul className="w-full border-r border-(--grey-200) px-6">
                    <p className="p-2 font-semibold">Gravel</p>
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
                            {item.titel}

                            <FaLongArrowAltRight color="var(--text-primary)" />
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
                Om BikeItalien
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem className="px-10">
              <NavigationMenuLink
                className="hover:bg-(--card-background)"
                href="/kontakt"
              >
                Kontakt
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </section>
    </>
  );
};

export default Header;
