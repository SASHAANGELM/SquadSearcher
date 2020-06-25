<template>
  <div>
    <!-- <div>Перед тем как продолжить, введите ваш никнейм в World of Tanks</div>
    <vs-input v-model="username" placeholder="User name">
      <template #icon>
        <i class='fas fa-user'></i>
      </template>
    </vs-input> -->

    <div>
      <div v-if="isUserLogined">
        {{ user.nickname }}
        <vs-button warn @click="logout">Выход</vs-button>
      </div>
      <div v-else>
        Вы не вошли в систему, войдите пожалуйста
        <vs-button @click="login">Вход</vs-button>
      </div>
    </div>

  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import socket from '../services/socket';

export default {
  data() {
    return {
      username: ''
    };
  },
  computed: {
    ...mapGetters(['isUserLogined', 'user'])
  },
  methods: {
    login() {
      this.$store.dispatch('WARGAMMING_LOGIN');

      // const url = `https://api.worldoftanks.ru/wot/auth/login/?application_id=${WG_APP_ID}&nofollow=1&redirect_uri=http://localhost:8080/test-connection`;
      // const res = await axios.get(url);
      // window.open(res.data.data.location,"_self")
      // console.log('res', res.data.data.location);
    },
    logout() {
      this.$store.dispatch('WARGAMMING_LOGOUT');
    },
    ping() {
      socket.emit('test', 123);

      socket.on('recieve', (a) => {
        console.log('recieve', a);
      });
      console.log('Ping');
    }
  }
};
</script>

<style>

</style>
