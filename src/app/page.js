import Image from "next/image";
import ImageCardSection from "./components/ImageCardSection";
// import CardGridSection from "./index/components/CardGridSection";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        {/* <Header /> */}
      </header>

      <main>
        <ImageCardSection />
        {/* <CardGridSection /> */}
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        {/* <Image
          src={Footerbg}
          alt="Footerbg"
          className="z-0 col-span-full row-span-full h-full w-full object-cover opacity-10"
        />
        <div className="col-[content] row-start-1 grid justify-center">
          <Footer />
        </div> */}
      </footer>
    </>
  );
}
