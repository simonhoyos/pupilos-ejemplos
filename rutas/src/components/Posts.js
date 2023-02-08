import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: '/posts',
    })
      .then(({ data }) => {
        setPosts(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  if(loading) return <p>Loading...</p>;
  if(error) return <p>Something went wrong</p>;
  return (
    <>
      <h1>Posts</h1>
      <Link to="/">Ir a home</Link>

      {posts.map(post => {
        return (
          <div key={post.id}>
            <h1>{post.title}</h1>
            <Link to={`/post/${post.id}`}>Ver detalles</Link>
          </div>
        )
      })}
    </>
  )
}
