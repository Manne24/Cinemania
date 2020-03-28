export default {
  template: `
    
        <div id="app">
    <header>
          <nav id="meny-rad">
            <router-link to="/">Cinemania</router-link>
            <router-link to="/tickets">Tickets</router-link>
            <router-link to="/films">Films</router-link>
            <router-link to="/news">News</router-link>
            <router-link to="/login">Login</router-link>
          </nav>
          </header>
        <br>
          <main>
            <router-view />
    
          </main>
    
        </div>
      `,
  async created() {
    let films = await fetch("/rest/films");
    films = await films.json();
    this.$store.commit("setFilms", films);

    let users = await fetch("/rest/users");
    users = await users.json();
    this.$store.commit("setUsers", users);

    let seats = await fetch("/rest/seats");
    seats = await seats.json();
    this.$store.commit("setSeats", seats);
  }
};
