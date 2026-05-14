import Newsletter from "./Newsletter";
import Link from "./Link";
import { IoLogoFacebook } from "react-icons/io5";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <footer>
      <div className="col-[full] grid grid-cols-subgrid rounded-t-[20px] bg-(--background-secondary)">
        <Newsletter />

        <div className="col-[content] mb-13 grid gap-10 text-(--text-secondary) lg:grid-cols-[2fr_1fr]">
          <div>
            <p className="mb-6">Logo</p>
            <p className="mb-1">Adresse:</p>
            <p className="">Via Umberto I, 24</p>
            <p className="mb-6">T- 37014 Castelnuovo del Garda</p>
            <p className="mb-1">Kontakt:</p>
            <Link href="tel:+3939493672104" className="block">
              +39-3493672104
            </Link>
            <Link
              href="mailto:joachimjerichow@hotmail.com"
              className="mb-6 block"
            >
              joachimjerichow@hotmail.com
            </Link>
            <p className="mb-4">Copyright © 2026 bikeitalien</p>
            <div className="flex items-center gap-3">
              <a
                href="https://www.facebook.com/bikeitalien/?locale=da_DK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text-secondary) transition-opacity hover:opacity-70"
              >
                <IoLogoFacebook size={22} />
              </a>
              <a
                href="https://www.instagram.com/joachimjerichow/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text-secondary) transition-opacity hover:opacity-70"
              >
                <BsInstagram size={20} />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Link href="/rejser" variant="underline" className="mb-4 block">
                Alle rejser
              </Link>
              {[
                "Cykelturisme",
                "Mountainbike",
                "Familieferier",
                "Landevej",
                "Eventyrrejser",
                "Gravel",
              ].map((item) => (
                <Link
                  key={item}
                  href="#"
                  variant="default"
                  className="mb-3 block"
                >
                  {item}
                </Link>
              ))}
            </div>

            <div>
              <Link href="/om" variant="underline" className="mb-4 block">
                Om Bikelitalien
              </Link>
              <Link href="/kontakt" variant="underline" className="mb-4 block">
                Kontakt
              </Link>
              <Link
                href="/rejsebestemmelser.pdf"
                variant="external"
                target="_blank"
                rel="noopener noreferrer"
                className=""
              >
                Rejsebestemelser
              </Link>
            </div>
          </div>
        </div>

        <div className="col-[content] flex justify-center gap-8 border-t border-(--text-secondary) pt-6 pb-13 text-(--text-secondary)">
          {["Privacy Policy", "Terms of Service", "Cookies Settings"].map(
            (item) => (
              <Link key={item} href="#" variant="small" className="">
                {item}
              </Link>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
