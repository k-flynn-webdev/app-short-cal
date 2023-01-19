<script setup>
import LoginLocal from "@/components/LoginLocal.vue";
import LoginSocialGithub from "@/components/LoginSocialGithub.vue";
import LoginSocialGoogle from "@/components/LoginSocialGoogle.vue";
</script>

<template>
  <div>
    <div class="cards-demo-container">
      <ACard title="Login">
        <div class="grid-row place-items-stretch a-card-body">
          <LoginLocal />
        </div>

        <div class="grid-row place-items-stretch a-card-body">
          <LoginSocialGithub />
          <LoginSocialGoogle />
        </div>
      </ACard>
    </div>
  </div>
</template>
