// test
export default {
  template: `
    <div class="film-box">
        <button class="screen-box" @click="onBoxClick">{{film.title}}</button>
         <div class="screencontent" ref="screencontent">
                 <p class="screening"
                    v-for="screening of screenings"
                    v-if="screening.film_id === film.film_id"
                        :key="screening.id"
                        @click="goToScreeningID(screening.screening_id)"
                        :screenings="screenings">
                        Date: {{screening.date}}<br>
                        Start Time: {{screening.start_time}}<br>
                        End Time: {{screening.end_time}}<br>
                        Salon: #{{screening.salon_id}}
                    </p>
                </div>
                <button @click="goToTicketChoice">buy ticket</button>
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
