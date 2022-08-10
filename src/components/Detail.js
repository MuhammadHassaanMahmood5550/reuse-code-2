import { useParams } from "react-router-dom";
const Detail = () => {
    let params = useParams();
    return ( 
        <div id="Main_detail">
     <h1>{params.id}</h1>
        </div>
     );
}
 
export default Detail;