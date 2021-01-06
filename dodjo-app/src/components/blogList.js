const BlogList = ({blogs, naziv, izbrisiBlog}) => {
    return ( <div className="blogList">
        <h2>{naziv}</h2>
        

        {blogs.map(blog=>{
          return ( 
          <div className='blog-preview' key={blog.id}>
            <h2>{blog.title}</h2>
            <p>{blog.author}</p>
            <button onClick={()=> izbrisiBlog(blog.id)} >Delete blog</button>
          </div>)
      })}
    </div> );
}
 
export default BlogList;