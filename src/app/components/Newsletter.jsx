"use client";

import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { subscribeToNewsletter } from "@/app/actions/action";
import Button from "./Button";

const Newsletter = () => {
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setIsPending(true);
    setError(null);

    const formData = new FormData(e.target);
    const result = await subscribeToNewsletter(null, formData);

    setIsPending(false);

    if (result.success) setSuccess(true);
    if (result.error) setError(result.error);
  }

  return (
    <div
      className="my-13 rounded-[20px] bg-(--accent) px-10 py-10 md:mt-16 md:py-16"
      style={{ gridColumn: "content" }}
    >
      <div className="flex flex-col items-center justify-center gap-6">
        <h4 className="text-center font-semibold">
          Mangler du inspiration til dit næste eventyr?
        </h4>
        <p className="max-w-160 text-center">
          Tilmeld dig nyhedsbrevet og lad os holde dig opdateret med nye
          eventyr, destinationer og ledige pladser direkte i din indbakke.
        </p>
        {success ? (
          <p className="max-w-160 text-center text-green-700!">
            Din tilmelding er blevet bekræftet.
          </p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex w-full flex-col gap-6 md:max-w-140"
          >
            <div className="flex flex-row gap-4 md:items-stretch">
              <input
                type="text"
                name="email"
                placeholder="Skriv din email"
                required
                className="w-full min-w-0 flex-1 rounded-[20px] border border-(--grey-200) bg-(--background-tertiary) px-4 py-3 [font-size:var(--p-size)] outline-none"
              />
              <Button
                type="submit"
                variant="primary"
                icon={IoIosArrowForward}
                disabled={isPending}
                className="self-center md:self-stretch"
              >
                {isPending ? "Tilmelder..." : "Tilmeld nu"}
              </Button>
            </div>
            {error && <p className="text-center text-red-600!">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
