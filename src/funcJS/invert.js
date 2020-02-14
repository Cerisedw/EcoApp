import $ from 'jquery';
// eslint-disable-next-line import/no-cycle
import { montrajet1 } from './montrajet';
import { monTrajetInfo } from './montrajetInfo';
import { randomText } from './randomFact';

export const btnInvert = () => {
  $('#content').empty();
  const montrajet1DivInvert = $(`
    <div id="contentcerise">
          <div class="blockExpl orange">
            <h2>Mon trajet</h2>
            <form>
    
              <label>Départ</label>
              <input type="text" name="Départ" value="Rue Blanche 38, 1060 Saint-Gilles" /></br>
      
              <label>Arrivée</label>
              <input type="text" name="Arrivée" value="Rue Gaucheret 60, 1030 Schaerbeek" /></br>
              <button class="blancOrange" id="invert">Inverser</button>
            </form>
          </div>
          <div class="blockExpl orange">
            <h2>Véhicules</h2>
            <div class="listePhoto">
              <img src="./assets/images/velo.png">
              <img style="background-color: white;" src="./assets/images/train.png">
              <img src="./assets/images/voiture.png">
            </div>    
          </div>
          <div class="map">
            <img src="./assets/images/trajet2.PNG">
          </div>
          <div class="divButton">
            <button class="orange" id="btnLancerTrajet">Lancer le trajet</button>
          </div>
        </div>
      `);
  $('#content').append(montrajet1DivInvert);
  $('#invert').on('click', montrajet1);
  $('#btnLancerTrajet').on('click', monTrajetInfo);
  randomText();
};
