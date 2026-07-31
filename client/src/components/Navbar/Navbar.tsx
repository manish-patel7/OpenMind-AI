import "./Navbar.css";

import Logo from "../ui/Logo";
import Button from "../ui/Button";

function Navbar() {
    return (
        <nav className="navbar">
            <Logo />

            <div className="navbar-actions">
                <Button variant="secondary">
                    Login
                </Button>

                <Button variant="primary">
                    Sign Up
                </Button>
            </div>
        </nav>
    );
}

export default Navbar;