import './articles.css'
import PostList from "../postList/PostList";
import AddPost from "../addPost/AddPost";

const Articles = () => {

  return(
    <div className="mainContainer">
      <AddPost />
      <PostList />
    </div>
  )
}

export default Articles