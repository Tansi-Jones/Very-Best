import Head from "next/head";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Head title="Very Best Entertailment" />

      {/* <Navbar /> */}

      <main>
        <section className="grid h-screen grid-cols-2">
          <div className=" flex flex-col justify-center bg-green-800">
            <h1 className="text-lg lg:text-3xl 2xl:text-5xl text-white font-medium 2xl:font-semibold">
              <span className="text-Primary">Join</span> the largest gaming
              community in Cyprus
            </h1>
            <form className="grid md:flex md:items-center max-w-lg space-y-4 md:space-x-5">
              <input
                type="email"
                name="newsLetterMail"
                id="newsletter"
                placeholder="Subscribe to our NewsLetter"
                className="flex-grow border border-Primary placeholder:font-light font-normal bg-transparent text-2xl px-5 py-3 outline-none"
              />
              <button
                type="submit"
                className="bg-Primary text-2xl px-5 py-3 w-full md:w-auto"
              >
                Submit
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
}
