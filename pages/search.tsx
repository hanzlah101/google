import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import response from "../response";
import SearchResult from "@/components/SearchResult";
import PaginationButtons from "@/components/PaginationButtons";

const Search = ({ results }: any) => {
  const router = useRouter();

  return (
    <>
      <Head key={router.query.term as any}>
        <title>{router.query.term} - Google Search</title>
      </Head>

      <main>
        <Header query={router.query.term} />

        <div className="w-full flex items-center justify-center">
          <div className="px-3 w-full mx-auto sm:pl-[5%] md:pl-[11%]">
            <div className="my-4 text-gray-600 text-sm">
              About {results?.searchInformation?.formattedTotalResults} results
              ({results?.searchInformation?.formattedSearchTime} seconds)
            </div>

            {results?.items?.map((result: any, i: number) => (
              <SearchResult key={i} result={result} />
            ))}

            <PaginationButtons />
          </div>
        </div>
      </main>
    </>
  );
};

export default Search;

export async function getServerSideProps(context: any) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const url = `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`;

  const data = useDummyData
    ? response
    : await fetch(url).then((response) => response.json());
  return {
    props: { results: data },
  };
}
