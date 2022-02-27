import { useState } from 'react';

const AddPost = ({ createPost }) => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitPostInfo = (e) => {
    e.preventDefault();

    createPost({ title, body });
    setTitle('');
    setBody('');
  }

  return (
    <form className="form-control" onSubmit={ submitPostInfo }>
        <input className='input' type='text' value={title} placeholder='Post Title' onChange={e => setTitle(e.target.value)} />
        <input className='input' type='text' value={body} placeholder='Post Text' onChange={e => setBody(e.target.value)} />
        <input type='submit' value='POST!' className='submit-input' style={{color: '#EEE', fontSize: '1rem', backgroundColor: '#000', border:'0.1em solid #000'}} />
    </form>
  )
}

export default AddPost

