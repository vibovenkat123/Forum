<div class="container">
  <form method="POST" class="form">
    <input type="text" id="title" name="title" placeholder="title" />
    <textarea name="body" id="body" cols="30" rows="10" placeholder="body" />
    <input type="text" id="author" name="author" placeholder="author" />
    <input type="submit" class="submit" />
  </form>
</div>

<style>
  .form {
    display: flex;
    flex-direction: column;
    width: 30%;
    border: 2px solid black;
    border-radius: 1em;
    padding: 1em;
  }
  .form > * {
    margin-bottom: 1em;
    padding: 0.5em;
    border-radius: 15px;
    border: 2px solid black;
    font-size: 1.3em;
  }
  .form .submit {
    background-color: limegreen;
  }
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
