import Button from './Button';

const Post = ({posts, deletePost, openModal}) => {
  return (
      <div className="list-content">
           {
            posts.map(post => (
                <div key={post.id} className='list-item-content'>
                    <small>Post ID: {post.id}</small>
                    <li className="list-title">{post.title}</li>
                    <li className="list-body">{post.body}</li>
                    <div className='list-btns'>
                    <Button text='Update' styles={{ width: '100%', backgroundColor: '#FFF', padding: '0.6rem', border: '0.1em solid #000'}} onClick={openModal}/>
                    <Button text='Delete Post' styles={{ width: '100%', color: '#FF0000', backgroundColor: '#FFF', padding: '0.6rem', border: '0.1em solid #000'}} onClick={() => deletePost(post.id)}/>
                    </div>
                </div>
            ))
        }
      </div>  
  )
}

export default Post