import { useParams, useHistory } from "react-router-dom";
import useFetch from './useFetch';
//npx json-server --watch data/db.json --port 8000
const BlogDetails = () => {
    const {id} = useParams()//ugradjeni hook, nije custom, samo je id, promenljiva
    //custom ovde
    let history = useHistory();
    const { error, isPending, data: blog } = useFetch('http://localhost:8000/blogs/' + id)
    //brisanje blogova
    let handleDelete = ()=>{
        fetch('http://localhost:8000/blogs/'+blog.id,{method:'DELETE'})
        .then(()=>{
            history.push('/')
        })
    }
    let buttonStyle={
        backgroundColor:'#f1356d',
        borderRadius:'5px',
        border:'none',
        width:'100px',
        textAlign:'center',
        marginTop:'10px',
        padding:'5px 5px'
    }
    return ( <div className="blog-details">
        {isPending && <div>Loading...</div>}
        {error && <div>{ error}</div>}
        {blog &&
        <article>
            <h2>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <div>{blog.body}</div>
            <div onClick={handleDelete} style={buttonStyle}>Delete</div>
        </article>
        }
    </div> );
}
 
export default BlogDetails;