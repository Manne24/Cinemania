
export default {
    template: `
    <div>
 <!-- <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe> -->
    <h1>Films</h1>
        <ul>
        <li v-for="film of films" :key="film.id">
        <img :src="film.image" alt="film image"><br>
        title: {{ film.title }} <br>
        director: {{ film.director }} <br>
        description: {{ film.description}} <br>
        <button @click="showTrailer">Trailer</button>
        <hr>
        </li>
    </ul>
   </div>
    `,
    computed: {
        films() {
            return this.$store.state.films
        }
    },
    methods: {
        showTrailer(){
            let trailer = 
            console.log('film.trailer')
        }
    }
}

/* import doneItem from './doneItem.js'

            export default {
                components: {
                    doneItem
                },
                template: `
                <section>
                    <doneItem v-for="(doneItem, i) of done" :key="doneItem.title + i" :doneItem="doneItem" />
                </section>
             
             `,
                computed: {
                    done() {
                        return this.$store.state.done
                    }
                }
            } */
