<script setup>
import { ref, computed } from "vue";
import { RouterLink } from "vue-router";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";
import LogOut from "@/components/LogOut.vue";

const showMenu = ref(false);
const { isLoggedIn } = storeToRefs(useUserStore());
const avatarColor = computed(() => {
  return isLoggedIn ? "#6B7280" : "primary";
});
</script>

<template>
  <div>
    <div class="menu-parent">
      <x-avatar
        :color="avatarColor"
        :outlined="isLoggedIn"
        rounded
        @click="showMenu = !showMenu"
      />

      <div :class="{ display: showMenu }" class="menu">
        <LogOut v-if="isLoggedIn" />
        <x-button v-else to="/login">Login</x-button>
      </div>
    </div>
  </div>
</template>
