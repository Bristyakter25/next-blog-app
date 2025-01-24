import getAllPosts from "./lib/getAllPosts";
import displayPost from "./posts/displayPost";






export default async function Home() {
  const posts = await getAllPosts();
  console.log(posts);
  return (
    <div >
      <main>
        <div className="lg:w-[920px] mx-auto w-[400px]">
         

          <h2 className="text-center text-black text-3xl my-5">All Posts</h2>

          <div className="grid grid-cols-3 gap-4">
            {posts.map(post =>  displayPost(post))}

          </div>

        </div>
      </main>
      
    </div>
  );
}
