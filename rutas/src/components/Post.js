import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useMatches } from "react-router-dom"

export function Post() {
  const [post, setPost] = useState();
  const matches = useMatches();
  const postId = matches[0].params.postId;
  console.log(matches)

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://jsonplaceholder.typicode.com',
      url: `/posts/${postId}`
    }).then(({ data }) => setPost(data))
  }, [postId]);

  if(post == null) return <p>Loading...</p>
  return (
    <>
      <Link to="/posts">Go Back</Link>
      <h1>Post Details</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  )
}
