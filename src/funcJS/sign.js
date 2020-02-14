import $ from 'jquery';

export const signUp = () => {
  $('#content').empty();
  const contentSignup = $(`
  <div id="contentcerise">

  <div class="blockExpl">
    <h2>Sign Up</h2>
<form>
        <label>Pseudo</label>
        <input type="text" name="Pseudo" /></br>

        <label>Email</label>
        <input type="text" name="Email" /></br>

        <label>Mot de passe</label>
        <input type="password" name="Mdp" /></br>

      <button id="btnSignUp">Enregistrer</button>
      </form>
    </div>
    </div>
  `);

  $('#content').append(contentSignup);
};


export const signIn = () => {
  $('#content').empty();
  const contentSignup = $(`
    <div id="contentcerise">
  
    <div class="blockExpl">
      <h2>Sign In</h2>
  <form>
 
          <label>Email</label>
          <input type="text" name="Email" /></br>
  
          <label>Mot de passe</label>
          <input type="password" name="Mdp" /></br>
  
        <button id="btnSignIn">Se Connecter</button>
        </form>
      </div>
      </div>
    `);

  $('#content').append(contentSignup);
};
