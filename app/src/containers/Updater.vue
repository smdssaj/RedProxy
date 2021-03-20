<template>
  <div id="app">
    <div class="columns_holder">
      <h1 id="app_title">RedProxy</h1>
      <Spinner />
      <p id="update_message">checking for update...</p>
    </div>
  </div>
</template>

<script>
  import Spinner from '../components/Spinner';

  const objUpdaterContainer = {
    name: "Updater",
    components: {
      Spinner
    }
  }
  export default objUpdaterContainer;
</script>

<style >
  html, body, *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    box-sizing: inherit;
    font: 1.3rem Inconsolata, monospace;
    color: #eee;
  }

  body{
    user-select: none;
    -webkit-user-select: none;
    -webkit-app-region: drag;
  }

  #app {
    height: 100vh;
    width: 100vw;
    background-color: #222527;

  }

  #app_title{
    margin: 1rem auto;
  }

  .columns_holder{
    display: flex;
    flex-direction: column;
  }

  .columns_holder > *{
    margin: auto;
  }

  #update_message{
    color: #eee;
    padding: .8rem;
    font-size: .6rem;
  }


</style>
