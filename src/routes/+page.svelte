<script lang="ts">
  export let data: {
    all: {
      comments: {
        author: string;
        body: string;
        id: number;
        title: string;
      }[];
    };
  };
  console.log(data);
  console.log(data.all.comments);
</script>

<main>
  <a href="/New">Add Post</a>
  <div>
    {#each data.all.comments as comment}
      <div class="comment">
        <h2>{comment.title}</h2>
        <p>{comment.body}</p>
        <h4>{comment.author}</h4>
      </div>
    {/each}
  </div>
</main>

<style>
  .comment {
    border: 2px solid black;
    border-radius: 2em;
    padding: 0.5em;
    margin-top: 1em;
  }
</style>
