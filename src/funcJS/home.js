import $ from 'jquery';
import { signUp, signIn } from './sign';

export const home = () => {
  $('#content').empty();
  const homeContent = $(`
  <div id="contentcerise">
    <div class="blockExpl">
    <h1>EcoAppli</h1>
    <p>Description de l'application. 
      Ce qui permettra à l'utilisateur d'avoir une idée claire du but premier de l'application.
      EcoAppli est une application qui permet de mieux gérer vos déplacements dans la vie de tous les jours.
      Elle vous permet d'avoir des conseils sur des trajets alternatifs afin de réduire votre impact écologique.
    </p>
  </div>
  <div class="divButton">
    <button id="signin">Sign In</button>
    <button id="signup">Sign Up</button>
  </div>
  <div class="blockExpl">
    <h2>Nos Partenaires</h2>
    <div class="listePhoto">
      <img src="./assets/images/leaf.png">
      <img src="./assets/images/leaf.png">
      <img src="./assets/images/leaf.png">
    </div>
  </div>
  </div>

    `);

  $('#content').append(homeContent);
  $('#signup').on('click', signUp);
  $('#signin').on('click', signIn);
};
