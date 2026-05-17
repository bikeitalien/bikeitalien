import { supabase } from "@/lib/supabase";
import Footer from "@/app/components/Footer";
import ImageCardSection from "@/app/components/ImageCardSection";
import ContactSection from "@/app/components/ContactSection";
import Testimonials from "@/app/components/Testimonials";

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
      <main className="py-32">
        {/* <h1>{rejse.titel}</h1>
        <p>{rejse.land}</p>
        <p>{rejse.antal_dage} dage</p>
        <p>{rejse.pris} kr.</p> */}
        <ImageCardSection rejse={rejse} />
        <Testimonials testimonials={rejse.testimonials.testimonials} />
        <ContactSection />
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
