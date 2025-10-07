import './header.css';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <ul>
            <li><Link className="active" href="#home">Home</Link></li>
            <li><Link to="/users">User</Link></li>
            <li><Link to="/products">Products</Link></li>
        </ul>


    )
}
export default Header;
