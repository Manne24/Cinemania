export default {
  template: `
    <div class="ticketBox">
        <h4 class="ticketTitle">Select Ticket Amount</h4>
        <form class="ticketForm">
          <div class="inputBox">
            <p>Child <span>65kr each</span> </p>
              <div class="value-button" id="decrease" @click="decreaseValue(1)">-</div>
                <input type="number" v-model="value" id="number" value="0" />
              <div class="value-button" id="increase" @click="increaseValue(1)">+</div>
            </div>
            <div class="inputBox">
              <p>Adult <span>85kr each</span> </p>
                <div class="value-button" id="decrease" @click="decreaseValue(2)">-</div>
                  <input type="number" v-model="value2" id="number" value="0" />
                <div class="value-button" id="increase" @click="increaseValue(2)">+</div>
              </div>
            <div class="inputBox">
              <p>Senior <span>75kr each</span> </p>
                <div class="value-button" id="decrease" @click="decreaseValue(3)">-</div>
                  <input type="number" v-model="value3" id="number" value="0" />
              <div class="value-button" id="increase" @click="increaseValue(3)">+</div>
            </div>           
            <p class="priceText">Total Price: {{price}} kr </p>
          </form>
          <button
            v-if="(value+value2+value3) > 0" 
            @click="goToSeats()" class="goToSeatsButton">Choose Seats</button>
        </div>
        
        `,
  /*     async created() {
      let screening = await fetch('/rest/screenings/' + this.$route.params.id)
      screening = await screening.json()
      console.log(screening)
      this.screening = screening
  }, */
  data() {
    return {
      value: 0,
      value2: 0,
      value3: 0,
      price: 0,
    };
  },
  methods: {
    goToSeats() {
      this.$store.state.totalTickets = this.value + this.value2 + this.value3;
      let counter = 0;
      let ticketChild = this.value;
      let ticketAdult = this.value2;
      let ticketSenior = this.value3;
      while (counter < this.totalTickets) {
        if (ticketChild !== 0) {
          this.$store.state.listTicketTypes.push(1);
          ticketChild -= 1;
        } else if (ticketAdult !== 0) {
          this.$store.state.listTicketTypes.push(2);
          ticketAdult -= 1;
        } else if (ticketSenior !== 0) {
          this.$store.state.listTicketTypes.push(3);
          ticketSenior -= 1;
        }
        counter += 1;
      }
      console.log(this.totalTickets);
      this.$router.push(
        "/bokTickets/ticketChoice/screening/" + this.$route.params.id + "/seats"
      );
    },
    decreaseValue(selectedValue) {
      if (selectedValue === 1 && this.value > 0) {
        (this.value -= 1), (this.price -= 65);
      } else if (selectedValue === 2 && this.value2 > 0) {
        (this.value2 -= 1), (this.price -= 85);
      } else if (selectedValue === 3 && this.value3 > 0) {
        (this.value3 -= 1), (this.price -= 75);
      }
    },

    increaseValue(selectedValue) {
      if (
        this.value + this.value2 + this.value3 <
        this.checkHowManyPlaceAreLeft()
      ) {
        if (selectedValue === 1) {
          (this.value += 1), (this.price += 65);
        } else if (selectedValue === 2) {
          (this.value2 += 1), (this.price += 85);
        } else if (selectedValue === 3) {
          (this.value3 += 1), (this.price += 75);
        }
      }
    },
    checkHowManyPlaceAreLeft() {
      let placeReserved = 0;
      for (let ticket of this.tickets) {
        if (ticket.screening_id == this.$route.params.id) {
          placeReserved += 1;
        }
      }
      return 50 - placeReserved;
    },
  },
  created() {
    this.checkHowManyPlaceAreLeft();
  },
  computed: {
    totalTickets() {
      return this.$store.state.totalTickets;
    },
    listTicketTypes() {
      return this.$store.state.listTicketTypes;
    },
    tickets() {
      return this.$store.state.tickets;
    },
  },
};
