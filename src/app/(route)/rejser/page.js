// import { supabase } from "@/lib/supabase";

// export default async function RejserPage() {
//   const { data, error } = await supabase
//     .from("cykelrejser")
//     .select("*")
//     .eq("id", 1)
//     .single();

//   if (error) return <p>Der skete en fejl</p>;

//   return (
//     <div className={"flex flex-col gap-4"}>
//       <h1>{data.titel}</h1>
//       <p>{data.dato}</p>
//       <p>{data.beskrivelse}</p>
//       <p>{data.pris}</p>
//     </div>
//   );
// }

import TravelCard from "@/app/components/TravelCard";
import Footer from "@/app/components/Footer";

import { Suspense } from "react";
// import Image from "next/image";

// import Footerbg from "@/assets/bg/footerbg.jpg";

import { supabase } from "@/lib/supabase";

export default function AlleRejser({ searchParams }) {
  return (
    <>
      {/* <header className="sticky top-0 z-50 col-[full] grid grid-cols-subgrid">
        <Header />
      </header> */}

      <main className="grid">
        {/* HERO */}
        <section className="col-[full] grid grid-cols-subgrid">
          {/* <Image
            src={Footerbg}
            alt="Baggrund"
            priority
            className="col-span-full row-span-full h-30 w-full object-cover opacity-10"
          /> */}

          <div className="col-[content] row-start-1 grid">
            {/* <Hero>ALLE REJSER</Hero> */}
          </div>
        </section>

        {/* FILTERS */}
        <section className="col-[content] grid py-10">
          <div className="flex flex-wrap gap-4">
            <a href="/alle-rejser" className="rounded-full border px-4 py-2">
              Alle
            </a>

            <a
              href="/alle-rejser?category=storby"
              className="rounded-full border px-4 py-2"
            >
              Storby
            </a>

            <a
              href="/alle-rejser?category=strand"
              className="rounded-full border px-4 py-2"
            >
              Strand
            </a>

            <a
              href="/alle-rejser?category=natur"
              className="rounded-full border px-4 py-2"
            >
              Natur
            </a>
          </div>
        </section>

        {/* CARDS */}
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
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {travels.map((rejse) => (
          <TravelCard key={rejse.id} rejse={rejse} />
        ))}
      </div>
    </section>
  );
}
