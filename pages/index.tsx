import Head from "next/head";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IoIosKeypad } from "react-icons/io";

export default function Home() {
  return (
    <>
      <Head>
        <title>Google</title>
        <meta name="description" content="Google clone built with next js." />
      </Head>

      <main className="max-h-screen p-4">
        <header className="flex items-center justify-between w-full text-sm">
          <div className="flex items-center gap-4">
            <Link
              className="hover:underline"
              target="_blank"
              href={
                "https://about.google/?fg=1&utm_source=google-US&utm_medium=referral&utm_campaign=hp-header"
              }
            >
              About
            </Link>

            <Link
              className="hover:underline"
              target="_blank"
              href={
                "https://store.google.com/US?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-US"
              }
            >
              Store
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              className="hover:underline"
              target="_blank"
              href={"https://www.google.com/gmail/about/"}
            >
              Gmail
            </Link>

            <Link
              className="hover:underline"
              target="_blank"
              href={"https://www.google.com/imghp?hl=en&ogbl"}
            >
              Images
            </Link>

            <button className="p-2 hover:bg-gray-100 text-2xl text-gray-600 rounded-full">
              <IoIosKeypad />
            </button>

            <button className="btn2 w-24">Sign in</button>
          </div>
        </header>

        <Hero />
        <Footer />
      </main>
    </>
  );
}
