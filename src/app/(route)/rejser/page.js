import { supabase } from "@/lib/supabase";

export default async function RejserPage() {
  const { data, error } = await supabase
    .from("cykelrejser")
    .select("*")
    .eq("id", 1)
    .single();

  if (error) return <p>Der skete en fejl</p>;

  return (
    <div className={"flex flex-col gap-4"}>
      <h1>{data.titel}</h1>
      <p>{data.dato}</p>
      <p>{data.beskrivelse}</p>
      <p>{data.pris}</p>
    </div>
  );
}
