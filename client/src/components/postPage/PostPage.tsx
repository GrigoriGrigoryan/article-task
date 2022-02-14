import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { deleteArticle, GetInterface, getPost, put } from '../../services/PostServices'
import './postPage.css'

const defaultPost: GetInterface = {
    heading: '',
    content: '',
    id: 0
}

const PostPage = () => {
    const [post, setPost] = useState<GetInterface>(defaultPost)

    const { id } = useParams()

    const navigate = useNavigate()
    const location = useLocation()

    const createdDate = new Date(post.created_at ?? '');
    const day = createdDate.getDate(),
        month = createdDate.getMonth() + 1,
        year = createdDate.getFullYear();

    const updateDate = new Date(post.updated_at ?? '');
    const updateDay = updateDate.getDate(),
        updateMonth = updateDate.getMonth() + 1,
        updateYear = updateDate.getFullYear();


    useEffect(() => {
        if (id) {
            getPost(+id).then((res) => setPost(res))
        }
    }, [])

    return (<>
        {
            location.search === '' ? (<>
                <button onClick={() => navigate(`/`)}>Back</button>
                <div className="post">
                    <div className="header">
                        <div className="head">{post.heading}</div>
                        <div className="time">Create: {`${month}.${day}.${year}`}</div>
                        <div className="time">{post.updated_at? `Update: ${updateMonth}.${updateDay}.${updateYear}` : ''}</div>
                    </div>
                    <Link to={`${location.pathname}?edit=true`}>
                        <button className="delete">edit</button>
                    </Link>
                    <button className="delete" onClick={() => {
                        deleteArticle(id ? +id : 0)
                        navigate(`/`)
                    }}>&#10005;</button>
                    <div className="description">{post.content}</div>
                </div>
            </>) : (<>
                <button onClick={() => navigate(`/`)}>Back</button>
                <form className="form" onSubmit={(e) => {
                    e.preventDefault()
                    put(post)
                    navigate(`/articles/${post.id}`)
                    window.location.reload()
                }}>
                    <input value={post.heading} type="text" className="text_name" placeholder="enter post headline" onChange={(e) => setPost((post: any) => ({ ...post, heading: e.target.value }))} />
                    <textarea value={post.content} placeholder="enter description" onChange={(e) => setPost((post: any) => ({ ...post, content: e.target.value }))} />
                    <input type="submit" value="SEND" className="submit" />
                </form>
            </>)
        }
    </>)
}

export default PostPage
