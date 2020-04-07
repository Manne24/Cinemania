
export default {
    template: `
        <div class="sort-films-date">
            <label>Sort by date : </label>
            <select v-model="selectedDate" @change="onChange">
                <option value="">Select a date</option>
                <option 
                    v-for="date of screenings" :value="date">
                    {{ date }}
                </option>
            </select>
        </div>
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