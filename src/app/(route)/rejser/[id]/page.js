import { supabase } from "@/lib/supabase";
import Footer from "@/app/components/Footer";
import ImageCardSection from "@/app/components/ImageCardSection";
import ContactSection from "@/app/components/ContactSection";
import Testimonials from "@/app/components/Testimonials";
import IconGrid from "@/app/components/IconGrid";
import { IoAirplaneOutline, IoRestaurantOutline } from "react-icons/io5";
import { AiOutlineHome } from "react-icons/ai";
import { PiPersonSimpleBike } from "react-icons/pi";

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
      <main className="py-32">
        <ImageCardSection rejse={rejse} />
        <IconGrid
          title="Hvad har vi styr på for dig?"
          items={rejse.praktisk.map((item, i) => ({
            icon: [
              <IoAirplaneOutline size={30} />,
              <AiOutlineHome size={30} />,
              <IoRestaurantOutline size={30} />,
              <PiPersonSimpleBike size={30} />,
            ][i],
            undertitle: item.undertitle,
            beskrivelse: item.beskrivelse,
          }))}
        />
        <Testimonials testimonials={rejse.testimonials} />
        <ContactSection className="my-32" />
      </main>
      <footer className="col-[full] grid grid-cols-subgrid">
        <Footer />
      </footer>
    </>
  );
}
