 export default {
    template: `
    <div class="film-box">
        <button class="screen-box" @click="onBoxClick">{{film.title}}</button>
         <div class="screencontent" ref="screencontent">
            <div>
                 <p v-for="screening of screenings" 
                        :key="screening.id">{{screening.date}}<br>
                        {{screening.time}}
                    </p>
                </div>
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
            this.$router.push('/booking')
        },
            onBoxClick() {
            this.isOpen = !this.isOpen;
            this.$refs.screencontent.style.setProperty('display', this.isOpen ? "block": "none" )
        } 
    }
} 
