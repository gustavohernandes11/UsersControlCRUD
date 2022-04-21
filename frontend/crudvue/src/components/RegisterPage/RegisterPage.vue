<template>
  <div class="registerpage">
    <h1>Cadastro de usuário</h1>
    <p>Informe os dados</p>
    <form id="register">
      <input
        v-model="user.name"
        type="text"
        class="jsInputName"
        placeholder="Nome"
        autocomplete="none"
      />
      <input
        v-model="user.email"
        type="email"
        class="jsInputEmail"
        placeholder="Email"
        autocomplete="none"
      />
      <input
        v-model="user.age"
        type="number"
        min="0"
        max="120"
        class="jsInputAge"
        placeholder="Idade"
        autocomplete="none"
      />
      <button type="button" @click="postUser()">Enviar</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "RegisterPage",
  data: function () {
    return {
      user: {
        name: '',
        email: '',
        age: ''
      },
    };
  },
  methods: {
    postUser() {
      console.log(JSON.stringify(this.user));

      const url = `${baseApiUrl}/users`;

      axios.post(url, this.user).then(() => {
      this.resetForm();
      });
    },

    resetForm() {
      this.user = {}
    },
  },
};
</script>

<style>
.registerpage {
  grid-area: registerpage;
  background-color: rgb(18, 88, 65);
  padding: 80px;
  color: rgb(255, 255, 255);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#register input {
  width: 300px;
  height: 36px;
  border-radius: 10px;
  border: none;
  margin-top: 10px;
  background: rgb(243, 243, 243);
  padding: 15px;
}
form input:focus {
  border: none;
}
form button {
  width: 80px;
  height: 40px;
  margin-top: 10px;
  border: none;
  background-color: rgb(243, 243, 243);
}
h1 {
  font-size: 30px;
}
h2 {
  font-size: 18px;
}
</style>