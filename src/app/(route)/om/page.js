import Footer from "@/app/components/Footer";

const OmSide = () => {
  return (
    <>
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>Om Bikeitalien</h1>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
};

export default OmSide;
