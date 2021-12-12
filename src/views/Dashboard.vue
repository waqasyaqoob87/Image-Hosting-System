<template>
  <v-app>
    <router-view :key="$route.path" ></router-view>
    <appBar></appBar>
  </v-app>
</template>

<script>
import appBar from "@/components/Dashboard/headerBar.vue";
export default {
  components: { appBar },
};
</script>

<style>
table th + th {
  border-left: 1px solid black;
}
table td + td {
  border-left: 1px solid black;
}
</style>
