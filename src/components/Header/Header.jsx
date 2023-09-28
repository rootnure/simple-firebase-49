import { NavLink } from "react-router-dom";


const Header = () => {
    return (
        <div className="space-x-6">
            <NavLink to="/" className="p-6 text-blue-600 font-semibold underline-offset-4 underline">Home</NavLink>
            <NavLink to="/login" className="p-6 text-blue-600 font-semibold underline-offset-4 underline">LogIn</NavLink>
        </div>
    );
};

export default Header;