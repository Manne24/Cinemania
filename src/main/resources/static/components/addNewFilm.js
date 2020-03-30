export default {
    template: `
        <div> 
        <form @submit.prevent="addNewFilm">
        <label>ADD FILM</label><br>
        <input v-model="titleAdd" type="text" placeholder="Enter title of film"><br>
        <button type="submit">ADD</button>
        </form>
        <p style="color:red">{{ filmNotFound }}</p><br><br><br>
        
        <form @submit.prevent="deleteFilm">
        <label>REMOVE FILM</label><br>
        <input v-model="titleDelete" type="text" placeholder="Enter title of film"><br>
        <button type="submit">DELETE</button>
        </form>

        </div>
    `,
    data() {
        return {
            film: {
                title: 'film.title'
            },
            imdbInfo: [],
            title: '',
            description: '',
            director: '',
            image: '',
            genre: '',
            rated: '',
            runtime: '',
            filmNotFound: 'Film not found on OMDB-API'
        }
    },
    computed: {
        films() {
            return this.$store.state.films
        }
    }, methods: {
        checkIfFilmExists() {
            /* if(imdbInfo.length > 0) {
                addNewFilm
            } else {
                return filmNotFound
            } */
        },
        async addNewFilm() {
            if (!this.title.trim() &&
                !this.description.trim() &&
                !this.director.trim() &&
                !this.image.trim() &&
                !this.genre.trim() &&
                !this.rated.trim() &&
                !this.runtime.trim()) {
                return
            }

            let filmInfoAPI = {
                title: this.imdbInfo.Title,
                director: this.imdbInfo.Director,
                description: this.imdbInfo.Plot,
                image: this.imdbInfo.Poster,
                genre: this.imdbInfo.Genre,
                rated: this.imdbInfo.Rated,
                runtime: this.imdbInfo.Runtime
            }

            let result = await fetch('/rest/films', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(filmInfoAPI)
            })

            result = await result.json()
            console.log(result)

            this.title = '',
                this.director = '',
                this.description = '',
                this.director = '',
                this.image = '',
                this.genre = '',
                this.rated = '',
                this.runtime = ''

        }
    },
    async created() {

        /* let film = await fetch('/rest/films/' + this.$route.params.id)
        film = await film.json()
        console.log(film)
        this.film = film */

        fetch('http://www.omdbapi.com/?apikey=87748bc7&t=' + film.title)
            .then((res) => { return res.json() })
            .then((res) => {
                this.imdbInfo = res;
                console.log(this.imdbInfo)
            })
        /* .catch(error => console.log(error)); ASK JOHAN */

    }
}

