import { ref } from "vue";

export default function () {
  const isError = ref("");
  const hasError = ref(false);

  const clearError = () => {
    isError.value = "";
    hasError.value = false;
  };

  const setError = (error) => {
    isError.value = error.message;
    hasError.value = true;
  };

  return {
    isError,
    hasError,
    clearError,
    setError,
  };
}
