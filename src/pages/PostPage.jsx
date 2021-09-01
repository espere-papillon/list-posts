import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom'
import {useFetching} from "../hooks/useFetching"
import {PostService} from "../API/PostService"
import {Loader} from "../components/UI/loader/Loader"

export const PostPage = () => {
  const params = useParams()
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchingPostById, isLoading, error] = useFetching(async (id) => {
    const response = await PostService.getById(id)
    setPost(response.data)
  })
  const [fetchingComments, isComLoading, comError] = useFetching(async (id) => {
    const response = await PostService.getComments(id)
    setComments(response.data)
  })

  useEffect(() => {
    fetchingPostById(params.id)
    fetchingComments(params.id)
  }, [])
  return (
    <div>
      <h2 className="containerLoader">Post page {params.id}</h2>
      {isLoading
        ? <Loader/>
        : <div>{post.id}. {post.title}</div>
      }
      <h2 className="containerLoader">Comments:</h2>
      {isComLoading
        ? <Loader/>
        : <div>{comments.map(comm => <div key={comm.id} style={{marginTop: 15}}>
          <h4>{comm.email}</h4>
          <h4>{comm.body}</h4>
        </div>)}</div>
      }
    </div>
  );
};