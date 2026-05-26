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
import { supabase } from "@/lib/supabase";

export default async function Home() {
  const { data, error } = await supabase.from("faq").select("*");

  if (error || !data) {
    console.error(error);
    return <p>FAQ kunne ikke indlæses</p>;
  }

  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid h-0 grid-cols-subgrid overflow-visible">
        <Header />
      </header>

      <main className="top-0 col-[full] grid">
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
        <Faq items={data} className="py-18 md:my-32" />
        <ContactSection />
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
