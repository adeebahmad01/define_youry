import React, { Component } from 'react';

class PCard extends Component {
    render() {
        return (
            <div className="card box" style={{ width: "18rem" }}>
            <img src={this.props.img} className="card-img-top" height="300px" alt="..." />
            <div className="card-body">
              <h5 className="card-title title">{this.props.title}</h5>
              <p className="card-text description">{this.props.description}</p>
              <button  className="btn buyBtn">
                {this.props.linkTitle}
              </button> 
            </div>
        </div>
        );
    }
}

export default PCard;