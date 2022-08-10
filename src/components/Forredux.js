import { useSelector, useDispatch } from "react-redux";
import {increment, decrement} from "../redux/counter";
import { deletePost } from "../redux/posts";

const Forredux = () => {
    const count = useSelector((state) => state.counter.value);

    const posts = useSelector((state) => state.poster.posts);

    console.log('====================================');
    console.log(posts);
    console.log('====================================');

    const dispatch = useDispatch();
    return ( 
        <div id="Main_frreducx">
           <h1>Count = {count}</h1>
           <button onClick={() => dispatch(increment())}>increase</button>
           <button onClick={() => dispatch(decrement())}>decrease</button>

           {posts.map((cur) => (
            <div className="border border-primary my-5">
                <h3>{cur.title}</h3>
                <p>{cur.author}</p>
                <p>{cur.id}</p>
                <button onClick={() => dispatch(deletePost(cur.id))}>Delete</button>
            </div>
           ))}
 
        </div>
     );
}
 
export default Forredux;