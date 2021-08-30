import React, {useState, useEffect} from 'react';
import "./styles/App.css"
import {PostsList} from "./components/PostsList";
import {PostForm} from "./components/PostForm";
import {PostFilter} from "./components/PostFilter";
import {ModalWindow} from "./components/UI/modal/ModalWindow";
import {Button} from "./components/UI/button/Button";
import {usePosts} from "./hooks/usePosts"
import {PostService} from "./API/PostService"
import {Loader} from "./components/UI/loader/Loader"
import {useFetching} from "./hooks/useFetching"
import {getPageCount, getPagination} from "./utils/pages"
import {Pagination} from "./components/UI/pagination/Pagination"

function App() {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useEffect(() => {
    fetchPosts()
  }, [page])

  const createPost = (post) => {
    setPosts([...posts, post])
    setModal(false)
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const changePage = (page) => {
    setPage(page)
  }

  return (
    <div className={"App"}>
      <Button style={{"marginTop": "20px"}} onClick={() => setModal(true)}>Add post</Button>
      <ModalWindow visible={modal} setVisible={setModal}>
        <PostForm create={createPost}/>
      </ModalWindow>
      <hr className="separator"/>
      <PostFilter filter={filter} setFilter={setFilter}/>
      {postsError && <h2 className="labelPostsNotFound">Error: ${postsError}</h2>}
      {isPostsLoading
        ? <div className="containerLoader"><Loader/></div>
        : <PostsList posts={sortedAndSearchedPosts} title={"Posts list"} remove={removePost}/>}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
}

export default App;
