import { useState } from 'react';

const Modal = ({ closeModal, updatePost }) => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitPostInfo = (e) => {
    e.preventDefault();

    updatePost({ id, title, body });

    setId('');
    setTitle('');
    setBody('');
  }

  return (
    <div className="modal">
        <span onClick={closeModal}>X</span>
        <form onSubmit={submitPostInfo}>
            <h1>Update</h1>
            <input className='input' type='tel' placeholder='Enter Post ID' value={id} onChange={e => setId(e.target.value)}/>
            <input className='input' type='text' placeholder='Post Title' value={title} onChange={e => setTitle(e.target.value)}/>
            <input className='input' type='text'placeholder='Post Text' value={body} onChange={e => setBody(e.target.value)}/>
            <input type='submit' value='POST!' className='submit-input' style={{color: '#EEE', fontSize: '1rem', backgroundColor: '#000', border:'0.1em solid #000'}} />
        </form>
    </div>
  )
}

export default Modal