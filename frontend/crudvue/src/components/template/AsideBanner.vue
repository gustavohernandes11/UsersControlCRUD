<template>
  <div class="asidebanner">
    <span>
      <img src="@/assets/logo.png" alt="icone" />
      <p>Vue.js</p>
      <strong>
        Controle de usuários
      </strong>
    </span>
    <span>
        <router-link to="/"><button>Cadastro</button></router-link>
        <router-link to="/users"><button>Usuários</button></router-link>
    </span>
  </div>
</template>

<script>
export default {

};
</script>

<style>
.asidebanner {
  grid-area: asidebanner;
  background-color: rgb(206, 206, 206);
  padding: 30px;
  height: 100vh;
  /* width: 25%; */

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  /* position: fixed; */

}



.asidebanner button {
    height: 35px;
    margin: 5px;
    border: none;
    background-color: rgb(75, 136, 111);
    color: white;
}
a a:hover {
  color: white;
  text-decoration: none;
  
}

.asidebanner img {
  width: 50px;
  height: 50px;
}

.asidebanner img:hover {
  transform: scale(1.1);
}
.asidebanner p {
  margin-top: 35px;
}

</style>