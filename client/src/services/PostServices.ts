interface PostInterface {
  id: number,
  heading: string,
  content: string
}

interface AddPostInterface{
  heading: string,
  content: string,
}

export interface GetInterface extends PostInterface {
  created_at?: string,
  updated_at?: string
}


const getAllResource = (url: string): Promise<GetInterface[]> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}

export const getAllPosts = () => {
  return getAllResource(`http://localhost:5444/article`);
}

const getResource = (url: string): Promise<GetInterface> => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(res => resolve(res.json()))
      .catch(err => reject(err))
  })
}

export const getPost = (id: number) => {
  return getResource(`http://localhost:5444/article/${id}`);
}

export const post = async (newPost: AddPostInterface) => {
  const addPost = await fetch(`http://localhost:5444/article`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
  const content = await addPost.json();

  console.log(content);
}

export const deleteArticle = async (id: number) => {
  await fetch(`http://localhost:5444/article/${id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }
  })
}

export const put = async (newPost: PostInterface) => {
  const addPost = await fetch(`http://localhost:5444/article/${newPost.id}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(newPost)
  });
}