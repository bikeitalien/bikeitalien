import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { supabase } from "@/lib/supabase";
import ContactForm from "./components/ContactForm";
import IconGrid from "@/app/components/IconGrid";
import Faq from "@/app/components/Faq";
import { AiOutlineMail } from "react-icons/ai";
import { FiMapPin, FiPhone } from "react-icons/fi";

const KontaktSide = async () => {
  const { data, error } = await supabase.from("faq").select("*");

  if (error || !data) {
    console.error(error);
    return <p>FAQ kunne ikke indlæses</p>;
  }

  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        <Header />
      </header>
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white sm:items-start dark:bg-black">
        <ContactForm />
        <IconGrid
          className="my-32 font-bold"
          title="Har du stadig spørgsmål?"
          items={[
            {
              href: "tel:+393493672104",
              icon: <FiPhone size={30} />,
              undertitle: "Telefon",
              beskrivelse: "+39 349 367 2104",
            },
            {
              href: "mailto:joachimjerichow@hotmail.com",
              icon: <AiOutlineMail size={30} />,
              undertitle: "Email",
              beskrivelse: "Joachimjerichow@hotmail.com",
            },
            {
              href: "https://maps.google.com/?q=Via+Umberto+I+24+Castelnuovo+del+Garda+VR+Italy",
              target: "_blank",
              rel: "noopener noreferrer",
              icon: <FiMapPin size={30} />,
              undertitle: "Adresse",
              beskrivelse:
                "Via Umberto I, 24, IT-37014 Castelnuovo del Garda VR",
            },
          ]}
        />
        <section className="col-[full] grid grid-cols-subgrid bg-(--background-alternate)">
          <Faq items={data} className="py-18 md:my-32" />
        </section>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
};

export default KontaktSide;
