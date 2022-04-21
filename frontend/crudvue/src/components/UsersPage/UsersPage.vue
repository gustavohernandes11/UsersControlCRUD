<template>
  <div class="userspage">
    <span>
      <h1>Banco de usuários</h1>
    </span>
       <p>Quantidade: {{countUsers}}</p>
    <div class="editbox">
      <span>
      </span>

      <form v-if="onEditMode" id="editform">
        <input
          type="text"
          class="nameEdit"
          v-model="selectedUser.name"
          placeholder="Nome"
          autocomplete="none"
        />
        <input
          type="email"
          v-model="selectedUser.email"
          class="emailEdit"
          placeholder="Email"
          autocomplete="none"
        />
        <input
          type="text"
          min="0"
          max="120"
          v-model="selectedUser.age"
          class="ageEdit"
          placeholder="Idade"
          autocomplete="none"
        />
        <button type="button" @click="updateUser(selectedUser.id)">Enviar</button>
        <button type="button" @click="reset()">Cancelar</button>

      </form>
      <hr />
    </div>
    <table v-if="countUsers" striped hover>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Idade</th>
        <th>Ações</th>
      </tr>
      <tr v-for="(user, index) in users" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.age }}</td>
        <td class="actionlabel">
          <button id="editbutton" @click="getUser(user.id)">editar</button>
          <button id="deletebutton" @click="deleteUser(user.id)">
            excluir
          </button>
        </td>
      </tr>
    </table>
    <p v-if="!countUsers">Nenhum usuário cadastrado</p>
  </div>
</template>

<script>
import { baseApiUrl } from "../../global";
import axios from "axios";

export default {
  components: {},
  data: function () {
    return {
      countUsers: '',
      onEditMode: false,
      users: [],
      selectedUser: {
        id: "",
        name: "",
        email: "",
        age: "",
      },
    };
  },

  methods: {
    getUser(id) {
      this.onEditMode = true
      const url = `${baseApiUrl}/users/${id}`;
      console.log(id);
      axios.get(url).then((res) => {
        this.selectedUser = res.data;
        console.log(this.selectedUser);
      });
    },

    updateUser(id) {
      console.log(id)
      if (!this.selectedUser.id){
        console.log('Usuário não encontrado!')
        this.reset()
        return
      }
      const url = `${baseApiUrl}/users/${id}`;

      axios.put(url, this.selectedUser).then(() => {
        console.log('Alterado com sucesso')
        this.reset()
        return
        }).catch(e => alert(e))
    },

    loadUsers() {
      const url = `${baseApiUrl}/users`;
      axios.get(url).then((res) => {
        this.users = res.data;
        this.countUsers = res.data.length;
        console.log(this.countUsers)
      });
    },
     deleteUser(id) {
      const url = `${baseApiUrl}/users/${id}`;
    if (id === this.selectedUser.id){
      this.reset()
    }
      axios.delete(url).then(() => {
                this.loadUsers()

        console.log("Deletado");
      });

    },

    reset() {
      this.selectedUser = {};
        this.loadUsers()
        this.onEditMode = false

    },
  },
  mounted() {
    this.loadUsers();
  },

};
</script>

<style>
.userspage {
  background-color: rgb(18, 88, 65);
  padding: 50px;
  color: rgb(255, 255, 255);
  min-height: 100%;

  display: flex;
  align-items: flex-start;
  flex-direction: column;
}
.userspage table {
  width: 100%;
  text-align: left;
}
.userspage table tr:nth-child(even) {
  background-color: #49494941;
}
.userspage table td:last-child {
  width: 200px
}
.userspage table tr {
  border-radius: 10px;
    background-color: #49494973;
  border: 1px solid rgba(204, 204, 204, 0.664);
}
.userspage table td,
.userspage table th {
  padding: 10px 15px;
}
.userspage > span {
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
}


.editbox {
  width: 100%;
  display: flex;
  flex-direction: column;
}

.editbox form {
  flex-wrap: wrap;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}
.editbox button,
.actionlabel button {
  margin: 0px;
  height: 36px;
  flex-grow: 1;
  margin: 5px;

  height: 36px;
  border-radius: 10px;
  border: none;
}
.editbox input {
  background-color: rgb(243, 243, 243);
  margin: 5px;

  height: 36px;
  border-radius: 10px;
  border: none;
  flex-grow: 2;
  padding: 15px;
}
</style>