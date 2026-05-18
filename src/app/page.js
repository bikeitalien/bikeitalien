import Image from "next/image";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ImageCardSection from "./components/ImageCardSection";
import Testimonials from "./components/Testimonials";
import CategoryGridSection from "./components/index/CategoryGridSection";
import CardGridSection from "./components/index/CardGridSection";
import TextRevealSection from "./components/index/TextRevealSection";
import Faq from "./components/Faq";
import Header from "./components/Header";
import ProcessSection from "./components/index/ProcessSection";
import AboutSection from "./components/index/AboutSection";
import IndexHero from "./components/index/IndexHero";

export default function Home() {
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

  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        <Header />
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-between bg-white sm:items-start dark:bg-black">
        <IndexHero />
        <section
          className="col-[full] grid grid-cols-subgrid"
          id="next-section"
        >
          <TextRevealSection />
        </section>
        {/* <ImageCardSection /> */}
        <CategoryGridSection />
        <ProcessSection className="my-32" />
        <AboutSection />
        <Testimonials />
        <CardGridSection className="my-32" />
        <ContactSection />
        <Faq items={faqItems} className="my-32" />
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
