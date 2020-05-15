import React, { Component } from "react";

//todo           components
import Card from "../utils/Cards";

//images
import p1 from "../../utilities/assets/images/p1.png";
import p2 from "../../utilities/assets/images/p2.png";
import p3 from "../../utilities/assets/images/p3.png";
import p4 from "../../utilities/assets/images/p4.png";

class Section3 extends Component {
  render() {
    return (
      <div className="container-fluid section3">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              img={p1}
              title="Title"
              description="Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit.  rerum officia ratione dolore eos
                  voluptatibus eius ad. Dolor, omnis."
              linkTitle="linkTitle"
            />{" "}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3 ">
            <Card
              img={p2}
              title="Title"
              description="Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Non nesciunt nihil est ea nostrum, impedit
                  amet dolor corrupti enimis."
              linkTitle="linkTitle"
            />{" "}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              img={p3}
              title="Title"
              description="Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Non nesciunt nihil est ea nostrum, impedit
                  amet dolor corrupti  omnis."
              linkTitle="linkTitle"
            />{" "}
          </div>
          <div className="col-sm-12 col-md-6 col-lg-3">
            <Card
              img={p4}
              title="Title"
              description="Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Non nrum officia ratione dolore eos
                  voluptatibus eius ad. Dolor, omnis."
              linkTitle="linkTitle"
            />{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Section3;
