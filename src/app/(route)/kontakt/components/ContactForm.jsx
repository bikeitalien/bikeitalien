"use client";
import Image from "next/image";
import Button from "@/app/components/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { submitBesked } from "../action/action";

const ContactForm = () => {
  const [serverError, setServerError] = useState("");
  const [serverSuccess, setServerSuccess] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("lastname", data.lastname);
    formData.append("email", data.email);
    formData.append("comment", data.comment);

    const result = await submitBesked(formData);

    if (result.success) {
      setServerSuccess("Din besked er blevet sendt.");
      reset();
    } else {
      setServerError(result.error);
    }
  };

  return (
    <>
      <section className="col-[content] grid">
        <Image
          src="/assets/nepal-1.webp"
          alt="Contact"
          width={800}
          height={600}
          loading="eager"
          className="h-full max-h-[55vh] w-full rounded-[20px] object-cover"
        />
        <div className="mt-8 grid gap-20 md:grid-cols-2">
          <div>
            <h3>Kontaktformular</h3>
            <p>
              Har du spørgsmål, feedback eller ønsker du at høre mere, er du
              meget velkommen til at skrive via formularen. Jeg laver også
              skræddersyede cykelferier for klubber, virksomheder og
              vennegrupper, hvor rute, niveau og indhold tilpasses jeres ønsker.
              Kontakt mig gerne, så finder vi ud af det sammen.
            </p>
          </div>

          <div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="grid gap-4 rounded-[10px]"
            >
              {/* {isSubmitSuccessful && (
                <div className="text-md rounded-[10px] border border-green-500/30 bg-green-500/10 px-2 py-3 text-green-400">
                  Din besked er blevet sendt.
                </div>
              )} */}

              {serverSuccess && (
                <div className="rounded-[10px] border border-green-500/30 bg-green-500/10 px-3 py-3 text-green-400">
                  {serverSuccess}
                </div>
              )}

              {serverError && (
                <div className="rounded-[10px] border border-red-500/30 bg-red-500/10 px-3 py-3 text-red-400">
                  {serverError}
                </div>
              )}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="pb-2 text-(--text-primary)">Fornavn</p>
                  <input
                    type="text"
                    placeholder="Fornavn"
                    {...register("name", {
                      required: "Fornavn er påkrævet",
                      minLength: {
                        value: 2,
                        message: "Fornavn skal være mindst 2 tegn",
                      },
                      maxLength: {
                        value: 50,
                        message: "Fornavn må ikke overstige 50 tegn",
                      },
                      pattern: {
                        value: /^[a-zA-ZæøåÆØÅ\s-]+$/,
                        message:
                          "Fornavn kan kun indeholde bogstaver og mellemrum",
                      },
                    })}
                    className="w-full rounded-[10px] border border-(--text-primary) bg-transparent p-2"
                  />
                  {errors.name && (
                    <span className="mt-1 text-sm text-red-400">
                      {errors.name.message}
                    </span>
                  )}
                </div>
                <div>
                  <p className="pb-2 text-(--text-primary)">Efternavn</p>
                  <input
                    type="text"
                    placeholder="Efternavn"
                    {...register("lastname", {
                      required: "Efternavn er påkrævet",
                      minLength: {
                        value: 2,
                        message: "Efternavn skal være mindst 2 tegn",
                      },
                      maxLength: {
                        value: 50,
                        message: "Efternavn må ikke overstige 50 tegn",
                      },
                      pattern: {
                        value: /^[a-zA-ZæøåÆØÅ\s-]+$/,
                        message:
                          "Efternavn kan kun indeholde bogstaver og mellemrum",
                      },
                    })}
                    className="w-full rounded-[10px] border border-(--text-primary) bg-transparent p-2"
                  />
                  {errors.lastname && (
                    <span className="mt-1 text-sm text-red-400">
                      {errors.lastname.message}
                    </span>
                  )}
                </div>
              </div>

              <div>
                <p className="pb-2 text-(--text-primary)">Din email</p>
                <input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email er påkrævet",
                    pattern: {
                      value: /^\S+@\S+\.\S+$/i,
                      message: "Ugyldig email adresse",
                    },
                  })}
                  className="w-full rounded-[10px] border border-(--text-primary) bg-transparent p-2"
                />
                {errors.email && (
                  <span className="mt-1 text-sm text-red-400">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className="grid">
                <p className="pb-2 text-(--text-primary)">Din forespørgsel</p>
                <textarea
                  placeholder="Din Besked"
                  {...register("comment", {
                    required: "Besked er påkrævet",
                    minLength: {
                      value: 2,
                      message: "Besked skal være mindst 2 tegn",
                    },
                    maxLength: {
                      value: 1000,
                      message: "Besked må ikke overstige 1000 tegn",
                    },
                  })}
                  className="w-full rounded-[10px] border border-(--text-primary) bg-transparent p-2"
                />
                {errors.comment && (
                  <span className="mt-1 text-sm text-red-400">
                    {errors.comment.message}
                  </span>
                )}
              </div>
              {/* <Button
                type="submit"
                variant="primary"
                disabled={isSubmitting}
                className="w-fit"
              >
                {isSubmitting ? "Sender..." : "Send besked"}
              </Button> */}
              <button className="place-self-end" type="submit">
                {isSubmitting ? "Sender..." : "Send besked"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;
