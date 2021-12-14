import React from "react";
import MainLayout from "../../components/Layout/MainLayout";
import request from "../../api/request";
import PostCard from "../../components/PostCard/PostCard";
import Pagination from "../../components/Pagination/Pagination";


const PAGE_SIDE = 4

export default function PostList() {
  const [Posts, setPosts] = React.useState([])
  const [total, setTotal] = React.useState(1)
  const [currentPage, setCurrentPage] = React.useState(1)

  const fetchPosts = async (page) => {
    const skip = (page - 1) * PAGE_SIDE
    const limit = PAGE_SIDE

    const res = await request({
      method: 'GET',
      url: '/posts',
      params: {
        skip,
        limit,
      }
    })

    const data = res.data
    const totalPost = res.total
    setPosts(data)
    setTotal(totalPost)
  }


  const handleClickPage = (currentPage) => {
    setCurrentPage(currentPage)
  }

  React.useEffect(async () => {
    fetchPosts(currentPage)
  }, [currentPage])


  return (
    <MainLayout>
      {Posts.map(post => (
        <div className="col-md-3" key={post._id}>
          <PostCard
            imageUrl={post.imageUrl}
            title={post.title}
            description={post.description}
            createdBy={post.createdBy.userName}
          />
        </div>
      ))}

      <div>
        <Pagination
          total={total}
          pageSize={PAGE_SIDE}
          currentPage={currentPage}
          handleClickPage={handleClickPage}
        />
      </div>
    </MainLayout>
  )
}