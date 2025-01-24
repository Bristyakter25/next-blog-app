import Link from "next/link";

function displayPost(post) {
  return (
    <div key={post.id}>
      <div className="card w-[300px] h-[100px] bg-base-100 shadow-xl">
       
          
          <Link href={`/posts/${post.id}`}><h2 className="text-center my-3 p-3">{post.title}</h2></Link>
          
       
      </div>
    </div>
  );
}

export default displayPost;
