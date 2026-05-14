import { supabase } from "@/lib/supabase";
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
    <main>
      <ImageCardSection rejse={rejse} />
    </main>
  );
}