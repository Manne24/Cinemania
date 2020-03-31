// test
export default {
  template: `
    <div class="film-box">
        <button class="screen-box" @click="onBoxClick">{{film.title}}</button>
         <div class="screencontent" ref="screencontent">
            <div>
                 <p v-for="screening of screenings"
                    v-if="screening.film_id === film.film_id"
                        :key="screening.id"
                        @click="goToScreeningID(screening.screening_id)"
                        >
                        Date: {{screening.date}}<br>
                        Start Time: {{screening.start_time}}<br>
                        End Time: {{screening.end_time}}<br>
                        Salon: #{{screening.salon_id}}
                    </p>
                </div>
                <button @click="goToTicketType">buy ticket</button>
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
      this.$router.push("/tickettype/screening/" + screeningID);
    },
    goToTicketType() {
      this.$router.push("/tickettype");
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
