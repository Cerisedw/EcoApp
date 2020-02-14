import $ from 'jquery';
import { signUp, signIn } from './sign';
import { randomText } from './randomFact';

export const homeNoSign = () => {
  $('.screen').empty();
  const homeContent = $(`
  <div id="navbar">
  <div class="logo">
    <img src="./assets/images/leaf.png">
  </div>
  <div id="randomText"></div>
  <div class="imgProfil">
  </div>
</div>
<div id="content">
  <div id="contentcerise">
    <div class="blockExpl vert">
    <h1>EcoAppli</h1>
    <p>Description de l'application. 
      Ce qui permettra à l'utilisateur d'avoir une idée claire du but premier de l'application.
      EcoAppli est une application qui permet de mieux gérer vos déplacements dans la vie de tous les jours.
      Elle vous permet d'avoir des conseils sur des trajets alternatifs afin de réduire votre impact écologique.
    </p>
  </div>
  <div class="divButton">
    <button class="vert" id="signin">Sign In</button>
    <button class="vert" id="signup">Sign Up</button>
  </div>
  <div class="blockExpl vert">
    <h2>Nos Partenaires</h2>
    <div class="listePhoto">
      <img src="./assets/images/pikadab.png">
      <img src="./assets/images/hp.png">
      <img src="./assets/images/pikadab.png">
    </div>
  </div>
  </div>
</div>
    `);

  $('.screen').append(homeContent);
  $('.logo').on('click', homeNoSign);
  $('#signup').on('click', signUp);
  $('#signin').on('click', signIn);
  randomText();
};
