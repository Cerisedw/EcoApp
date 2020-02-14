import $ from 'jquery';

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
          <div class="blockExpl blancOrange">
            <h2>Résumé écologique</h2>
            <p>
                Rejet de CO² : 120 g CO2/km.
            </p> 
          </div>
          
          <div class="blockExpl blancOrange">
                <h2>Trajets Alternatifs</h2>
                <p>
                    Trajet 1
                </p> 
                <p>
                    Trajet 2
                </p> 
                <p>
                    Trajet 3
                </p> 
            </div>
        </div>
      `);
  $('#content').append(montrajetinfoDiv);
};
