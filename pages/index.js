import { useState, useEffect } from "react";
import Meta from "../components/Meta";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Navbar from "../components/Navbar";
import { IoGameController } from "react-icons/io5";
import { RiBitCoinLine, RiCopperCoinLine } from "react-icons/ri";
import { FaViacoin } from "react-icons/fa";
import { SiLitecoin, SiDogecoin } from "react-icons/si";
import { GiCrownCoin } from "react-icons/gi";
import { ImCoinYen, ImSpinner10 } from "react-icons/im";
import Aos from "aos";
import "aos/dist/aos.css";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

export default function Home() {
  const [subscriberMail, setSubscriberMail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    // effect;
    Aos.init({ duration: 3000 });
    return () => {
      // cleanup;
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setIsSubmitting(true);
      const { data } = await axios.post("/api/newsLetter", { subscriberMail });
      toast(data);
      setIsSubmitting(false);
    } catch (error) {
      setIsSubmitting(true);
      toast.error(error.response.data);
      setIsSubmitting(false);
    }
  };

  const notify = () => toast("Here is your toast.");

  return (
    <>
      <Toaster />

      <Meta title="Very Best Entertainment" />

      <div className="absolute left-[-220px] top-[-53px] w-[411px] h-[411px] bg-Primary rounder-full blur-[800px] opacity-90"></div>

      <nav className="absolute top-0 w-full z-50">
        <Navbar />
      </nav>

      <main>
        <section className="grid h-screen grid-cols-1 lg:grid-cols-2 max-w-6xl mx-auto">
          <div className=" flex flex-col pt-48 md:pt-60 space-y-20">
            <h1
              className="text-3xl md:text-5xl text-white font-medium 2xl:font-semibold"
              data-aos="zoom-in-right"
            >
              <span className="text-Primary">Join</span> the largest gaming
              community in Cyprus
            </h1>

            <form
              className="grid md:flex md:items-center max-w-[34rem] space-y-4 md:space-y-0 md:space-x-5"
              data-aos="slide-up"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                // required
                name="newsLetterMail"
                onChange={(event) => {
                  setSubscriberMail(event.target.value);
                }}
                id="newsletter"
                placeholder="Subscribe to our NewsLetter "
                className="flex-grow border border-Primary placeholder:w-full placeholder:font-light font-normal bg-transparent text-xl md:text-2xl px-4 py-3 outline-none"
              />
              <button
                type="submit"
                className="bg-Primary border outline-none flex items-center justify-center border-Primary transition ease-out duration-200 hover:bg-transparent text-4xl md:text-[2.7rem] text-white px-12 py-1 md:py-2 w-full md:w-auto"
              >
                {isSubmitting ? (
                  <ImSpinner10 className="animate-spin" />
                ) : (
                  <IoGameController />
                )}
              </button>
            </form>

            <div className="space-y-5" data-aos="slide-up">
              <h1 className="text-white text-xl md:text-3xl font-medium">
                In Partnership with
              </h1>
              <div className="flex flex-wrap items-center justify-between ">
                <div className="w-20 h-20 text-Primary text-5xl">
                  <RiBitCoinLine />
                </div>
                <div className="w-20 h-20 text-Primary text-5xl">
                  <RiCopperCoinLine />
                </div>
                <div className="w-20 h-20 text-Primary text-5xl">
                  <FaViacoin />
                </div>
                <div className="w-20 h-20 text-Primary text-5xl">
                  <SiLitecoin />
                </div>
                <div className="w-20 h-20 text-Primary text-5xl">
                  <SiDogecoin />
                </div>
                <div className="w-20 h-20 text-Primary text-5xl">
                  <GiCrownCoin />
                </div>
                <div className="w-20 h-20 text-Primary text-5xl">
                  <ImCoinYen />
                </div>
              </div>
            </div>
          </div>

          <div
            className={`${styles.PS4} hidden lg:block`}
            data-aos="fade-up-right"
          ></div>
        </section>
      </main>
    </>
  );
}
