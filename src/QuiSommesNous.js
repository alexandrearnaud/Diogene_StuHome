import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.css';

class QuiSommesNous extends Component {
  render() {
    return (
      <div className="QuiSommesNous">
        <h1> Qui sommes-nous ? </h1>
        <br/>
        <div>
          <h2> Informations Générales </h2>
          <br/>
          <p> Diogène est une startup qui met en relation des hôtes et des étudiants à la recherche d’un logement 
            temporaire dans le cadre de leurs études depuis 2019. </p>

          <p> Diogène a été créée en 2019 par un groupe d’étudiants ayant eux-même connu les désagréments de la recherche 
          de logement temporaire dans le cadre de leurs études en alternance. </p>
          <br/>

          <h2> Origine du Besoin </h2>
          <br/>
          <p> Absence de lien entre les étudiants et les hôtes désirant louer leurs logements. Présence de plus en plus d’étudiants 
            ayant besoin d’un logement pour leur études dont les étudiants en alternance avec un besoin temporaire. </p>
          <p> De nombreux propriétaires ont peur de louer à un public étudiant pour différentes raisons : </p>
          <p> Manque de revenus </p>
          <p> Peur des dégradation (physiques, sonores) </p>

          <br/>
          <h2> Objectifs Généraux </h2>
          <br/>
          <p> Proposer aux étudiants une plateforme web de recherche et locations d’habitations pour trouver facilement une 
            habitation suivant les critères recherchés. </p>
          <p> Proposer aux propriétaires une plateforme de locations d’habitations. </p>
   
        </div>
      </div>
    );
  }
}

export default QuiSommesNous;
