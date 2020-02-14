import $ from 'jquery';
import { randomText } from './randomFact';

export const profilFnc = () => {
  $('#content').empty();
  const profilDiv = $(`
<div id="contentcerise">
    <div class="blockExpl blancVert">
        <img style="width: 250px;" src="./assets/images/imgprofil.png">
        <h2>Pikachu</h2>
    </div>
    <div class="blockExpl vert">
        <h2>Email</h2>
        <p>pikachu@Mike.com</p>
        <button class="blancVert">Historique Trajets</button>
    </div>
    <div class="blockExpl vert">
    <h2>Mes Badges</h2>
        <div class="listePhoto">
            <img src="./assets/images/pikadab.png">
            <img src="./assets/images/velo.jpg">
        </div>
    </div>
</div>
    `);
  $('#content').append(profilDiv);
  randomText();
};
