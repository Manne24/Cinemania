
var player;

export default {
    template: `
     <div>
     <h1>{{film.title}}</h1>
     <iframe width="640" height="360" :src="film.trailer" frameborder="0"></iframe>
    <section>
       <!--  <img :src="film.image" alt="film image"><br> -->
        title: {{ film.title }} <br>
        director: {{ film.director }} <br>
        description: {{ film.description}} <br>
        <button>Buy ticket</button>
        </section>
   </div>
    `,
    data() {
        return {
            film: {
                title: '',
                image: '',
                director: '',
                description: '',
                trailer: ''
            },
        }
    },
    async created() {

        let film = await fetch('/rest/films/' + this.$route.params.id)
        film = await film.json()

        console.log(film)

        this.film = film
    },
    methods: {
        
            // sets the size of the player to 0
            // because we don't want to watch the videos,
            // only to trigger music playback
            player = new YT.Player('yt-player', {
                height: '800',
                width: '1200',
                events: {
                    'onStateChange': onPlayerStateChange
                }
            })
        }
    } 
}
/* player.loadVideoById(album[songIndex].ytId) */