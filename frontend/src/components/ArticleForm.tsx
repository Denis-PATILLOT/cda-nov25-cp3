import { useCategoriesQuery, type CreateArticleInput } from "@/graphql/generated/schema";
import { useCreateArticleMutation } from "@/graphql/generated/schema";
import { useRouter } from "next/router";
import { useRecentPostsQuery } from "@/graphql/generated/schema";


export default function ArticleForm() {

  const router = useRouter();
  const [createArticle, { loading, error }] = useCreateArticleMutation();    
  const { data } = useCategoriesQuery()
  const {refetch} = useRecentPostsQuery();
  const categories = data?.categories || [];

  const handleSubmit = async(e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget as any);
    console.log(formData);
    const data = Object.fromEntries(formData);
    console.log(data);
    data.category = {id: Number(data.category)};
    console.log(data);
    
    console.log("formulaire soumis");
    try {
        const response = await createArticle({ variables: { data: data as unknown as CreateArticleInput} });
        await refetch();
        router.push(`/articles/${response.data?.createArticle.id}`);
    } catch (err) {
        console.error(err);
    }
  }

  return (
    <div className="flex flex-col md:flex-row md:flex-wrap text-white">
        <form onSubmit={handleSubmit} className="pb-12 w-full">
            {error && <p>{error.message}</p>}
            <label htmlFor="title" className="block mb-1 w-full">Title*</label>
            <input type="text" title="Title" id="title" name="title" placeholder="enter article title..." className="bg-gray-600 border border-gray-200 rounded-lg p-2 inline-block mb-5 w-full" />

            <label htmlFor="category" className="block mb-1 w-full">Category*</label>
            <select id="category" name="category" className="bg-gray-600 border border-gray-200 rounded-lg p-2 inline-block mb-5 cursor-pointer w-full" >
                {categories.map((c) => <option key={c.id} value={c.id}>{c.name}</option>)}
            </select>

            <label htmlFor="mainPictureUrl" className="block mb-1 w-full">Title*</label>
            <input type="text" id="mainPictureUrl" name="mainPictureUrl" placeholder="https://..." className="bg-gray-600 border border-gray-200 rounded-lg p-2 inline-block mb-5 w-full" />

            <label htmlFor="body" className="block mb-1">Body*</label>
            <textarea id="body" placeholder="body of your article" name="body" className="bg-gray-600 border border-gray-200 rounded-lg p-2 inline-block mb-5 w-full" />
            <button type="submit" className="btn mt-12 w-full border border-gray-700 bg-amber-400 hover:bg-amber-500 text-white" disabled={loading}>
              {loading ? "Saving..." : "Save"}
            </button>
        </form>
    </div>
  );
}
