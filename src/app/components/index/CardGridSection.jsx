import { Suspense } from "react";
import TravelCard from "../TravelCard";
import { supabase } from "@/lib/supabase";
import HeadingSection from "../HeadingSection";
import Button from "../Button";

const CardGridSection = ({ className = "" }) => {
  return (
    <section className={`col-[content] ${className || ""}`}>
      <div className="grid gap-8">
        <div className="flex flex-col items-baseline justify-between gap-4 md:flex-row">
          <HeadingSection
            tagline="Udvalgte rejser"
            title="Rejser til enhver rytter"
          >
            <p>
              Fra familieferier til bjergpas og eventyr her er et lille udpluk
              af de cykelferier jeg har skabt til mine gæster
            </p>
          </HeadingSection>
          <div className="mt-auto">
            <Button variant="primary" href="/rejser">
              Se alle rejser
            </Button>
          </div>
        </div>
        <Suspense fallback={<div className="p-4">Loading rejser…</div>}>
          <FetchSelectedTravels />
        </Suspense>
      </div>
    </section>
  );
};

export default CardGridSection;

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
