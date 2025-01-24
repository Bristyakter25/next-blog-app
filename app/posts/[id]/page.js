import getPost from "@/app/lib/getPost";


async function Postpage ({params}) {
    const {id} = params;
    const post = await getPost(id);
  return (
    <div>
        <h2  className="text-center text-3xl text-violet-400 my-10">This is Details Page </h2>
        <div className="card bg-base-100 w-96 shadow-xl mx-auto my-10 p-5">
  
  <div className="card-body items-center text-center">
    <h2 className="card-title">{post.title}</h2>
    <p>{post.body}</p>
    
  </div>
</div>
    </div>
  )
}

export default Postpage