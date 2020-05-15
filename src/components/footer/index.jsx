import React, { Component } from "react";
import "./footer.scss";
class index extends Component {
  render() {
    return (
      <footer>
        <div className="container-fluid bg-dark p-5">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3 p-4">
            <h1 className="text-light">About Us</h1>
            <p className="ftext">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
              accusantium magnam. Facere sint libero debitis, rerum tempora illo
              corrupti, minima aliquid doloribus repudiandae aut aliquam tenetur
              earum. Harum, quam distinctio.
            </p>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 p-4">
            <h1 className="text-light">Quick links</h1>
            <div className="row">
              <div className="col-sm-6 container ftext">
                <ul className="list-group">
                  <li className="list-group-item remove ">Home</li>
                  <li className="list-group-item remove ">Products</li>
                  <li className="list-group-item remove ">Stories</li>
                  <li className="list-group-item remove ">Opportunity</li>
                </ul>
              </div>
              <div className="col-sm-6  ">
                <ul className="list-group border-0 ftext">
                  <li className="list-group-item remove  ">Legacy sites</li>
                  <li className="list-group-item remove ">Next steps</li>
                  <li className="list-group-item remove ">Register</li>
                  <li className="list-group-item remove ">Log in</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 p-4">
            <h1 className="text-light">Adress</h1>
            <ul className="list-group border-0 ftext">
              <li className="list-group-item remove  ">
                873 Gerdaline Lane, New york,1003
              </li>
              <li className="list-group-item remove ">656-787-876</li>
              <li className="list-group-item remove ">test@test.com</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <h1 className="text-light pt-4">Socail Media</h1>
            <i
              style={{ fontSize: "24px" }}
              className="fab fa-facebook mr-5 itext"
            ></i>
            <i
              style={{ fontSize: "24px" }}
              className="fab fa-twitter  itext"
            ></i>
            <i
              style={{ fontSize: "24px" }}
              className="fab fa-instagram itext ml-5"
            ></i>
          </div>
        </div>
      </div>
      </footer>
    );
  }
}

export default index;
