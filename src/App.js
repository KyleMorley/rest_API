import { useState, useEffect } from 'react';
import Header from './components/Header';
import AddPost from './components/AddPost';
import Posts from './components/Posts';
import Button from './components/Button';
import Modal from './components/Modal';

function App() {
  const [posts, setPosts] = useState([]);
  const [addPost, setAddPost] = useState(false);
  const [showModal, setShowModal] = useState(false);

  //Load Posts: READ
  useEffect(() => {
    const getPosts = async () => {
      const reply = await fetchPosts();

      setPosts(reply);
    }

    getPosts();
  }, [])

  const fetchPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/');
    const data = await res.json();
    return data.slice(-5);
  }

  //Toggle add post form
  const toggleAddPost = () => setAddPost(!addPost);

  //Add Post: CREATE
  //NOTE: Not actually uploading to json placeholder
  //NOTE: Handle unique ID in full scale projects... Unlike here... Check console
  const createPost = async (post) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(post)
    })
    const data = await res.json();
    setPosts([...posts, data])
  }

  //Delete Post From UI: DELETE
  const deletePost = (id) => {
    setPosts(posts.filter(post => post.id !== id))
  }

  //Update: Can not actually update placeholder
  //Check Console for New Values
  const updatePost = async (post) => {
    const postId = posts.filter(p => p.id === parseInt(post.id));
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId[0].id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      },
      body: JSON.stringify(post)
    })
    const data = await res.json();
    console.log(data)
    setShowModal(false);
  }

  //Modal 
  const openModal = () => showModal ? null : setShowModal(true);

  const closeModal = () => setShowModal(false);

  return (
    <div className="container">
      <Header />
      <Button text='Add Post' styles={{color: '#EEE', fontSize: '1rem', backgroundColor: '#000', marginLeft: '2rem', border:'0.1em solid #000'}} onClick={ toggleAddPost } />
      { addPost ? <AddPost createPost={createPost} /> : null }
      <Posts posts={posts} deletePost={deletePost} openModal={openModal}/>
      {showModal ? <Modal closeModal={closeModal} updatePost={updatePost} /> : null}
    </div>
  );
}

export default App;