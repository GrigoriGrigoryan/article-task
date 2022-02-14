import { useEffect, useState } from "react";
import { getAllPosts, GetInterface } from "../../services/PostServices";
import Post from "../post/Post";

const PostList = () => {
  const [postList, setPostList] = useState<GetInterface[]>([])

  useEffect(() => {
    getAllPosts().then((res) => setPostList(res))
  }, [])

  return(
    <section className="post_list">
      {
        postList.map((el) => (
          <Post key={el.id} heading={el.heading} content={el.content} created_at={el.created_at} updated_at={el.updated_at} id={el.id}/>
        ))
      }
    </section>
  )
}

export default PostList;
