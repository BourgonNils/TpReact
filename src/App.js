import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from'./Card.js';
import _ from 'lodash';

class App extends Component {

  //need to get from the actual json
  getChampions(){
    return (["Thresh", "Ivern","Sion"]);
  }

  printCard(name, number){
    return (<Card name={name} number={number}/>);
  }


  //need to randomize
  printCards(champs){
    var champs1 = champs;
    _.shuffle(champs1);
    _.shuffle(champs);
    var allCards = document.createElement("section");
    allCards.appendChild(this.printCard("Sion",2));
    return allCards;
  }



  render() {

    return (
      <div className="App">

          <header className="bg-dark">
              <nav className="navbar bg-dark">
                  <span className="navbar-brand text-secondary">LOL MEMO</span>
              </nav>
          </header>
          <section className="card-columns ">
          {this.printCards(this.getChampions())}
          </section >
      </div>
    );
  }



}

export default App;
