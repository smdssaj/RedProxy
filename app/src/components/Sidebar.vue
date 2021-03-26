<template>
  <div class="sidebar">
    <header>{{ header }}</header>
    <NavigatorList :listItems="listOfItems" />
  </div>
</template>

<script>
  import { NavigatorList } from "./NavigatorList";
  
  const Sidebar = {
      name: "Sidebar",
      
      props: {
        header: String,
        listOfItems: Array
      },

      components: {
        NavigatorList,
      }
  }

  export default Sidebar;
</script>

<style>
  .sidebar {
    background-color:  #2e3133;
    width: 20rem;
  }

  .sidebar > header {
    /* background-color: red; */
    padding: 2rem 2rem 1rem 2rem;
    color: #ddd;

  }
</style>