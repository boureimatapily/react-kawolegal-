import React from 'react'
import Navbar from './Navbar'


const Register = () => {
  return (
    <div>
  <Navbar navclassName ="navbar  nav-config"  startup="All Startups" />
 
		<div className="row">
			<div className="col-lg-8 col-lg-offset-2">
				<br/><h3>Join KawoLegal. Sign up to get your Startup listed now!</h3><br/>
				<form>
					 <div className="form-group">
					    <label for="exampleInputEmail1">Full Name</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Full Name" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputEmail1">Email address</label>
					    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Email" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
					  </div>
					  <div className="form-group">
					    <label for="exampleInputPassword1">Confirm Password</label>
					    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
					  </div>
				
					  <button type="submit" className="btn btn-primary">Sign up</button>
				</form>				
			</div>	
		</div>	
	

	<footer className="footer-others-page">			
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

export default Register
