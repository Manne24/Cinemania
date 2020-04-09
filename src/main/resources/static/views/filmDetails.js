export default {
  template: `
     <div class="film-details-page">
        <h1>{{ film.title }}</h1>
        <section class="iframe-container">
        <iframe :src="film.trailer" frameborder="0" allowtransparency="true" ></iframe>
        </section>
        <section class="details">
        <p><b>Title:</b> {{ film.title }}</p>
        <p><b>Director:</b> {{ film.director }}</p>
        <p><b>Description:</b> {{ film.description }} </p>
        <p><b>Language:</b> {{film.language }}</p>
        <p><b>Age:</b> {{film.rated }}</p>
        <p><b>Year of production:</b> {{film.year}}</p>
        <p><b>Genre:</b> {{film.genre}}</p>
        <p><b>Runtime:</b> {{film.runtime}}</p>
        <button class="button-buy-ticket" @click="goToTickets(film.id)" >Buy ticket</button>
        </section><br>
        </div>  
  
    `,
  data() {
    return {
      film: {},
    };
  },
  methods: {
    goToTickets(id) {
      this.$router.push("/bokTickets/");
      console.log(id);
    },
  },
  async created() {
    let film = await fetch("/rest/films/" + this.$route.params.id);
    film = await film.json();
    console.log(film);
    this.film = film;
  },
};
