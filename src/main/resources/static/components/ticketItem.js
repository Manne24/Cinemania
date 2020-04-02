// test
export default {
  template: `
    <div class="film-box">
        <button class="screen-box" @click="onBoxClick">{{film.title}}</button>
         <div class="screencontent" ref="screencontent">
                 <div class="screening"
                    v-for="screening of screenings"
                    v-if="screening.film_id === film.film_id"
                        :key="screening.id"
                        @click="goToScreeningID(screening.screening_id)"
                        :screenings="screenings">
                        <p class="screen-date" >Date: {{screening.date}}</p>
                        <p class="screen-time">Start Time: {{screening.start_time}}</p>
                       <p class="screen-endtime">End Time: {{screening.end_time}}</p>
                       <p class="screen-salon">Salon: #{{screening.salon_id}}</p>
                    </div>
                </div>
            </div> 
    </div>
    `,
  props: ["film"],
  computed: {
    screenings() {
      return this.$store.state.screenings;
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    goToScreeningID(screeningID) {
      this.$router.push("/tickets/ticketChoice/screening/" + screeningID);
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
    }
  }
};
