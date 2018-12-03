import React, { Component } from 'react';

class Card extends Component {

  render() {

    return (
      <div className="card bg-dark text-white border-warning border-3">
          <img className="card-img" alt="carte" src={"https://ddragon.leagueoflegends.com/cdn/img/champion/splash/"+this.props.name+"_"+this.props.number+".jpg"}/>
          <p className="card-text">{this.props.name}</p>
      </div>

    );
  }


}

export default Card;
