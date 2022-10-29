<div class="container">
  <div>
    <a href="/">Home</a>
  </div>
  <div>
    <a href="/New">Add</a>
  </div>
  <div>
    <a href="/View">View</a>
  </div>
</div>
<slot />

<style>
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
  .container > * a {
    text-decoration: underline;
    color: black;
  }
</style>
