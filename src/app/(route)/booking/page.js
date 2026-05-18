import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

const BookingSide = () => {
  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        <Header />
      </header>
      <main className="flex w-full max-w-3xl flex-1 flex-col items-center justify-between bg-white px-16 py-32 sm:items-start dark:bg-black">
        <h1>Booking</h1>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
};

export default BookingSide;
