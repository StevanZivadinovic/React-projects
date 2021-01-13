import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [blogs, setBlogs] = useState(
    null
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
  const [error, setError] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      //npx json-server --watch public/db.json --port 8000
      fetch(url)
        .then((resp) => {
          if (!resp.ok) {
            throw Error("Nije moguce iz nekog razloga dohvatiti podatke!!!");
          }
          return resp.json();
        })
        .then((data) => {
          console.log(data);
          setBlogs(data);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          console.log(err.message);
          setError(err.message);
          setLoading(false);
          setBlogs(false);
        });
    }, 1000);
  }, [url]);

  let izbrisiBlog = (id) => {
    let newBlogs = blogs.filter((blog) => blog.id !== id);
    return setBlogs(newBlogs);
  };
  return { blogs, isLoading, error, izbrisiBlog };
};

export default useFetch;
