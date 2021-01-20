import { useState } from "react";
//npx json-server --watch data/db.json --port 8000, 
//svaki put kad pokreces projekat kucas ovo u terminal
const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');

 let handleSubmit=(e)=>{
    e.preventDefault()
    let blog = {title, body, author};
    console.log(blog);
    fetch('http://localhost:8000/blogs',{
      method:'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(blog)
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        <button>Add Blog</button>
      </form>
    </div>
  );
}
 
export default Create;