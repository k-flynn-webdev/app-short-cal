<script setup>
import { reactive, computed } from "vue";

import LoginSocialGithub from "@/components/LoginSocialGithub.vue";
import LoginSocialGoogle from "@/components/LoginSocialGoogle.vue";
import { RouterLink, RouterView, useRoute } from "vue-router";

const route = useRoute();
const routeName = computed(() => route?.meta?.title || "login");
</script>

<template>
  <div>
    <div class="cards-demo-container">
      <ACard :title="routeName">
        <div class="grid-row place-items-stretch a-card-body">
          <RouterView />
        </div>

        <div class="grid-row place-items-stretch a-card-body">
          <LoginSocialGithub />
          <LoginSocialGoogle />
        </div>
      </ACard>
    </div>
  </div>
</template>
