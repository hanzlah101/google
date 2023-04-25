import React from "react";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useRouter } from "next/router";
import Link from "next/link";

const PaginationButtons = () => {
  const router = useRouter();

  const startIndex = Number(router.query.start || 0);

  return (
    <div className="flex max-w-xl items-center justify-center md:gap-24 gap-16 mt-8 mb-12">
      {startIndex >= 10 && (
        <Link
          href={`/search?term=${router.query.term}&start=${startIndex - 10}`}
          className="flex items-center flex-col text-primary hover:underline"
        >
          <BsChevronLeft />
          <p>Prev</p>
        </Link>
      )}

      <Link
        href={`/search?term=${router.query.term}&start=${startIndex + 10}`}
        className="flex items-center flex-col text-primary hover:underline"
      >
        <BsChevronRight />
        <p>Next</p>
      </Link>
    </div>
  );
};

export default PaginationButtons;
