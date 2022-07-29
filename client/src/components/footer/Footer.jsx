import React from "react";
import "./footer.scss";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4>THE BASICS</h4>
            <ul className="list-content">
              <li>About MovieHub</li>
              <li>Contact Us</li>
              <li>Support Forum</li>
            </ul>
          </div>
          <div className="col">
            <h4>GET INVOLVED</h4>
            <ul className="list-content">
              <li>Contribution</li>
              <li>Add New Movie</li>
              <li>Add New Series</li>
            </ul>
          </div>
          <div className="col">
            <h4>COMMUNITY</h4>
            <ul className="list-content">
              <li>Guidelines</li>
              <li>Discussions</li>
              <li>Leaderboards</li>
              <li>Twitter</li>
            </ul>
          </div>
          <div className="col">
            <h4>LEGAL</h4>
            <ul className="list-content">
              <li>Terms Of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <div className="row">
          <p className="col-sm">
            &copy; {new Date().getFullYear()} MOVIEHUB |  All rights reserved  |  Terms Of Service  | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;