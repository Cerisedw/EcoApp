import $ from 'jquery';
import { randomText } from './randomFact';

export const monTrajetInfo = () => {
  $('#content').empty();
  const montrajetinfoDiv = $(`
    <div id="contentcerise">
        <div class="blockExpl blancOrange">
            <h2>Mon trajet</h2>
        </div>
        <div class="map">
            <img src="./assets/images/trajet1.PNG">
        </div>
          <div class="blockExpl orange">
            <h2>Résumé écologique</h2>
            <p>
                Rejet de CO² : 120 g CO2/km.
            </p> 
          </div>
          
          <div class="blockExpl orange">
                <h2>Trajets Alternatifs</h2>
                <div class="trajetListe">
                <p style="font-weight: bold;" id="1">Trajet 1</p></br>
                <p>Rejet de CO² : 30 g CO2/km.</p>
                <p>Véhicule : Velo</p></br>


                <p style="font-weight: bold;" id="1">Trajet 2</p></br>
                <p>Rejet de CO² : 60 g CO2/km</p>
                <p>Véhicule : Train</p></br>


                <p style="font-weight: bold;" id="1">Trajet 3</p></br>
                <p>Rejet de CO² : 110 g CO2/km.</p>
                <p>Véhicule : Voiture</p></br>


                </div>
            </div>
        </div>
      `);
  $('#content').append(montrajetinfoDiv);
  randomText();
};
