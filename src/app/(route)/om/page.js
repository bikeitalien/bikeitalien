import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import PageHero from "@/app/components/PageHero";
import IconGrid from "@/app/components/IconGrid";
import ImageCardSection from "@/app/components/ImageCardSection";
import Testimonials from "@/app/components/Testimonials";
import Faq from "@/app/components/Faq";
import { IoAirplaneOutline } from "react-icons/io5";
import { supabase } from "@/lib/supabase";

export default async function OmSide() {
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

  const { data: rejse } = await supabase
    .from("cykelrejser")
    .select("testimonials")
    .eq("id", 2)
    .single();

  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        <Header />
      </header>
      <main className="grid">
        <PageHero
          bgColor="bg-[var(--background-alternate)]"
          tagline="Om BikeItalien"
          heading="Skabt af passion for cykling, oplevelser og fællesskab"
          image="/assets/joachimContact.webp"
          imageAlt="Cykelrejse"
        />
        <IconGrid
          title="Hvad gør BikeItalien unikt?"
          items={[
            {
              icon: <IoAirplaneOutline size={30} />,
              undertitle: "Personlige rejser",
              beskrivelse:
                "Rejserne er skabt med en personlig tilgang, hvor der er fokus på nærvær, fleksibilitet og gode oplevelser for den enkelte gæst.",
            },
            {
              icon: <IoAirplaneOutline size={30} />,
              undertitle: "Fokus på fællesskab",
              beskrivelse:
                "Der lægges stor vægt på det sociale fællesskab både på og uden for cyklen, hvor gode oplevelser deles undervejs.",
            },
            {
              icon: <IoAirplaneOutline size={30} />,
              undertitle: "Lokalkendskab",
              beskrivelse:
                "Rejserne bygger på mange års liv i Italien og giver adgang til autentiske steder, ruter og oplevelser væk fra de klassiske turistspor.",
            },
            {
              icon: <IoAirplaneOutline size={30} />,
              undertitle: "Gennemtestede ruter",
              beskrivelse:
                "Alle ruter er nøje udvalgt og afprøvet gennem mange år for at sikre kvalitet, variation og gode cykeloplevelser.",
            },
          ]}
        />
         <Testimonials
        testimonials={rejse.testimonials}
      />
        <ImageCardSection
          rejse={{
            oplevelse_tagline: "Vores historie",
            oplevelse_titel: "Teamet bag BikeItalien",
            oplevelse_beskrivelse:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
            oplevelse: [
              {
                id: 5,
                titel: "Johan Joachim Jerichow",
                beskrivelse:
                  "Joachim er drivkraften bag Bike Italien. Han har boet i Italien i mange år og har gjort Gardasøen til sit hjem sammen med sin familie. Herfra har han skabt Bike Italien med en klar passion for cykling, bjergene, den italienske livsstil og gode oplevelser i naturen. I dag er han guide og vært på cykelferier i både Italien og resten af verden, hvor fokus altid er på fællesskab, lokalkendskab og oplevelser, der går lidt dybere end bare selve cyklingen.",
              },
              {
                id: 4,
                titel: "Bjarke Andersen",
                beskrivelse:
                  "Bjarke Andersen fra Ikast har været fast med-guide hos Bike Italien næsten fra begyndelsen. Han har stor erfaring med motionscykling, en stærk passion for Italien og er kendt for sin gode humor og midtjyske lune i feltet. Bjarke har guidet på mange af Bike Italiens ture gennem årene og er en vigtig del af teamet både på og uden for cyklen. Han er gift med Lotte, som ofte deltager på rejserne og bidrager til den gode stemning blandt gæsterne.",
              },
            ],
          }}
        />
       
        <Faq items={faqItems} />
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
};


