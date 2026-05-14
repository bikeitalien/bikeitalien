import Link from "next/link";

const TravelCard = ({ rejse }) => {
  return (
    <Link href={`/rejser/${rejse.id}`}>
      <article className="bg- grid grid-rows-2 rounded-lg border border-gray-300 shadow-sm hover:shadow-md">
        <img src={rejse.image} alt={rejse.title} />
        <section className="flex flex-col gap-2 p-4">
          <div className="flex gap-1">
            <p>{rejse.land}</p>
            <p>{rejse.kategori}</p>
            <p>{rejse.niveau}</p>
          </div>
          <h6 className="font-semibold">{rejse.titel}</h6>
          <div className="flex gap-1">
            <p>{rejse.dato}</p>
            <p>{rejse.antal_dage} dage</p>
          </div>
          <div className="flex items-baseline justify-between gap-1">
            <div className="flex gap-1">
              <h5>{rejse.pris} kr. </h5>
              <p>inkl. fly</p>
            </div>
            <button>Book nu</button>
          </div>
        </section>
      </article>
    </Link>
  );
};

export default TravelCard;
