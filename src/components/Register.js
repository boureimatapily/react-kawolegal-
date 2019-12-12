import React from 'react'
import Navbar from './Navbar'


class Register extends React.Component {
  constructor(props){
            super(props)
            this.state={ 
              fullname:'',
              email:'',
              password:'',
              confirm:''
            }
            this.handlechange = this.handlechange.bind(this);
            this.handleonSubmit = this.handleonSubmit.bind(this);
  }
  handlechange (e){
    this.setState( {[e.target.name] : e.target.value}) 
    console.log(e.target.name)
   }

  handleonSubmit = (e) =>{
    e.preventDefault();
    console.log(this.state)
   
  }
  
  

  render(){
  return (
    <div>
      <Navbar navclassName="navbar  nav-config" startup="All Startups" />

      <div className="row">
        <div className="col-lg-8 col-lg-offset-2">
          <br /><h3>Join KawoLegal. Sign up to get your Startup listed now!</h3><br />
          
          <form onSubmit={this.handleonSubmit}>
            <div className="form-group">
              <label for="exampleInputEmail1">Full Name</label>
              <input type="text" value={this.state.fullname} name="fullname" onChange={this.handlechange} className="form-control" id="exampleInputEmail1" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email"  value={this.state.email} name="email" onChange={this.handlechange} className="form-control" id="exampleInputEmail1" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password"  value={this.state.password} name="password" onChange={this.handlechange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Confirm Password</label>
              <input type="password"  value={this.state.confirm} name="confirm" onChange={this.handlechange} className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" />
            </div>

            <button type="submit"  className="btn btn-primary">Sign up</button>
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
}


export default Register
