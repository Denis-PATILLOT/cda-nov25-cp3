import { useRecentPostsQuery } from "@/graphql/generated/schema";
import Loader from "./Loader";
import PostCard from "./PostCard";
import Link from "next/link";
import { useEffect } from "react";


export default function RecentPosts() {
  const { data, loading, error, refetch } = useRecentPostsQuery({variables: {limit: 5}});
  const posts = data?.articles || [];

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-6 text-white">Latest Posts</h2>
      <div className="flex flex-col items-center md:flex-row md:flex-wrap w-full gap-y-5 md:gap-x-3 md:justify-center">
        {loading && <Loader />}
         {error && (
          <div className="text-red-600">
            Une erreur est survenue lors de la récupération des données
          </div> 
         )} 
         {posts.map((p) => ( 
           <PostCard post={p} key={p.id} /> 
         ))} 
      </div>
      <div className="w-full">
        <Link href="/newArticle">
         <button className="w-[50%] text-gray bg-yellow-500 rounded-xl p-2 mt-10 m-3 mx-auto block cursor-pointer hover:text-white">Write a new article</button>
        </Link>
      </div>
    </div>
  );
}
