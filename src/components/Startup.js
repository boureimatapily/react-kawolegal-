import React from 'react'
import Navbar from './Navbar'


const Startup = () => {
  return (
    <div>

      <Navbar navclassName="navbar  nav-config" startup="Startups" />

      <div className="container body-container-startup-page">
        <div className="row">
          <div className="col-lg-10 col-lg-offset-l">
            <form action="" method="">
              <div className="input-group search-box">
                <input type="text" className="form-control" name="" placeholder="search Startup by name or industry" />
                <div className="input-group-btn">
                  <button className="btn btn-primary" type="search">
                    <span className="glyphicon glyphicon-search"> Search</span>
                  </button>
                </div>
              </div>
            </form>

          </div>
        </div>
        <div className="row">
          <div className="col-lg-10 col-lg-offset-1">

            <ul className="media-list startup-item-size">
              <li className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="assert/images/st1.jpeg" className="img-responsive" width="100px" height="100px" />
                  </a>
                </div>

                <div className="media-body">
                  <a href=""><h3 className="media-heading">tutahub</h3></a>
                  <p>
                    a website for tutorials
					  </p>
                  <p>
                    <a href=""><button className="btn btn-default">See full details</button></a>
                  </p>
                </div>
              </li>
              <hr />
            </ul>

            <ul className="media-list startup-item-size">
              <li className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="assert/images/st2.jpeg" className="img-responsive" width="100px" height="70px" />
                  </a>
                </div>

                <div className="media-body startup-item-size">
                  <a href=""><h3 className="media-heading">Andita</h3></a>
                  <p>
                    Andita is tech Blog
					  </p>
                  <p>
                    <a href=""><button className="btn btn-default">See full details</button></a>
                  </p>
                </div>
              </li>
              <hr />
            </ul>

            <ul className="media-list startup-item-size">
              <li className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="assert/images/str3.png" className="img-responsive" width="100px" height="100px" />
                  </a>
                </div>

                <div className="media-body">
                  <a href=""><h3 className="media-heading">Think and Zoom</h3></a>
                  <p>
                    Providing solutions for the visually impaired, such as mind-controlled zooming, and wearable controlled zooming.
					  </p>
                  <p>
                    <a href=""><button className="btn btn-default">See full details</button></a>
                  </p>
                </div>
              </li>
              <hr />
            </ul>

            <ul className="media-list startup-item-size">
              <li className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="assert/images/str4.png" className="img-responsive" width="100px" height="100px" />
                  </a>
                </div>

                <div className="media-body">
                  <a href=""><h3 className="media-heading">Slatecube</h3></a>
                  <p>
                    Slatecube helps job seekers develop job-relevant skills, gain work experience, and land well paying jobs through world-className up-skilling courses and virtual internships.
					  </p>
                  <p>
                    <a href=""><button className="btn btn-default">See full details</button></a>
                  </p>
                </div>
              </li>
              <hr />
            </ul>

            <ul className="media-list startup-item-size">
              <li className="media">
                <div className="media-left">
                  <a href="#">
                    <img className="media-object" src="assert/images/str5.png" className="img-responsive" width="110px" height="50px" />
                  </a>
                </div>

                <div className="media-body">
                  <a href=""><h3 className="media-heading">Sleekjob Academy</h3></a>
                  <p>
                    Trains world className software developers in Ghana and matches them to employment opportunities
					  </p>
                  <p>
                    <a href=""><button className="btn btn-default">See full details</button></a>
                  </p>
                </div>
              </li>
              <hr />
            </ul>

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

export default Startup
