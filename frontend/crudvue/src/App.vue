<template>
  <div class="app">
    <AsideBanner />
    <CrudContent />
  </div>
</template>
<script>
import CrudContent from "./components/template/CrudContent";
import AsideBanner from "./components/template/AsideBanner";

export default {
  components: {
    CrudContent,
    AsideBanner,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
}
.app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow-x: hidden;

  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr;

  grid-template-areas: "asidebanner crudcontent";
}

@media (max-width: 750px) {
  .app {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;

    grid-template-areas:
      "asidebanner"
      "crudcontent";
  }

  .asidebanner {
    padding: 10px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    grid-area: asidebanner;
    background-color: rgb(243, 243, 243);
    padding: 10px;
    height: 100%;
  }

  .asidebanner span, .asidebanner p, .asidebanner strong {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-left: 10px
  }

  .asidebanner img {
    width: 30px;
    height: 30px;
  }


.asidebanner img:hover {
  transform: scale(1.05);
}
.asidebanner p {
  display: none;
}
}

html,
body,
.app {
  box-sizing: border-box;
  height: 100vh;
  width: 100vw;
  margin: 0px;
  overflow-x: hidden;
}
</style>
