import Post from "./Post";

const Posts = ({posts, deletePost, openModal}) => {
  return (
    <ul className="list">
        <Post posts={posts} deletePost={deletePost} openModal={openModal}/>
    </ul>
  )
}

export default Posts