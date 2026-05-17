import Image from "next/image";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ImageCardSection from "./components/ImageCardSection";
import Testimonials from "./components/Testimonials";
import CategoryGridSection from "./components/index/CategoryGridSection";
import CardGridSection from "./components/index/CardGridSection";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        {/* <Header /> */}
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-between bg-white sm:items-start dark:bg-black">
        {/* <ImageCardSection /> */}
        <CategoryGridSection />
        <Testimonials />
        <CardGridSection />
        <ContactSection className="my-32" />
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
