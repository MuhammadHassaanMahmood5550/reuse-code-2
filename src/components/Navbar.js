import '../scss/navbar.scss';
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <div id="Main_navbar">
             <Link to="/">Home</Link>
             
             <Link to="/Forredux">Forredux</Link>
        </div>
     );
}
 
export default Navbar;