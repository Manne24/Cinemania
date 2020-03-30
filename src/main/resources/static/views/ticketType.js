export default {
  template: `
    <div class="ticketBox">
        <h4 class="ticketTitle">Select Ticket Amount</h4>
        <form class="ticketForm">
          <div class="inputBox">
            <p>Child</p>
              <div class="value-button" id="decrease" @click="decreaseValue">-</div>
                <input type="number" v-model="value" id="number" value="0" />
              <div class="value-button" id="increase" @click="increaseValue">+</div>
            </div>
            <div class="inputBox">
              <p>Adult</p>
                <div class="value-button" id="decrease" @click="decreaseValue">-</div>
                  <input type="number" v-model="value" id="number" value="0" />
                <div class="value-button" id="increase" @click="increaseValue">+</div>
              </div>
            <div class="inputBox">
              <p>Senior</p>
                <div class="value-button" id="decrease" @click="decreaseValue">-</div>
                  <input type="number" v-model="value" id="number" value="0" />
              <div class="value-button" id="increase" @click="increaseValue">+</div>
            </div>           
        </form>
        <button @click="goToSeats" class="goToSeatsButton">Choose Seats</button>
    </div>
    
    `,
    data() {
     return  {
       value:0
  
     }
    },
  methods: {
    goToSeats() {
      this.$router.push("/seats");
    },
    decreaseValue() {
      console.log("minus");
      this.value -= 1;
    },

    increaseValue() {
      console.log("plus");
      this.value += 1;
    }
  }
};
