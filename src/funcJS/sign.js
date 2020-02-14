import $ from 'jquery';

export const signUp = () => {
  $('#content').empty();
  const contentSignup = $(`
  <div class="blockExpl">
    <h2>Sign Up</h2>

        <label>Pseudo</label>
        <input type="text" name="Pseudo" /></br>

        <label>Email</label>
        <input type="text" name="Email" /></br>

        <label>Mot de passe</label>
        <input type="password" name="Mdp" /></br>

      <button id="btnEnvoyer">Envoyer</button>
    </div>
  `);

  $('#content').append(contentSignup);
};
