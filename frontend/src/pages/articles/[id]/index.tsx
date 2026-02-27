import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Loader from "@/components/Loader";
import {
  useArticleQuery, useRecentPostsQuery, useDeleteArticleMutation
} from "@/graphql/generated/schema";

export default function ArticleDetails() {
  
  const { refetch } = useRecentPostsQuery();
  const router = useRouter();
  const { id } = router.query;

  const { data } = useArticleQuery({
    variables: { articleId: parseInt(id as string, 10) },
    skip: !router.isReady,
  });

  const [deleteArticle] = useDeleteArticleMutation();

  const article = data?.article;

  return (
    <Layout pageTitle={article?.title ? `Dev Blog - ${article.title}`  : "Dev Blog"}>
      <div className="pb-12 mt-12 max-w-[800px] mx-auto">
        <div className="p-6 bg-gray-800 shadow-lg rounded-2xl text-white">
          {typeof article === "undefined" ? (
            <Loader />
          ) : (
            <div>
              <div className=" flex justify-between items-start md:items-center">
                <div className="flex items-start md:items-center flex-col md:flex-row">
                  <h1 className="text-3xl">{article?.title}</h1>

                  <div className="md:ml-4 mt-4 md:mt-0">
                    <span className="bg-yellow-500 rounded-full p-2 mr-2 text-gray-600 border-gray-600 border ">
                        {article?.category.name}
                    </span>
                  </div>
                  <div className="mt-3 w-full text-md text-[14px] text-right">
                        Published on : {new Date(article?.createdAt).toLocaleDateString()} {/* */}
                        <br />
                        Updated on : {new Date(article?.updatedAt).toLocaleDateString()}
                  </div>
                </div>
              </div>

              {/** biome-ignore lint/performance/noImgElement: images come from unknow domains */}
              <img src={article?.mainPictureUrl} alt={article?.title} className="mt-6 mb-6" />
              <p className="mt-6 mb-6">{article?.body}</p>
              <div className="flex justify-between mb-6">
                    <button
                        className="cursor-pointer text-white p-2 rounded-xl bg-red-500 w-[50%] h-fit"
                        onClick={async () => {
                        if (
                            confirm("Do you want to delete this article ?")
                        ) {
                            try {
                            await deleteArticle({
                                variables: { deleteArticleId: parseInt(id as string, 10) },
                            });
                            await refetch();
                            router.push("/");
                            } catch (err) {
                            console.error(err);
                            }
                        }
                        }}
                        title="delete article"
                    >Supprimer</button>
              </div>

                  
              </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
