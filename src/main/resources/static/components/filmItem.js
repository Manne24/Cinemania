export default {
    template: `
   <ul>
    <li v-for="film of films"
        :key="film.id">
        id: {{ film.id }} <br>
        title: {{ film.title }} <br>
        director: {{ film.director }} <br>
        description: {{ film.description}} <br>
       <!--  <iframe id="ytplayer" type="text/html" width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
        frameborder="0"></iframe> -->
    <!-- <iframe width='640' height='390' src="https://www.youtube.com/watch?v=gCcx85zbxz4"></iframe> -->
        <hr>
    </li>
   </ul>
    `,
    computed: {
        films() {
            return this.$store.state.films
        }
    }
}

/* 

export default {
    template: `
    <div 
    @click="removeCard"
    class="card-done"
    >
    <h2 >{{ doneItem.title }}</h2>
   </div>
    `,
    props: ['doneItem'],
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        onCardClick() {
            this.isOpen = !this.isOpen
            this.$refs.card.style.setProperty('height', this.isOpen ? '100%' : '93px')
        },
        removeCard() {
            this.$store.commit('removeDone', this.doneItem)
            this.$store.commit('appendProject', this.doneItem)
        }
    }
} */