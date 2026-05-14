import { Suspense } from "react";
import TravelCard from "./TravelCard";
import { supabase } from "@/lib/supabase";

const ImageCardSection = () => {
  return (
    <section className="col-[content]">
      <div className="grid gap-4">
        <div>
          <p className="max-w-[65ch]">
            Her finder du tre særligt udvalgte rejser, som vi anbefaler.
          </p>
        </div>
        <Suspense fallback={<div className="p-4">Loading rejser…</div>}>
          <FetchSelectedTravels />
        </Suspense>
      </div>
    </section>
  );
};

export default ImageCardSection;

const FetchSelectedTravels = async () => {
  const selectedIds = [1, 2, 3];

  const { data: rejser, error } = await supabase
    .from("cykelrejser")
    .select("*")
    .in("id", selectedIds);

  if (error) {
    return <p>Kunne ikke hente rejser.</p>;
  }

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {rejser.map((rejse) => (
        <TravelCard key={rejse.id} rejse={rejse} />
      ))}
    </div>
  );
};
