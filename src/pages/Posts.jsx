import React, {useState, useEffect, useRef} from 'react';
import {PostsList} from "../components/PostsList";
import {PostForm} from "../components/PostForm";
import {PostFilter} from "../components/PostFilter";
import {ModalWindow} from "../components/UI/modal/ModalWindow";
import {Button} from "../components/UI/button/Button";
import {Select} from "../components/UI/select/Select";
import {usePosts} from "../hooks/usePosts"
import {useObserver} from "../hooks/useObserver"
import {PostService} from "../API/PostService"
import {Loader} from "../components/UI/loader/Loader"
import {useFetching} from "../hooks/useFetching"
import {getPageCount, getPagination} from "../utils/pages"
import {Pagination} from "../components/UI/pagination/Pagination"

export const Posts = () => {
  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: "", query: ""})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const lastElement = useRef()

  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostsLoading, postsError] = useFetching(async (limit, page) => {
    const response = await PostService.getAll(limit, page)
    setPosts([...posts, ...response.data])
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })

  useObserver(lastElement, page < totalPages, isPostsLoading, () => {
    setPage(page + 1)
  })

  useEffect(() => {
    fetchPosts(limit, page)
  }, [page, limit])

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
      <Select value={limit} onChange={value => setLimit(value)} defaultValue="Count of elements on page"
      options={[
        {value: 5, name: '5'},
        {value: 10, name: '10'},
        {value: 25, name: '25'},
        {value: -1, name: 'All posts'},
      ]}/>
      {postsError && <h2 className="labelPostsNotFound">Error: ${postsError}</h2>}
      <PostsList posts={sortedAndSearchedPosts} title={"Posts list"} remove={removePost}/>
      <div ref={lastElement} style={{height: 20, backgroundColor: "red"}}/>
      {isPostsLoading && <div className="containerLoader"><Loader/></div>}
      <Pagination page={page} totalPages={totalPages} changePage={changePage} />
    </div>
  );
};