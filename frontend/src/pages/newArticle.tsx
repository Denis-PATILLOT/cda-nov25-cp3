import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import ArticleForm from "@/components/ArticleForm";

export default function NewAd() {
  const router = useRouter();


  return (
    <Layout pageTitle="New article">
      <div className="p-4 max-w-[600px] mx-auto">
        <h2 className="text-xl font-bold my-6 text-center text-white">Create a new article</h2>
        <ArticleForm /> 
      </div>
    </Layout>
  );
}
