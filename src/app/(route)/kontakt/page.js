import Footer from "@/app/components/Footer";

const KontaktSide = () => {
  return (
    <>
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>Kontakt</h1>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
};

export default KontaktSide;
