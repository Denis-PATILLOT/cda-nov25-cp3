import Link from "next/link";
import { useRouter } from "next/router";
import SearchInput from "./SearchInput";

export default function Header() {

  const router = useRouter();

  return (
    <header className="p-4 bg-gray-700 flex flex-col w-full gap-4">
      {/* Small screen layout: Title + Burger menu */}
      <div className="flex flex-row justify-between items-center xl:hidden">
        <Link href="/" className="w-max">
          <h1 className="text-yellow-400 text-xl font-bold">Dev Blog</h1>
        </Link>
        
        {/* Small screen search: below title and publish */}
        <div className="xl:hidden -mx-4 px-4">
          <SearchInput noInputClass className="w-full" inputClassName="w-full" />
        </div>

        {/* Large screen layout: Title + Search + Publish button */}
        <div className="hidden xl:flex xl:flex-row xl:justify-between xl:items-center">
          <div className="flex flex-row items-center gap-4">
            <Link href="/" className="w-max">
              <h1 className="text-orange-600 text-2xl font-bold">Dev Blog</h1>
            </Link>

            <SearchInput inputClassName="w-sm" />
          </div>

        </div>
      </div>
    </header>
  );
}
