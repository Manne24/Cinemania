export default {
    template: `
        <div>
        <div class="salon">
            <div class="seats"
                v-for="seat of seats"
                v-bind:style="[(seat.status === 'available' && seat.status !== 'reserved') ? {backgroundColor: bgColor} : {backgroundColor: bgColorSelected}]"
                :key="seat.name.id"
                @click="chooseSeat(seat)"
            >
                <p>{{ seat.row }}-{{ seat.name }}</p>
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
        if (seat.status === "available") {
          seat.status = "selected";
        } else if (seat.status === "selected") {
          seat.status = "available";
        }
      }
    },
    computed: {
      seats() {
        return this.$store.state.seats;
      }
    }
}