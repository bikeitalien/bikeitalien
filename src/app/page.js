import Image from "next/image";
import Footer from "./components/Footer";
import ImageCardSection from "./components/ImageCardSection";
// import CardGridSection from "./index/components/CardGridSection";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        {/* <Header /> */}
      </header>

      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>Index</h1>
        <ImageCardSection />
        {/* <CardGridSection /> */}
      </main>

      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      <footer className="col-[full] grid grid-cols-subgrid">
    </>
  );
}
