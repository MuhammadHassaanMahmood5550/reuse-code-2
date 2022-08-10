import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([
    {
      title: "one",
      body: "this is the first post displa on screen",
      author: "Ali",
      id: 1,
    },
    {
      title: "two",
      body: "this is the second post displa on screen",
      author: "joe",
      id: 2,
    },
    {
      title: "three",
      body: "this is the third post displa on screen",
      author: "sam",
      id: 3,
    },
  ]);
 
  const [isUpdate, setIsUpdate] = useState("");
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

//   const [newTitle, setNewTitle] = useState("");
//   const [newBody, setNewBody] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    
    if(isUpdate){
        const cur = isUpdate;
        console.log("cur =", cur);
    const updated = { ...cur, title: title };
    console.log("updated =", updated);
   
   const final = posts.map((all) => {
    if(all.id === cur.id){
        return updated;
    }else{
        return all;
    }
   })

   console.log("final =", final);
   setPosts(final);
   setIsUpdate(0);
   console.log("the is update = ", isUpdate);

    }else{
        setPosts([
            ...posts,
            { title: title, body: body, author: "Unknown", id: Math.random() },
          ]);
    }
 
  };


  const handleDelete = (id) => {
    const newPosts = posts.filter((cur) => cur.id !== id);
    setPosts(newPosts);
    setTitle();
    setBody();
  };

  const handleUpdate = (cur) => {
    setTitle(cur.title);
    setBody(cur.body);
    setIsUpdate(cur);
  };

  return (
    <div id="Main_home">
      {posts.map((cur) => (
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-md-7">
              <div className="border border-primary">
                <h1>{cur.title}</h1>
                <p>{cur.author}</p>
                <button
                  className="btn btn-danger my-3"
                  onClick={() => handleDelete(cur.id)}
                >
                  Delete
                </button>
                <Link className="btn btn-primary ml-2" to={`/Detail:${cur.id}`}>
                  Detail
                </Link>

                <button
                  className="btn btn-secondary ml-2"
                  onClick={() => handleUpdate(cur)}
                >
                  update
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}

      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleAdd}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Body"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-success">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
      
      <h1>{title}</h1>
      <h1>{body}</h1>
    </div>
  );
};

export default Home;
