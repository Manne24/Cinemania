// import ticketList from '../components/ticketList.js'
export default {
/*     components: {
        ticketList
    }, */
    template:`
    <div>
        <h2 class="title">Biljetter</h2>
        <!-- <ticketList/> -->
        <form @submit.prevent>
            <h4>Book Movie Ticket</h4>
            <div v-for="( film, i ) of films" :key="film.id" class="'item-' + i">
                {{film.title}}
                <select>
                    <option v-for="screening of screenings" 
                    :key="screening.id">{{screening.date}}
                    {{screening.time}}
                </option>
            </select>
            </div>
        </form>
    </div>
    `,
        computed: {
            films() {
                return this.$store.state.films
            },
            screenings() {
                return this.$store.state.screenings
            }
        }          
}