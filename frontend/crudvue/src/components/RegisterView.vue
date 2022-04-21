<template>
  <div class="registerpage">
    <h1>Cadastro de usuário</h1>
    <p>Informe os dados</p>
    <form  id="register">
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
        required
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

    <AlertBox
      v-model="alerts"
      v-if="alerts.length > 0"
      :message="alerts[alerts.length - 1]"
    />
  </div>
</template>

<script>
import AlertBox from "./AlertBox.vue";
import axios from "axios";
import { baseApiUrl } from "@/global";

export default {
  name: "RegisterView",
  components: {
    AlertBox,
  },
  data: function () {
    return {
      alerts: [],
      user: {
        name: "",
        email: "",
        age: "",
      },
    };
  },
  methods: {
    postUser() {
      this.alerts.push('')

      console.log(JSON.stringify(this.user, this.alerts));

      if (!this.user.name || !this.user.email || !this.user.age) {
        return this.alerts.push("Preencha todos os campos!");
      } 
      if (this.user.name.length < 3 || this.user.email.length < 3 ) {
        return this.alerts.push("Nome e email devem ter no mínimo 4 caracteres!");
      }
      if (this.user.email.search('@') === -1) {
        return this.alerts.push("Email inválido: @!");
      }
      if (this.user.email.split(' ').length !== 1) {
        console.log(this.user.email.split(' ').length !== 1)
        return this.alerts.push("Email inválido: não utilize espaçamento");
      }
      const url = `${baseApiUrl}/users`;

      axios.post(url, this.user).then(() => {
        this.alerts.push("Adicionado!")
        this.resetForm();
      }).catch(() => this.alerts.push("Email já cadastrado!"));
    },

    resetForm() {
      this.user = {};
    },
    cleanAlerts(){
      this.alerts = []
    }
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