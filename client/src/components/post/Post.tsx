import { Link } from 'react-router-dom';
import { deleteArticle, GetInterface } from '../../services/PostServices';
import './post.css'

const Post = ({id, heading, content, created_at, updated_at}: GetInterface) => {

  const createdDate = new Date(created_at?? '');
  const day = createdDate.getDate(),
  month = createdDate.getMonth() + 1,
  year = createdDate.getFullYear();
  
  const updateDate = new Date(updated_at?? '');
  const updateDay = updateDate.getDate(),
  updateMonth = updateDate.getMonth() + 1,
  updateYear = updateDate.getFullYear();
  

  return (
    <div className="post">
      <div className="header">
        <div className="head">{heading}</div>
        <div className="time">Create: {`${month}.${day}.${year}`}</div>
        <div className="time">{updated_at? `Update: ${updateMonth}.${updateDay}.${updateYear}` : ''}</div>
      </div>
      <button className="delete" onClick={() => {
          deleteArticle(id).then(() => window.location.reload())
        }}>&#10005;</button>
      <div className="description">{content}</div>
      <Link to={`/articles/${id}`}>
        <button className="more">More</button>
      </Link>
    </div>
  )
}

export default Post;
