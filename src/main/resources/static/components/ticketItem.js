 export default {
    template: `
    <div class="film-box">
        <h1>{{film.title}}</h1>
        <div id="screeningoptions" ref="screeningoptions">
            <select>
                 <option v-for="screening of screenings" 
                        :key="screening.id">{{screening.date}}<br>
                        {{screening.time}}
                    </option>
                </select>
                <button @click="goToBooking">buy ticket</button>
        </div>
    </div>
    `,
    props: ['film'],
    computed: {
        screenings() {
            return this.$store.state.screenings
        }
    },
    data() {
        return {
            isOpen:false
        }
    },
    methods: {
        goToBooking() {
            this.$router.push('/booking/')
        }
/*         
                 @click="onBoxClick"
            onBoxClick() {
            this.isOpen = !this.isOpen;
             this.$refs.screeningoptions.style.setProperty('display', this.isOpen ? "initial": "none " )
        } */
    }
} 
