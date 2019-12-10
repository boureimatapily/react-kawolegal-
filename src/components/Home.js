import React from 'react'
import Navbar from './Navbar'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'


const Home = () => {
	const navclassName = {}
  return (
    <div>
    <Navbar navclassName ="navbar navbar-fixed-top navbar-static-top" startup="Startups" />

  		<div className="container-fluid body-container-home-page"> 
			<div className="row">

				<div className="col-lg-12 text-center">
					<div className="img-index-z1">
						<img src="assert/images/logoC.png" height="300px" width="900px" className="img-fluid" />	
					</div>
					<div className="img-index-z2 overlay">
							<p>
								<h1>KAWOLEGAL</h1>
							</p>

							<p>
						 		<h2>A collaborative ecosystem for problem<br/> solvers and support for Startups.</h2>
							</p>

							<p>
								<Link className="btn btn-primary btn-lg" to="/Register" role="button">Register Now!</Link>
							</p>
					</div>
				</div>			
			</div>
		</div>
	<br/><br/>

	<footer className="footer-home-page">
			
		<div className="container">
			<div className="row">
				<div className="col-lg-6">
					<h5 id="copyright">© 2017 KawoLegal. All Rights Reserved</h5>					
				</div>

				<div className="col-lg-6 footer-icon text-right">
					<ul>
				        <li><a href=""><span className="fa fa-facebook"></span></a></li>
				        <li><a href=""><span className="fa fa-twitter"></span></a></li>
				        <li><a href=""><span className="fa fa-linkedin-square"></span></a></li>
				        <li><a href=""><span className="fa fa-instagram"></span></a></li>					 
				    </ul>		
				</div>

			</div>
		</div>

	</footer>
    </div>
  )
}

export default Home
