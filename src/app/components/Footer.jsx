import Newsletter from "./Newsletter";
import Link from "./Link";
import { FaSquareFacebook } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="col-[full] grid grid-cols-subgrid rounded-t-[20px] bg-(--background-secondary)">
      <Newsletter />

      <div className="col-[content] mb-13 grid gap-10 text-(--text-secondary) lg:grid-cols-[2fr_1fr]">
        <div>
          <div className="flex flex-col gap-6">
            <h5 className="font-semibold text-(--text-secondary)!">
              BikeItalien
            </h5>
            <div>
              <p>Adresse:</p>
              <Link
                href="https://www.google.com/maps/search/?api=1&query=Via+Umberto+I+24+37014+Castelnuovo+del+Garda"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
                variant="external"
              >
                <p>Via Umberto I, 24 T- 37014 Castelnuovo del Garda</p>
              </Link>
            </div>
            <div>
              <p>Kontakt:</p>
              <Link
                href="tel:+3939493672104"
                className="block"
                variant="underline"
              >
                +39-3493672104
              </Link>
              <Link
                href="mailto:joachimjerichow@hotmail.com"
                className="mb-4 block"
                variant="underline"
              >
                joachimjerichow@hotmail.com
              </Link>
            </div>
            <p className="mb-4">Copyright © 2026 bikeitalien</p>

            <div className="flex items-end gap-3">
              <a
                href="https://www.facebook.com/bikeitalien/?locale=da_DK"
                target="_blank"
                rel="noopener noreferrer"
                className="text-(--text-secondary) transition-opacity hover:opacity-70"
              >
                <FaSquareFacebook size={21} />
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
                href="/rejser"
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
            <Link key={item} href="/" variant="small" className="">
              {item}
            </Link>
          ),
        )}
      </div>
    </div>
  );
};

export default Footer;
