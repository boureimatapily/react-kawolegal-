import React from 'react'
import Navbar from './Navbar'


class Login extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			email: '',
			password:''
		}
		this.handlechange = this.handlechange.bind(this)
		this.handleonSubmit = this.handleonSubmit.bind(this)
	}
	handlechange(e){
		this.setState({[e.target.name]:e.target.value})
		console.log(e.target.name)
	}
	handleonSubmit(e){
		e.preventDefault();
		console.log(this.state)
	}
	render(){
	return (
		<div>
			<Navbar navclassName="navbar navbar-fixed-top nav-config" startup="All Startups" />

			<div className="container body-container-login-page">
				<div className="row">
					<div className="col-lg-8 col-lg-offset-2">
						<br /><h3>Already a Member? Login to add your Startup.</h3><br />
						<form onSubmit={this.handleonSubmit}>
							<div className="form-group">
								<label for="exampleInputEmail1">Email address</label>
								<input type="email" name="email" value={this.state.email} onChange={this.handlechange} className="form-control" id="exampleInputEmail1" placeholder="Email" />
							</div>
							<div className="form-group">
								<label for="exampleInputPassword1">Password</label>
								<input type="password" name="password" value={this.state.password} onChange={this.handlechange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
							</div>
							<button type="submit" className="btn btn-primary">Sign in</button>
						</form>

					</div>
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
}

export default Login
