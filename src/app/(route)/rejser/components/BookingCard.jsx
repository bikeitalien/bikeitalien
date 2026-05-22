import Button from "@/app/components/Button";

const BookingCard = ({ rejse }) => {
  return (
    <div className="grid h-fit w-fit min-w-[390px] gap-7 rounded-[20px] border border-[var(--grey-100)] bg-[var(--card-background)] p-6">
      <div className="flex gap-2">
        <h6>{rejse.pris} kr.</h6>
        <p>inkl. fly</p>
      </div>

      <div>
        <p>{rejse.land}</p>
        <h6 className="font-semibold">{rejse.titel}</h6>
      </div>

      <h6>{rejse.dato}</h6>

      <Button>Book rejsen nu</Button>
    </div>
  );
};

export default BookingCard;
