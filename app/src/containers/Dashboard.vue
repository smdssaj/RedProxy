<template>
  <div id="app">
    <Sidebar header="RedProxy" :listOfItems="listOfItems"/>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar';

  const DashboardContainer = {
    name: "Dashboard",

    data: ()=> {
      return {
        listOfItems: [
          { id: 0 ,label: "Add new proxy", icon: "add_server" },
        ]
      }
    },

    components: {
      Sidebar,
    }

  }
  export default DashboardContainer;
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

  #app {
    height: 100vh;
    width: 100vw;
    background-color: #222527;
    display: flex;
  }

</style>
