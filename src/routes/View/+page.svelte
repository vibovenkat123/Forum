<script lang="ts">
  export let data: {
    all: {
      comments: {
        author: string;
        body: string;
        id: number;
        title: string;
        create: Date;
      }[];
    };
  };
</script>

<main>
  <div class="big-container">
    <div class="container">
      {#each data.all.comments.reverse() as comment}
        <div class="comment">
          <h2>{comment.title}</h2>
          <p>{comment.body}</p>
          <h4>{comment.author}</h4>
          <h4>
            {comment.create.toLocaleDateString("en-us", {
              weekday: "long",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
            {comment.create.toLocaleTimeString("en-us", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </h4>
        </div>
      {/each}
    </div>
  </div>
</main>

<style>
  * {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
  .comment {
    border: 2px solid black;
    border-radius: 2em;
    padding: 0.5em;
    margin-top: 1em;
  }
  .container {
    width: 90%;
  }
  .big-container {
    display: flex;
    justify-content: center;
  }
  @media only screen and (min-width: 800px) {
    .container {
      width: 60%;
    }
  }
  @media only screen and (min-width: 1350px) {
    .container {
      width: 40%;
    }
  }
  @media only screen and (min-width: 1700px) {
    .container {
      width: 30%;
    }
  }
</style>
