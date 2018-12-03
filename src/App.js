import React, { Component } from 'react';
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

  printCards(champs){
    var ret = [];
    //Arrow function necessary ?
    champs.map((champ)=>{
      ret.push(this.printCard(champ, "0"));
      ret.push(this.printCard(champ, "1"));
    });
    return _.shuffle(ret);
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
