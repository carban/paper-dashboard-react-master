import React from "react";
import DemoNavbar from "components/Navbars/DemoNavbar.jsx";

import { Link } from "react-router-dom";

class Start extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <DemoNavbar {...this.props} />
                <div className="contentStart">
                    <center>
                        <h1>FREE ELECTRICITY</h1>
                        <img width="854" height="480" src="https://thumbs.gfycat.com/PhysicalNextArcherfish-size_restricted.gif" alt="description"></img>
                        <br></br>
                        <Link className="btn btn-danger" to="/getBill">Download you Bill!</Link>
                    </center>
                </div>
            </div>
        )
    }
}

export default Start;