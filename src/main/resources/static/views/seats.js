export default {
  template: `
  <div>
    <h2>Seats</h2>
    <div class="salon">
            <div class="seats"
                v-for="seat of seats"
                v-bind:style="[(seat.color === 'none' && seat.color !== 'reserved') ? {backgroundColor: bgColor} : {backgroundColor: bgColorSelected}]"
                :key="seat.number"
                @click="chooseSeat(seat)"
            >
                <p>[ {{ seat.number }} ]</p>
            </div>
    </div>
  </div>
   `,
  data() {
    return {
      bgColor: "#aaa",
      bgColorSelected: "#00ff00",
      bgColorReserved: "#ff0000"
    };
  },
  methods: {
    chooseSeat(seat) {
      if (seat.color === "none") {
        seat.color = "selected";
      } else if (seat.color === "selected") {
        seat.color = "none";
      }
    }
  },
  computed: {
    seats() {
      return this.$store.state.seats;
    }
  }
};
