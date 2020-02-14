import $ from 'jquery';

export const montrajet1 = () => {
  $('#content').empty();
  const montrajet1Div = $(`
    <div id="contentcamille">
                <div><h1>Mon trajet</h1></div>
                <div class="orangeblock fromto">
                    <div class="label"><label for="from">Départ &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name="from"></div>
                    <div class="label"><label for="to">Arrivée &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label><input type="text" name="to"></div>
                </div>
                <div class="orangeblock vehicules">
                    <h2>Véhicules</h2>
                    <div class= "imgcars">
                        <img src="" alt="">
                        <img src="" alt="">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
    `);
  $('#content').append(montrajet1Div);
};
