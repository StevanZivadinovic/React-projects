//sfc - statles functional component
import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "ozonizacija",
      author: "stefana podolski",
      body: "Lorem ispum dolor sit amit",
      id: 1,
    },
    {
      title: "pesticidi",
      author: "milijana djokic",
      body: "Lorem ispum dolor sit amit",
      id: 2,
    },
  ]);

  let izbrisiBlog = (id) =>{
   let newBlogs =  blogs.filter((blog)=>blog.id !== id);
   setBlogs(newBlogs);
  }

useEffect(()=>{
  console.log('haj')
}, [])

  return (
    <div className="content">
      <BlogList blogs={blogs} naziv="All blogs" izbrisiBlog={izbrisiBlog}     />
      {/* <BlogList
        blogs={blogs.filter((blog) => {
          return blog.author === "stefana podolski";
        })}
        naziv="Stefana's blogs"
        izbrisiBlog={izbrisiBlog}
      /> */}
      {/* u redu iznad, u filter metodi, mozes da sklonis return i viticaste zagrade ili da ih ostavis */}
    </div>
  );
};

export default Home;
