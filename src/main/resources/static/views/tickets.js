export default {
    template:`
    <div>
        <h2 class="title">Biljetter</h2>
        <form @submit.prevent>
            <h4>Book Movie Ticket</h4>
            <label for="movie">Choose a Movie:</label>
                <select id="movies">
                    <option>----Select Movie---
                </option>
                    <option v-for="film of films" 
                    :key="film.id" :value="film.id">{{ film.title}}
                </option>
                </select>
                <button>Book Movie</button>
        </form>
    </div>
    `,
        computed: {
            films() {
                return this.$store.state.films
            }
        }          
}