<template>
  <div id="app">
    <Sidebar header="RedProxy" :listOfItems="listOfItems" v-on:change-window-event="ToggleWindow"/>
    <component v-if="currentWindow" :is="dynamicComponent"></component>
  </div>
</template>

<script>
  import Sidebar from '../components/Sidebar';

  const DashboardContainer = {
    name: "Dashboard",

    data: ()=>{
      return {
        // list of items in the side bar,
        //      each item should have a window to toggle to when clicked.
        currentWindow: null,
        listOfItems: [
          { id: 0 ,label: "Add new proxy", icon: "add_server", window: "AddProxy" },
        ]
      }
    },

    methods:{

        // action: change currentWidnow value to a given parameter
        ToggleWindow(windowToShow){
          this.currentWindow = windowToShow;
        }
    },

    computed:{

      // actoin: change the componnet to show.
      dynamicComponent() {
        return this.currentWindow;
      }
    },

    components: {
      // local include.
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
    user-select: none;
  }

  #app {
    height: 100vh;
    width: 100vw;
    background-color: #222527;
    display: flex;
  }

</style>
