export default {
    template: `
    <div>
        <div> 
        Ticket id: {{ ticket.ticket_id }} <br/>
                    Booking id: {{ ticket.booking_id }}<br/>
                    Screening id: {{ ticket.screening_id }}<br/>
                   <!--  Seat id: {{ ticket.seat_id.row }}<br/> -->
                    ticket type id: {{ ticket.ticket_type_id }}<br/>
        </div>
       <div v-for="(screening, i) of screenings"
            :key="screening.screening_id"
            :screening="screening">
           Screening id: {{screening.screening_id}}<br>
           Screening start time: {{screening.start_time}}<br>
           Screening end time: {{screening.end_time}}<br>
           Screening date: {{screening.date}}<br>

        </div> 
    </div>
    `,
    props: ['ticket'],
    computed: {
        screenings() {
          return this.$store.state.screenings.filter((screening) => screening.screening_id === this.ticket.screening_id)
        }
      }
}
