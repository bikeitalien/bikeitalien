import Header from "@/app/components/Header";
import { supabase } from "@/lib/supabase";
import Footer from "@/app/components/Footer";
import ImageCardSection from "@/app/components/ImageCardSection";
import ContactSection from "@/app/components/ContactSection";
import Testimonials from "@/app/components/Testimonials";
import IconGrid from "@/app/components/IconGrid";
import { IoAirplaneOutline, IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { PiPersonSimpleBike } from "react-icons/pi";
import IdPageHeading from "../components/IdPageHeading";
import Image from "next/image";
import Gallery from "@/app/components/Gallery";
import AnchorNav from "../components/AnchorNav";
import ItinerarySection from "../components/ItinerarySection";
import Faq from "@/app/components/Faq";

export default async function RejseDetalje({ params }) {
  const { id } = await params;

  const { data: rejse, error } = await supabase
    .from("cykelrejser")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return <p>Rejsen blev ikke fundet.</p>;
  }
  const faqItems = [
    {
      question: "Hvordan booker jeg en cykelferie?",
      answer:
        "Du kan tilmelde dig direkte via de enkelte ture på hjemmesiden. Hvis du er i tvivl om, hvilken tur der passer til dig, er du altid velkommen til at kontakte mig, så hjælper jeg dig videre. ",
    },
    {
      question: "Hvad er forskellen på de forskellige cykelferier?",
      answer:
        "Jeg arbejder med fem typer cykelferier: familieferier, cykelturisme, landevej, mountainbike og eventyrrejser. Nogle handler mest om oplevelser og kultur, andre om træning og cykling. Cyklen er altid omdrejningspunktet, men fokus varierer fra tur til tur. ",
    },
    {
      question: "Er der guide på turene?",
      answer:
        "Familieferierne er uden guide og giver jer frihed til selv at køre ruterne. De øvrige ture er med guide, hvor du får lokalkendskab, tryghed og fællesskab undervejs.",
    },
    {
      question: "Er cykel og udstyr inkluderet?",
      answer:
        "På de fleste ture kan du leje cykel og udstyr, så du ikke selv skal medbringe det. Du kan også ofte tage din egen cykel med, hvis du foretrækker det.",
    },
    {
      question: "Er mad og ophold inkluderet?",
      answer:
        "Overnatning er altid en del af pakken. På nogle ture er flere måltider inkluderet, mens andre giver mere frihed til selv at vælge restauranter undervejs, det afhænger af rejsetypen.",
    },
    {
      question: "Hvilket niveau skal jeg være på?",
      answer:
        "Der findes ture til både begyndere, familier og erfarne ryttere. Nogle ruter er rolige og oplevelsesorienterede, mens andre er mere krævende og fokuserer på træning og højdemeter.",
    },
    {
      question: "Kan jeg komme med som gruppe eller klub?",
      answer:
        "Ja, jeg laver også skræddersyede cykelferier for klubber, virksomheder og vennegrupper. Her tilpasses rute, niveau og indhold efter jeres ønsker. Kontakt mig gerne så finder vi ud af det.",
    },
  ];

  //fra array af strings (url) til array af objects
  const galleryImages = rejse.gallery.map((src, index) => ({
    src,
    alt: `${rejse.title} billede ${index + 1}`,
  }));

  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        <Header />
      </header>
      <main>
        <IdPageHeading rejse={rejse} />
        <AnchorNav />
        <ItinerarySection />
        <ImageCardSection rejse={rejse} />
        <IconGrid
          title="Hvad har vi styr på for dig?"
          items={rejse.praktisk.map((item, i) => ({
            icon: [
              <IoAirplaneOutline size={30} />,
              <AiOutlineHome size={30} />,
              <IoRestaurantOutline size={30} />,
              <PiPersonSimpleBike size={30} />,
            ][i],
            undertitle: item.undertitle,
            beskrivelse: item.beskrivelse,
          }))}
        />

        <Testimonials testimonials={rejse.testimonials} />
        <Gallery images={galleryImages} />
        {/* <Faq id="faq" /> */}
        <ContactSection className="my-32" />
        <Faq items={faqItems} className="my-32" />
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
