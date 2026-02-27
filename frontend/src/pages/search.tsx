import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import PostCard from "@/components/PostCard";
import { useSearchArticlesQuery } from "@/graphql/generated/schema";


export default function Search() {
  const router = useRouter();

  const searchParams = useMemo(() => {
    const params = new URLSearchParams(router.asPath.split("?")[1] || "");
    return {
      title: params.get("titleContains")
    };
  }, [router.asPath]);

  const { data, loading, error } = useSearchArticlesQuery({
    variables: searchParams,
  });

  const posts = data?.articles || [];

  return (
    <Layout pageTitle="Recherche">
      {loading && <Loader />}
      {error && (
        <div className="p-4 text-red-600">An error has occured during search</div>
      )}
      {posts.length === 0 && !loading && (
        <div className="p-4">
          <p className="pb-4 pt-12 text-center">
            No article for your actual search
          </p>

          <div className="text-center">
            <Link
              href="/"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105"
            >
            </Link>
          </div>
        </div>
      )}

      <div className="pt-6 pb-20 flex flex-wrap p-4">
        {posts.map((p) => (
          <PostCard key={p.id} post={p} />
        ))}
      </div>
    </Layout>
  );
}
