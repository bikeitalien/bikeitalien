import { supabase } from "@/lib/supabase";
import Footer from "@/app/components/Footer";
import ImageCardSection from "@/app/components/ImageCardSection";

export default async function RejseDetalje({ params }) {
  const { id } = await params;

  const { data: rejse, error } = await supabase
    .from("cykelrejser")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return <p>Rejsen blev ikke fundet.</p>;
  }

    console.log(rejse);

  return (
    <>
      <main>
        <h1>{rejse.titel}</h1>
        <p>{rejse.land}</p>
        <p>{rejse.antal_dage} dage</p>
        <p>{rejse.pris} kr.</p>
     <ImageCardSection rejse={rejse} />
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
