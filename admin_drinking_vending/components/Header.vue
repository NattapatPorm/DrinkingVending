<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-brand href="#">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/2738/2738730.svg?token=exp=1615352675~hmac=9db2c266656270b6d87f3350d4591e5d"
          class="d-inline-block align-top image"
          alt="drinkin-logo"
        >
        Admin system
      </b-navbar-brand>
      <b-button variant="primary">
        Notifications <b-badge variant="light">{{ NotificationsCounter }}</b-badge>
      </b-button>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      NotificationsCounter: 0,
    }
  }
}
</script>

<style>
  .image {
    width: 30px;
    height: 30px;
  }
</style>
