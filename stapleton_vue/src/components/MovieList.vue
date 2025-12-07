<template>
  <div>
    <p v-if="movies.length === 0">No movies found.</p>

    <div class="list">
      <MovieCard
        v-for="movie in movies"
        :key="movie._id"
        :movie="movie"
      />
    </div>
  </div>
</template>

<script>
import MovieCard from "./MovieCard.vue";

export default {
  props: ["movies"],
  components: { MovieCard }
};
</script>

<style>
.list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}
</style>
