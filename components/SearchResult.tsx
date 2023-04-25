import { FC } from "react";

interface SearchResultProps {
  result: any;
}

const SearchResult: FC<SearchResultProps> = ({ result }) => {
  return (
    <div className="max-w-xl mb-8">
      <div className="group">
        <a href={result?.link} className="text-sm">
          {result?.formattedUrl}
        </a>

        <a
          href={result?.link}
          className="truncate text-xl text-secondary group-hover:underline"
        >
          <h2>{result?.title}</h2>
        </a>
      </div>

      <p>{result?.snippet}</p>
    </div>
  );
};

export default SearchResult;
