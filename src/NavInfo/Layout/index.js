import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Styles.css";
import Footer from '../../Pages/Footer/Footer'

class Landing extends Component {
	render() {
		return (
			<div className="container col-12">
				<div className="jumbotron jumbotron-fluid col-10 offset-1 text-center">
					<h2>Welcome come to Eddies Cosmetic</h2>
					<h5></h5>
				</div>

				{/* Links to Register & Login */}
				<div className="row">
					<div className="col-sm-10 offset-1 text-center">
						{/* Register */}
						<Link to="/register" className="btn registerButton">Register</Link>

						{/* Login */}
						<Link to="/login" className="btn loginButton">Login</Link>
					</div>
				</div>
                <Footer/>
			</div>
		);
	}
}
export default Landing;