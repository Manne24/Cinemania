export default {
  template: `
    <div class="ticketBox">
        <h4 class="ticketTitle">Select Ticket Amount</h4>
        <form class="ticketForm">
          <div class="inputBox">
            <p>Child</p>
              <div class="value-button" id="decrease" @click="decreaseValue(1)">-</div>
                <input type="number" v-model="value" id="number" value="0" />
              <div class="value-button" id="increase" @click="increaseValue(1)">+</div>
            </div>
            <div class="inputBox">
              <p>Adult</p>
                <div class="value-button" id="decrease" @click="decreaseValue(2)">-</div>
                  <input type="number" v-model="value2" id="number" value="0" />
                <div class="value-button" id="increase" @click="increaseValue(2)">+</div>
              </div>
            <div class="inputBox">
              <p>Senior</p>
                <div class="value-button" id="decrease" @click="decreaseValue(3)">-</div>
                  <input type="number" v-model="value3" id="number" value="0" />
              <div class="value-button" id="increase" @click="increaseValue(3)">+</div>
            </div>           
        </form>
        <button @click="goToSeats" class="goToSeatsButton">Choose Seats</button>
    </div>
    
    `,
  data() {
    return {
      value: 0,
      value2: 0,
      value3: 0
    };
  },
  methods: {
    goToSeats() {
      this.$router.push("/seats");
    },
    decreaseValue(selectedValue) {
      console.log("minus");
      if (selectedValue === 1 && this.value > 0) {
        this.value -= 1;
      } else if (selectedValue === 2 && this.value2 > 0) {
        this.value2 -= 1;
      } else if (selectedValue === 3 && this.value3 > 0) {
        this.value3 -= 1;
      }
    },

    increaseValue(selectedValue) {
      console.log("plus");
      if (selectedValue === 1) {
        this.value += 1;
      } else if (selectedValue === 2) {
        this.value2 += 1;
      } else if (selectedValue === 3) {
        this.value3 += 1;
      }
    }
  }
};
