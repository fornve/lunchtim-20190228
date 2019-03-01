<template lang="html">

  <section class="components-orders">
    <h1>components-orders Component</h1>

    <ul>
      <li v-for="order in orders" :key="order.id">
        {{ order.metadata.createdBy.displayName }}
        {{ order.metadata.name }}
      </li>
    </ul>

    <div v-if="user">
      <input v-model="name" placeholder="Order name" />
      <button @click="placeOrder">Place order</button>
    </div>

  </section>


</template>

<script lang="js">

  /// https://lunch-time-xxx.firebaseapp.com

  import { mapGetters, mapMutations } from 'vuex'
  import {ordersCollection} from "../firebase";
  import uuid from 'uuid'

  export default  {
    name: 'components-orders',
    props: [],
    mounted() {
      ordersCollection
        .orderBy('createdAt', 'desc')
        .onSnapshot(snap => {
          snap.docChanges().forEach(change => {
            let order = {
              id: change.doc.id,
              metadata: change.doc.data()
            }

            this.addOrder(order)
          })
        })
    },
    data() {
      return {
        name: ''
      }
    },
    methods: {
      ...mapMutations(['addOrder']),
      placeOrder() {

          ordersCollection.doc(uuid()).set({
            createdAt: new Date(),
            createdBy: {
              displayName: this.user.displayName
            },
            name: this.name
          })
        }

    },
    computed: {
      ...mapGetters(['orders', 'user'])
    }
}
</script>
