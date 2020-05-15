import React, { Component } from "react";

//? images
import posterImg from "../../utilities/assets/images/thumbnail.png";
import button from "../../utilities/assets/images/button.png";

class section4 extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-6 leftDiv">
            <div className="content2 text-light pt-5 pl-5 pr-5 pb-0">
              <h1 className="pb-5 pl-5">
                <span className="d-block firstHalf ">Scientfifically</span>{" "}
                <span className="secondHalf"> Proven Products</span>
              </h1>
              <p className="text pl-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                esse reprehenderit incidunt dignissimos, culpa possimus, ex quae
                sit soluta magnam recusandae repellat, ipsum natus sed at
                quaerat debitis modi dolore.
              </p>
              <p className="text pl-5">
                <span className="hidden">text</span> Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Vitae esse reprehenderit incidunt
                dignissimos, culpa possimus, ex quae sit soluta magnam
                recusandae repellat, ipsum natus sed at quaerat debitis modi
                dolore.
              </p>
            </div>
          </div>
          <div className="rightDiv col-sm-12 col-md-12 col-lg-6">
            <h1 className="headingSpacing">
              <span className="firstHead">We know you want to </span>
              <span className="d-block secondHead">live a Prime Life</span>
            </h1>
            <div className="images">

            <img src={button} className="btnimg" alt="" />
            <img src={posterImg} alt=""  width="100%" />
            </div>
            <div className="content3 p-3 pb-5">
              <p className="pt-5 p1">
                <span className="hidden">text</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                nobis reprehenderit ipsam atque accusamus aut dolorem. Unde,
                aspernatur! Officia temporibus qui soluta pariatur illo sunt
                exercitationem asperiores ipsam distinctio molestias.
              </p>
              <p className="p1 pb-5">
                <span className="hidden">text</span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse
                nobis reprehenderit ipsam atque accusamus aut dolorem. Unde,
                aspernatur! Officia temporibus qui soluta pariatur illo sunt
                exercitationem asperiores ipsam distinctio molestias.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default section4;
