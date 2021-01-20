
import React from 'react';
class Header extends React.Component {
    //constructor(props) {
    //    super(props);
    //    this.state = {};
    //}
    render() {
        return (
   
            <div>
                <header>
                    <div className="row">

                        <div className="col navCol">
                            <nav className="navbar navbar-expand-sm navbar-light inner">
                                <div className="logoImg"> </div>
                                <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Features </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Pricing</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Resources</a>
                                        </li>


                                    </ul>
                                    <div className="divNavButtons">
                                        <ul className="navbar-nav">
                                            <li className="nav-item">
                                                <div className=" nav-link ">    <button type="button" className="btn blankBtn">Login</button></div>
                                            </li>
                                            <li className="nav-item">
                                                <div className=" nav-link ">    <button type="button" className="btn cyanColored elipsBtn">sign up</button></div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>


                            </nav>
                        </div>
                    </div>
                </header>
                </div>
       
        );
    }
}


export default Header;
