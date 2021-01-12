//sfc - statles functional component
import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null
  //   [
  //   {
  //     title: "ozonizacija",
  //     author: "stefana podolski",
  //     body: "Lorem ispum dolor sit amit",
  //     id: 1,
  //   },
  //   {
  //     title: "pesticidi",
  //     author: "milijana djokic",
  //     body: "Lorem ispum dolor sit amit",
  //     id: 2,
  //   },
  // ]
  );
  const [isLoading, setLoading] = useState(true);
// const [name, setName] = useState('mijagi')


  let izbrisiBlog = (id) =>{
   let newBlogs =  blogs.filter((blog)=>blog.id !== id);
   setBlogs(newBlogs);
  }

useEffect(()=>{
  setTimeout(()=>{
    fetch('http://localhost:8000/blogs')
    .then((resp)=>{
      return resp.json()
    })
    .then((data)=>{
      console.log(data);
      setBlogs(data);
      setLoading(false)
    })
  },1000)
  
}, [])

  return (
    <div className="content">
      {isLoading && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} naziv="All blogs" izbrisiBlog={izbrisiBlog} />}
      {/* <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "stefana podolski";
        })}
        naziv="Stefana's blogs"
        izbrisiBlog={izbrisiBlog}
      /> */}
      {/* u redu iznad, u filter metodi, mozes da sklonis return i viticaste zagrade ili da ih ostavis */}
      {/* <button onClick={()=>setName('luka')}>Promeni ime</button>
      <p>{ name }</p> */}
    </div>
  );
};

export default Home;