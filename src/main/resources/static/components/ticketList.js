import ticketItem from './ticketItem.js'
export default {
    components :{
        ticketItem
    }, 
    template: `
    <div id="ticketList">
         <ticketItem v-for="(film, i) of films" :key="film.id" :film="film" :class="'boxItem-' + i"/>
    </div>
    `
,
 computed: {
    films() {
        return this.$store.state.films
        }
    } 
} 