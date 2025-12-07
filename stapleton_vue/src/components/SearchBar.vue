<template>
  <input
    type="text"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    placeholder="Search movies..."
    class="search"
  />
</template>

<script>
export default {
  props: ["modelValue"]
};
</script>

<style>
.search {
  width: 100%;
  padding: 10px;
  margin: 20px 0;
  border: none;
  border-radius: 5px;

  background-color: #7B9E87;
  color: black;
  font-size: 1rem;
}

.search::placeholder {
  color: black;
}
</style>
