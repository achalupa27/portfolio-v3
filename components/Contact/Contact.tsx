import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineSend, AiOutlineCheck } from "react-icons/ai";
import { useTypewriter } from "react-simple-typewriter";

type Inputs = {
  email: string;
  message: string;
};

function Contact() {
  const { register, handleSubmit } = useForm<Inputs>();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    setIsSending(true);

    const data = {
      email: formData.email,
      message: formData.message,
    };

    fetch("/api/send-email", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setIsSending(false);
        setIsSent(true);
      })
      .catch((error) => {
        console.error(error);
        setIsSending(false);
      });
  };

  const [text, count] = useTypewriter({
    words: ["Interested?", "Let's Talk."],
    delaySpeed: 1000,
    loop: 1,
  });

  return (
    <div className="relative mx-auto flex h-screen max-w-7xl flex-col items-center justify-evenly">
      <h3 className="absolute top-24 text-2xl font-light text-primary dark:uppercase dark:tracking-[20px] dark:text-amber-600">
        Contact
      </h3>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto flex w-[350px] flex-col space-y-2  sm:w-[450px] md:w-[550px] lg:w-[700px]"
      >
        <input
          {...register("email")}
          placeholder="Email"
          className={`contact-input  ${
            isSent
              ? "cursor-not-allowed rounded-md border border-primary bg-transparent dark:rounded-none dark:border-amber-600"
              : ""
          }`}
          type="email"
          readOnly={isSent}
        />
        <textarea
          {...register("message")}
          placeholder="Message"
          className={`contact-input h-48 resize-none ${
            isSent
              ? "cursor-not-allowed rounded-md border border-primary bg-transparent dark:rounded-none dark:border-amber-600"
              : ""
          }`}
          readOnly={isSent}
        />
        <button
          type="submit"
          className={`flex items-center justify-evenly rounded-md border-primary bg-white py-4 px-10 text-primary shadow transition duration-500 ease-in-out dark:rounded-none  dark:border-amber-600 dark:bg-slate-400/10 dark:text-amber-600 ${
            isSent
              ? "cursor-not-allowed"
              : "hover:bg-primary hover:text-sky-50 dark:hover:bg-amber-600 dark:hover:text-gray-900"
          }   ${isSending ? "cursor-wait opacity-50" : ""}`}
          disabled={isSending || isSent}
        >
          {isSent ? (
            <AiOutlineCheck className="h-6 w-6" />
          ) : (
            <>
              {isSending ? (
                <span className="ml-2">Sending...</span>
              ) : (
                <AiOutlineSend className="h-6 w-6" />
              )}
            </>
          )}
        </button>
      </form>
    </div>
  );
}

export default Contact;
