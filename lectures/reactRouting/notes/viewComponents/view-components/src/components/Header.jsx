import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="headerStyle">
            <h1 className="headerTextStyle" >
                Page Header
            </h1>
            <div className="headerLinkStyle">
                <Link to="/">Home</Link>
                <Link to="/dinosaurs">Dinosaur Page</Link>
                <Link to="/boardgames">Board Games Page</Link>
            </div>
        </header>
    )
}



export default Header