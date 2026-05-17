import Link from "next/link";
import Image from "next/image";
// import testCardImage from "../../public/assets/apulien.webp";
import Button from "./Button";

const TravelCard = ({ rejse }) => {
  return (
    <Link href={`/rejser/${rejse.id}`} className="h-full">
      <article className="grid h-full grid-rows-2 rounded-[20px] border border-[var(--grey-100)] bg-[var(--card-background)] shadow-2xs shadow-[var(--card-background)] hover:shadow-md">
        <div className="grid">
          <Image
            src="/assets/apulien.webp"
            alt="Test Card Image"
            width={800}
            height={400}
            className="col-start-1 row-start-1 h-56 w-full rounded-tl-[20px] rounded-tr-[20px] object-cover"
          />

          <div className="col-start-1 row-start-1 self-start justify-self-start p-4">
            <div className="rounded-full bg-[var(--accent)] px-3 py-1">
              <p>Populær</p>
            </div>
          </div>
        </div>
        <section className="flex flex-col justify-between gap-2 p-4">
          <div className="grid gap-2">
            <div className="flex items-center gap-2">
              <p className="text-[var(--grey-400)]!">{rejse.land}</p>
              <div className="h-1 w-1 rounded-full bg-[var(--grey-400)]" />
              <p className="text-[var(--grey-400)]!">{rejse.kategori}</p>
              <div className="h-1 w-1 rounded-full bg-[var(--grey-400)]" />
              <p className="text-[var(--grey-400)]!">{rejse.niveau}</p>
            </div>
            <h6 className="font-semibold">{rejse.titel}</h6>
            <div className="flex items-center gap-2">
              <p>{rejse.dato}</p>
              <div className="h-1 w-1 rounded-full bg-[var(--text-primary)]" />
              <p>{rejse.antal_dage} dage</p>
            </div>
          </div>

          <div className="flex items-center justify-between gap-1">
            <div className="flex items-baseline gap-1">
              <h5>{rejse.pris} kr. </h5>
              <p>inkl. fly</p>
            </div>
            <Button>Se rejse</Button>
            {/* <button>Book nu</button> */}
          </div>
        </section>
      </article>
    </Link>
  );
};

export default TravelCard;
