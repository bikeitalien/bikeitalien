import Header from "@/app/components/Header";
import TravelCard from "@/app/components/TravelCard";
import Footer from "@/app/components/Footer";
import { Suspense } from "react";
import PageHero from "@/app/components/PageHero";
import { supabase } from "@/lib/supabase";

export default function AlleRejser({ searchParams }) {
  return (
    <>
      <header className="sticky top-0 z-60 col-[full] grid grid-cols-subgrid">
        <Header />
      </header>

      <main className="grid">
        <PageHero
          bgColor="bg-[var(--background-tertiary)]"
          tagline="Alle rejser"
          heading="Gå på opdagelse i alle vores cykelrejser"
          image="/images/hero.jpg"
          imageAlt="Cykelrejse"
        />

        <section className="col-[content] grid py-10">
          <div className="flex flex-wrap gap-4">
            <a
              href="/rejser?kategori=Cykelturisme"
              className="rounded-full border px-4 py-2"
            >
              Kategori
            </a>

            <a
              href="/alle-rejser?category=storby"
              className="rounded-full border px-4 py-2"
            >
              Lokation
            </a>

            <a
              href="/alle-rejser?category=strand"
              className="rounded-full border px-4 py-2"
            >
              Månede
            </a>

            <a
              href="/alle-rejser?category=natur"
              className="rounded-full border px-4 py-2"
            >
              Niveau
            </a>
            <a
              href="/alle-rejser?category=natur"
              className="rounded-full border px-4 py-2"
            >
              Varighed
            </a>
          </div>
        </section>

        <Suspense fallback={<p>Indlæser rejser...</p>}>
          <TravelCardContainer searchParams={searchParams} />
        </Suspense>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}

async function TravelCardContainer({ searchParams }) {
  const params = await searchParams;

  const kategori = params.kategori || "alle";

  let query = supabase.from("cykelrejser").select("*");

  if (kategori !== "alle") {
    query = query.eq("kategori", kategori);
  }

  const { data: travels, error } = await query;

  if (error) {
    return <p>Kunne ikke hente rejser.</p>;
  }

  return (
    <section className="col-[content] grid py-10">
      <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 xl:grid-cols-3">
        {travels.map((rejse) => (
          <TravelCard key={rejse.id} rejse={rejse} />
        ))}
      </div>
    </section>
  );
}
