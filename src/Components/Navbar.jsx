import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";


const Navbar = () => {
    const {user,logOut} = useContext(AuthContext);
    const navs = <>
        <Link to="/"><li><a>Home</a></li></Link>
        <Link to="/login"><li><a>Login</a></li></Link>
        <Link to="/register"><li><a>Register</a></li></Link>
       {user && <Link to="/orders"><li><a>Orders</a></li></Link>}
    </>

    const handleLogOut = ()=>{
        logOut()
        .then(()=>console.log('logout this'))
        .catch(error=>{
            console.log(error);
        })
    }
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navs}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">auth private route</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   {navs}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ?
                     <>{user.email}
                     <a className="btn" onClick={handleLogOut}>sign out</a>
                    </> : <Link to="/login"><button className="btn" >login</button></Link>
                }
                
            </div>
        </div>
    );
};

export default Navbar;