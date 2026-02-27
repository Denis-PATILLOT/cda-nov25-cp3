import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface SearchInputProps {
  className?: string;
  inputClassName?: string;
  noInputClass?: boolean;
}

export default function SearchInput({
  className = "",
  inputClassName = "w-full",
  noInputClass = false,
}: SearchInputProps) {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const titleContains = params.get("titleContains") || "";
    setSearchValue(titleContains);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const search = (formData.get("titleContains") as string) || "";
    const params = new URLSearchParams(window.location.search);
    params.set("titleContains", search);
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form className={className} onSubmit={handleSubmit}>
      <label
        className={
          noInputClass
            ? "flex items-center gap-2 w-full bg-gray-500 border border-gray-400 rounded-lg px-3 py-2 text-white"
            : "input w-full"
        }
      >
        
        <input
          className={noInputClass ? "flex-1 outline-none" : inputClassName}
          type="search"
          placeholder="Search articles..."
          name="titleContains"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />

        <svg
          className="h-[1em] opacity-50 shrink-0"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <title>search</title>
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            color="white"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      </label>
    </form>
  );
}
