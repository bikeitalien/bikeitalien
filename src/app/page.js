import Image from "next/image";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ImageCardSection from "./components/ImageCardSection";
// import CardGridSection from "./index/components/CardGridSection";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        {/* <Header /> */}
      </header>

      <main className="flex w-full flex-1 flex-col items-center justify-between bg-white sm:items-start dark:bg-black">
        {/* <ImageCardSection /> */}
        {/* <CardGridSection /> */}
        <ContactSection className="my-32" />
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
