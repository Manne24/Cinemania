
export default {
    template: `
        <select v-model="selectedDate" @change="onChange">
            <option value="">Show all films</option>
            <option 
                v-for="date of screenings" :value="date">
                {{ date }}
            </option>
        </select>

    `,

    data(){
        return {
            selectedDate: '',
            }
        },

    computed: {
        screenings() {
            let dates = this.$store.state.screenings.map(screening => screening.date)
          return new Set([...dates])
        },
        films() {
            return this.$store.state.films
        },
        dagensFilms() {
            return this.$store.state.screenings.filter((screening) => screening.date === this.selectedDate)
        },
       },

    methods:{
        onChange() {
            this.$emit('selectedDate', this.selectedDate)
        }
    }
}