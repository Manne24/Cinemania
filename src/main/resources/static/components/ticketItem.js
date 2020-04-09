// test
export default {
  template: `
    <div class="film-box">
        <div class="screen-box" @click="onBoxClick"><img :src="film.image" alt="film image" class="ticket-movie-poster"><h5 class="ticket-movie-title">{{film.title}}</h5></div>
         <div class="screencontent" ref="screencontent">
                 <div class="screening"
                    v-for="screening of screenings"
                    v-if="screening.film_id === film.film_id"
                        :key="screening.id"
                        @click="goToScreeningID(screening.screening_id)"
                        :screenings="screenings">
                        <p class="screen-date" >{{screening.date}}</p>
                        <p class="screen-time">Start Time: {{screening.start_time}}</p>
                        <p class="screen-salon">Salon {{screening.salon_id}}</p>
                       <p class="screen-endtime">End Time: {{screening.end_time}}</p>
                       <p class="screen-ticket-left">Tickets Left: </p>
                    </div>
                </div>
            </div> 
    </div>
    `,
  props: ["film"],
  computed: {
    screenings() {
      return this.$store.state.screenings;
    },
    user() {
      return this.$store.state.user;
    },
  },
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    goToScreeningID(screeningID) {
      if (this.user === null) {
        this.$router.push("/login");
      } else {
        this.$router.push("/bokTickets/ticketChoice/screening/" + screeningID);
      }
    },
    goToTicketChoice() {
      this.$router.push("/ticketChoice");
    },
    onBoxClick() {
      this.isOpen = !this.isOpen;
      this.$refs.screencontent.style.setProperty(
        "display",
        this.isOpen ? "block" : "none"
      );
    },
  },
};
