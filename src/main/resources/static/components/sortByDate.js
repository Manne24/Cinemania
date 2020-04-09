
export default {
    template: `
        <div class="sort-films-date">
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
            return new Set([...dates])          //skapa en list förutom duplicated date
        },
        films() {
            return this.$store.state.films
        }
       },

    methods:{
        onChange() {
            this.$emit('selectedDate', this.selectedDate)
        }
    }
}