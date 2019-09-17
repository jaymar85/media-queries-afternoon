import React from "react";
import "../styles/Nav.css";

class Nav extends React.Component {
    
    constructor() {
        super();
        this.state = {menuOpenStatus: "side-menu"}    
    }

   toggle = () => {
        if(this.state.menuOpenStatus === "side-menu-close" || this.state.menuOpenStatus === "side-menu") {
            this.setState({menuOpenStatus: "side-menu-open"});
        } else if(this.state.menuOpenStatus === "side-menu-open") {
            this.setState({menuOpenStatus: "side-menu-close"});
        }
    }

    render() {
        // const {menuOpenStatus} = this.state; // line 40 No this.state
        return (
            <>
                <nav>
                    <div>
                        <h1>Start Bootstrap</h1>
                    </div>
                    <div>
                        <ul>
                            <li>SERVICES</li>
                            <li>PORTFOLIO</li>
                            <li>ABOUT</li>
                            <li>TEAM</li>
                            <li>CONTACT</li>
                            <button className="hamburger" onClick={this.toggle}>MENU
                            <span >&#9776;</span>   
                            </button>
                        </ul>
                    </div>
                </nav>
                <div className={`${this.state.menuOpenStatus}`}>
                    <h4>SERVICES</h4>
                    <h4>PORTFOLIO</h4>
                    <h4>ABOUT</h4>
                    <h4>TEAM</h4>
                    <h4>CONTACT</h4>
                </div>
            </>
        )
    }
}

export default Nav;

// <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png" alt="hamburger"/>