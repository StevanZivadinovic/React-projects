//sfc - statles functional component
import { useState } from "react";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title:'ozonizacija',  
      ime: "stefana",
      prezime: "podolski",
      id: 1,
    },
    {title:'pesticidi', ime: "milijana", prezime: "djokic", id: 2 },
  ]);

  return (
    <div className="content">
      <h1>Home page</h1>
      <p>pozz</p>
      <div>{blogs.map(blog=>{
          return ( 
          <div key={blog.id}>
            <h1>{blog.title}</h1>
            <p>{blog.ime}</p>
          </div>)
      })}</div>
    </div>
  );
};

export default Home;
