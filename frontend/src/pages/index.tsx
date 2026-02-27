import Layout from "@/components/Layout";
import RecentPosts from "@/components/RecentPosts";

export default function Home() {
  return (
    <Layout pageTitle="Accueil">
      <RecentPosts />
    </Layout>
  );
}
