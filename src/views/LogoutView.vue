<template>
  <div>LOGOUT PAGE</div>
</template>
<script>
export default {
  name: "LogoutView",
  created() {
    this.$store.dispatch("logout");
  },
};
</script>
