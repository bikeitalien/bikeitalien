import { supabase } from "@/lib/supabase";
import Footer from "@/app/components/Footer";

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

  return (
    <>
      <main>
        <h1>{rejse.titel}</h1>
        <p>{rejse.land}</p>
        <p>{rejse.antal_dage} dage</p>
        <p>{rejse.pris} kr.</p>
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
