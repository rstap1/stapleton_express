<template>
  <div id="app">
    <h1>Entertainment Dictionary</h1>

    <input
      type="text"
      v-model="searchQuery"
      placeholder="Search for a title..."
      class="search-bar"
    />

    <div class="movie-list">
      <div v-for="movie in filteredMovies" :key="movie._id" class="movie-card">
        <h2>{{ movie.title }}</h2>
        <p><strong>Genre:</strong> {{ movie.genre.join(", ") }}</p>
        <p><strong>Year:</strong> {{ movie.releaseYear }}</p>
        <p><strong>Rating:</strong> {{ movie.rating }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      movies: [],
      searchQuery: "",
    };
  },

  computed: {
    filteredMovies() {
      return this.movies.filter((movie) =>
        movie.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  },

  methods: {
    async loadMovies() {
      try {
        const response = await fetch("https://stapleton-express.onrender.com/api");
        const data = await response.json();
        this.movies = data;
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    }
  },

  mounted() {
    this.loadMovies();
  }
};
</script>

<style>
#app {
  background-color: #5E747F;
  min-height: 100vh;
  padding: 20px;
  color: black;
  font-family: Arial, sans-serif;
}

.search-bar {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  background-color: #7B9E87;
  border: none;
  font-size: 16px;
}

.movie-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.movie-card {
  background-color: #D2D0BA;
  padding: 15px;
  border-radius: 8px;
}
</style>
