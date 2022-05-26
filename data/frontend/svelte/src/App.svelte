<script>
  import { onMount } from "svelte";
  export let name;
  let message;

  onMount(async () => {
    fetch("http://localhost:5000/api")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.message);
        message = data.message;
      })
      .catch((error) => {
        console.log(error);
        message = "this data is from frontend";
      });
  });
</script>

<main>
  <h1>Hello {name}!</h1>
  <h2>{message}</h2>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
