<template lang="html">
<div>
  <ul>
    <li><router-link :to="{ name: 'home'}">Home</router-link></li>
    <li><router-link :to="{ name: 'orders'}">Orders</router-link></li>
  </ul>

  <ul>
    <li v-if="user">{{ user.displayName }}</li>
    <li v-if="!user"><button @click="login">Login</button></li>
    <li v-if="user"><button @click="logout">Logout</button></li>
  </ul>

</div>
</template>

<script lang="js">

  /// https://lunch-time-xxx.firebaseapp.com

  import { mapGetters, mapMutations } from 'vuex'
  import {loginGoogle, logoutUser} from "../firebase";

  export default  {
    name: 'components-main-menu',
    props: [],
    mounted() {

    },
    data() {
      return {

      }
    },
    methods: {
      ...mapMutations(['setUser']),
      login() {
        loginGoogle()
      },
      logout() {
        logoutUser().then(() => {
          this.setUser(false)
        })
      }
    },
    computed: {
      ...mapGetters(['user'])
    }
}
</script>
