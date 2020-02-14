import $ from 'jquery';
import { creerTrajet } from './creertrajet';


export const signIn = () => {
  $('#content').empty();
  const contentSignup = $(`
    <div id="contentcerise">
  
    <div class="blockExpl vert">
      <h2>Sign In</h2>
  <form>
 
          <label>Email</label>
          <input type="text" name="Email" value ="pikachu@Mike.com" /></br>
  
          <label>Mot de passe</label>
          <input type="password" name="Mdp" /></br>
  
        <button  class="blancVert" id="btnSignIn">Se Connecter</button>
        </form>
      </div>
      </div>
    `);
  $('#content').append(contentSignup);
  $('#btnSignIn').on('click', creerTrajet);
};

export const signUp = () => {
  $('#content').empty();
  const contentSignup = $(`
    <div id="contentcerise">
  
    <div class="blockExpl vert">
      <h2>Sign Up</h2>
  <form>
          <label>Pseudo</label>
          <input type="text" name="Pseudo" value="Pikachu" /></br>
  
          <label>Email</label>
          <input type="text" name="Email" value ="pikachu@Mike.com" /></br>
  
          <label>Mot de passe</label>
          <input type="password" name="Mdp" /></br>
  
        <button class="blancVert" id="btnSignUp">Enregistrer</button>
        </form>
      </div>
      </div>
    `);

  $('#content').append(contentSignup);
  $('#btnSignUp').on('click', signIn);
};
