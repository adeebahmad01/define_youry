import React, { Component } from "react";

//todo           components
import Section1 from "./section1";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./section4";
import Section5 from "./section5";
import Section6 from "./section6";

import './culture.scss'

class index extends Component {
  render() {
    return (
      <div className="container-fluid p-0 m-0">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section6 />
      </div>
    );
  }
}

export default index;
