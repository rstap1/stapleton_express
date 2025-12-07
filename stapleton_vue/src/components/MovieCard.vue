<template>
  <div class="card">
    <span class="title">{{ movie.title }}</span>

    <span class="info"><strong>Genre:</strong> {{ movie.genre.join(", ") }}</span>
    <span class="info"><strong>Year:</strong> {{ movie.releaseYear }}</span>
    <span class="info"><strong>Rating:</strong> {{ movie.rating }}</span>
  </div>
</template>

<script>
export default {
  props: ["movie"]
};
</script>

<style>
.card {
  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: #D2D0BA;
  padding: 12px;
  border-radius: 6px;
  width: 100%;
  box-sizing: border-box;

  color: black;
}

.title {
  font-weight: bold;
  font-size: 1.1rem;
  margin-right: 20px;
}

.info {
  margin-left: 15px;
}
</style>
