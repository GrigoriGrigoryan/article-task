import { useEffect, useState } from 'react';
import { post } from '../../services/PostServices';
import './addPost.css'

const AddPost = () => {
  const [heading, setHeading] = useState('');
  const [content, setContent] = useState('')

  const send = () => {
    let newPost = {
      heading: heading,
      content: content
    }
    post(newPost)
  }

  return (
    <form className="form" onSubmit={(e) => {
      e.preventDefault()
      send()
      window.location.reload()
    }}>
      <input type="text" className="text_name" placeholder="enter post headline" onChange={(e) => setHeading(e.target.value)} />
      <textarea placeholder="enter description" onChange={(e) => setContent(e.target.value)} />
      <input type="submit" value="SEND" className="submit" />
    </form>
  )
}

export default AddPost;