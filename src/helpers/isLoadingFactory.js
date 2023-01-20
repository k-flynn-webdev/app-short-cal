import { ref } from "vue";

export default function () {
  const isLoading = ref(false);

  const clearLoading = () => {
    isLoading.value = false;
  };
  const setLoading = () => {
    isLoading.value = true;
  };

  return {
    isLoading,
    clearLoading,
    setLoading,
  };
}
