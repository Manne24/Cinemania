import historyItemFilms from './historyItemFilms.js'

export default {
  components: {
    historyItemFilms
  },
  template: `
    <div>
      <div>Ticket id: {{ ticket.ticket_id }} <br/>
        <historyItemFilms v-for="(screening, i) of screenings"
            :key="screening.screening_id"
            :screening="screening"/>
            <br>
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
