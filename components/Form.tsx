import { FC } from "react";
import { useRouter } from "next/router";
import { IoIosSearch } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";

interface FormProps {
  search: string;
  setSearch: any;
}

const Form: FC<FormProps> = ({ search, setSearch }) => {
  const router = useRouter();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (search?.trim() === "") {
      return;
    }

    router.push(`/search?term=${search}`);
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full group">
      <button className="absolute top-[15px] left-4 text-gray-400">
        <IoIosSearch size={20} />
      </button>

      <input
        id="search"
        type="text"
        autoFocus
        className="outline-none border border-[#dfdfdf] w-full pr-6 pl-12 py-3 rounded-full group-hover:shadow-lg focus:shadow-lg focus:border-gray-200 bg-white shadow-gray-400"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="absolute flex items-center gap-4 justify-center right-4 bottom-3.5 bg-white">
        {search !== "" && (
          <RxCross2
            size={20}
            className="cursor-pointer text-gray-600"
            onClick={() => setSearch("")}
          />
        )}

        {search !== "" && (
          <span className="block bg-gray-400 h-6 w-[0.1px] rounded-sm" />
        )}

        <svg
          className="cursor-pointer"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
        >
          <path
            fill="#4285f4"
            d="m12 15c1.66 0 3-1.31 3-2.97v-7.02c0-1.66-1.34-3.01-3-3.01s-3 1.34-3 3.01v7.02c0 1.66 1.34 2.97 3 2.97z"
          />
          <path fill="#34a853" d="m11 18.08h2v3.92h-2z"></path>
          <path
            fill="#fbbc05"
            d="m7.05 16.87c-1.27-1.33-2.05-2.83-2.05-4.87h2c0 1.45 0.56 2.42 1.47 3.38v0.32l-1.15 1.18z"
          />
          <path
            fill="#ea4335"
            d="m12 16.93a4.97 5.25 0 0 1 -3.54 -1.55l-1.41 1.49c1.26 1.34 3.02 2.13 4.95 2.13 3.87 0 6.99-2.92 6.99-7h-1.99c0 2.92-2.24 4.93-5 4.93z"
          />
        </svg>

        <svg
          className="cursor-pointer"
          focusable="false"
          viewBox="0 0 192 192"
          xmlns="http://www.w3.org/2000/svg"
          width={24}
          height={24}
        >
          <rect fill="none" height="192" width="192"></rect>
          <g>
            <circle fill="#4285f4" cx="96" cy="104.15" r="28"></circle>
            <path
              fill="#ea4335"
              d="M160,72v40.15V136c0,1.69-0.34,3.29-0.82,4.82v0v0c-1.57,4.92-5.43,8.78-10.35,10.35h0v0 c-1.53,0.49-3.13,0.82-4.82,0.82H66l16,16h50h12c4.42,0,8.63-0.9,12.46-2.51c3.83-1.62,7.28-3.96,10.17-6.86 c1.45-1.45,2.76-3.03,3.91-4.74c2.3-3.4,3.96-7.28,4.81-11.44c0.43-2.08,0.65-4.24,0.65-6.45v-12V96.15V84l-6-19l-10.82,2.18 C159.66,68.71,160,70.31,160,72z"
            />
            <path
              fill="#4285f4"
              d="M32,72c0-1.69,0.34-3.29,0.82-4.82c1.57-4.92,5.43-8.78,10.35-10.35C44.71,56.34,46.31,56,48,56 h96c1.69,0,3.29,0.34,4.82,0.82c0,0,0,0,0,0L149,45l-17-5l-16-16h-13.44H96h-6.56H76L60,40H48c-17.67,0-32,14.33-32,32v12v20l16,16 V72z"
            />
            <path
              fill="#34a853"
              d="M144,40h-12l16.83,16.83c1.23,0.39,2.39,0.93,3.47,1.59c2.16,1.32,3.97,3.13,5.29,5.29 c0.66,1.08,1.2,2.24,1.59,3.47v0L176,84V72C176,54.33,161.67,40,144,40z"
            />
            <path
              fill="#fbbc05"
              d="M48,168h39.89l-16-16H48c-8.82,0-16-7.18-16-16v-23.89l-16-16V136C16,153.67,30.33,168,48,168z"
            />
          </g>
        </svg>
      </div>
    </form>
  );
};

export default Form;
