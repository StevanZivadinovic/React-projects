//sfc - statles functional component
import { useState, useEffect } from "react";
import BlogList from "./blogList";
import useFetch from "./useFetch";

const Home = () => {
    const {blogs, isLoading, error, izbrisiBlog} = useFetch('http://localhost:8002/blogs');

    
    

  return (
    <div className="content">
      {error && <div>{ error }</div> }
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