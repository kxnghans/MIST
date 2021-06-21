<template>
  <div>
    <div class="notification noti-list" :class="[showNotification, $store.getters.updateTheme[0]]">
      <!-- Notifications List -->
      <transition-group
        enter-active-class="animate__animated animate__fadeInUp"
      >
        <li class="has-text-danger" v-for="(item, index) in notifications" :key="index">
          <span v-if="item" class="m-1"> {{ item }} </span>
        </li>
      </transition-group>
    </div>
  </div>
</template>

<script>

export default {
  name: 'NotiMsg',
  data() {
    return {
      newItem: "",
      timeout: null,
    }
  },
  computed: {
    notifications() {
      return this.$store.getters.filteredNotis
    },
    showNotification() {
      return (this.$store.getters.filteredNotis.length!==0) ? this.$store.getters.updateTheme[0] : "is-invisible"
    }
  },
  /*created() {
    this.timeout = setTimeout(() => {
    this.$store.getters.notifications==[]
    }, 3000)
  },
  beforeDestroy() {
    this.$store.mutations.removeItem(this.timeout)
  },*/
}
</script>
