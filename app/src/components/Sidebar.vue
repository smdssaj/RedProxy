<template>
  <div class="sidebar">

    <!-- print the header :) -->
    <header>{{ header }}</header>

    <!-- a navigtor componetn with listener to windown change event,      -->
    <!--    when listener is hit bass the event to ToggleWindow function  -->
    <NavigatorList :items="listOfItems" v-on:change-window-event="ToggleWindow"/>
  </div>
</template>

<script>
  import NavigatorList from "./NavigatorList";
  
  const Sidebar = {
      name: "Sidebar",
      
      props: {
        // this prop is the header of the component.
        header: String,
        // this prop contain the list of items, 
        //        this component only bass it to the NavigatorList componenet
        listOfItems: Array 
      },

      components: {
        // local include
        NavigatorList,
      },

      methods: {
        // action : tell the parent conponent about the clicked item.
        ToggleWindow(windowToShow){
          this.$emit('change-window-event', windowToShow)
        }
      }
  }

  export default Sidebar;
</script>

<style>
  .sidebar {
    background-color:  #2e3133;
    width: 15rem;
  }

  .sidebar > header {
    padding: 1rem 2rem 1rem .5rem;
    color: #ddd;

  }
</style>