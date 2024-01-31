import { Link } from "react-router-dom";
function Navbar(){
    return(
        <div id="header">
            <div id="siteinfo">
                <h1>Yamini</h1>
            </div>
            <div id="navbar">
                <Link className="navlink" to="/">Home</Link>
                <Link className="navlink" to="/about">About</Link>
                

            </div>
        </div>
    )
}
export default Navbar;