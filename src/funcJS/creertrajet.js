import $ from 'jquery';
import { montrajet1 } from './montrajet';

export const creerTrajet = () => {
  $('.screen').empty();
  const creerTrajetDiv = $(`
  <div id="navbar">
  <div class="logo">
    <img src="./assets/images/leaf.png">
  </div>
  <div class="imgProfil">
    <img src="./assets/images/imgprofil.png" >
  </div>
</div>
<div id="content">
    <div id="contentcerise">
    <div class="blockExpl rougeNoB">
      <h2>EcoAppli</h2>
    </div>
    <div class="sphere rouge" id="creerTrajet">
      <h2>Créer un trajet</h2>
    </div>
    <div class="divButton">
      <button disabled class="rouge">Classement</button>
      <button disabled class="rouge">Infos</button>
    </div>
  
  </div>
</div>
    `);
  $('.screen').append(creerTrajetDiv);
  $('#creerTrajet').on('click', montrajet1);
  $('.logo').on('click', creerTrajet);
};
