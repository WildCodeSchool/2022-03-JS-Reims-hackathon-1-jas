export default function Connect() {
  return (
    <>
      <form>
        Email : <input id="email" name="email" type="email" />
        Mot de passe :{" "}
        <input type="password" id="pass" name="password" required />
      </form>
      <button type="button">Se connecter</button>
    </>
  );
}
