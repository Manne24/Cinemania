export default {
    template: `
        <div> 
            <div class="add-new-film">
        <form class="example" @submit.prevent="checkIfFilmExists">
        <input v-model="titleAdd" type="text" 
        placeholder="Enter TITLE of film to add" required><br>
        <button type="submit"><i class="fa fa-search"></i></button>
        <button @click.prevent="addNewFilm">ADD</button>
        <button type="reset" value="Reset">RESET</button>
        </form>

        <p :style="{color: 'red'}">{{ imdbInfo.Error }}</p><br> 
        <section>
        title: {{ imdbInfo.Title }} <br>
        director: {{ imdbInfo.Director }} <br>
        description: {{ imdbInfo.Plot}} <br>
        language: {{imdbInfo.Language}}<br>
        length: {{imdbInfo.Runtime}} <br>
        age: {{imdbInfo.Rated}} <br>
        year of production: {{imdbInfo.Year}} <br>
        genre: {{imdbInfo.Genre}}<br>
        runtime: {{imdbInfo.Runtime}}<br>
        <p style="color:red">{{ filmFound }}</p><br>
        </section>
        <hr>
        
        <form class="example" @submit.prevent="deleteFilmByTitle">
        <input v-model="titleDelete" type="text" 
        placeholder="Enter TITLE of film to delete" required><br>
        <button type="submit" >DELETE</button>
        </form><br>

        <hr>
        <form class="example" @submit.prevent="updateFilm">
        <input v-model="trailerUpdate" type="text" 
        placeholder="Enter updated YouTube ID of trailer" required><br><br>
       <input v-model="filmID" type="text" 
        placeholder="Enter ID of film to update (need some adjusting to work)" required><br>
        <button type="submit">UPDATE</button>
        </form>

        </div>
        </div>
    `,
    data() {
        return {
            imdbInfo: [],
            filmFound: '',
            titleAdd: '',
            trailerUpdate: '',
            filmID: '',
            deleteFilmWithID: '',
            youTubeURL: '',
            youTubeId: '',
            titleDelete: ''
        }
    },
    computed: {
        films() {
            let film = this.$store.state.films.filter((film) => film.film_id === this.filmID)
            return
        }
    }, methods: {
        checkIfFilmExists() {
            fetch('http://www.omdbapi.com/?apikey=87748bc7&t=' + this.titleAdd)
                .then((res) => { return res.json() })
                .then((res) => {
                    this.imdbInfo = res;
                    console.log(this.imdbInfo)
                })

            fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=1&topicId=%2Fm%2F02vxn&key=AIzaSyBZYMBXtPnBh3a5C52KBGF01L-2HSFlaUY&q=' + this.titleAdd)
                .then((res) => { return res.json() })
                .then((res) => {
                    this.youTubeURL = res;
                    this.youTubeId = 'https://www.youtube.com/embed/' + this.youTubeURL.items[0].id.videoId
                    console.log(this.youTubeId)
                })

        },
        async addNewFilm() {

            if (!this.imdbInfo.Title.trim() &&
                !this.imdbInfo.Director.trim() &&
                !this.imdbInfo.Plot.trim() &&
                !this.imdbInfo.Poster.trim() &&
                !this.imdbInfo.Genre.trim() &&
                !this.imdbInfo.Rated.trim() &&
                !this.imdbInfo.Language.trim() &&
                !this.imdbInfo.Year.trim()) {
                return
            }

            let filmInfoAPI = {
                title: this.imdbInfo.Title,
                director: this.imdbInfo.Director,
                description: this.imdbInfo.Plot,
                image: this.imdbInfo.Poster,
                trailer: this.youTubeId,
                genre: this.imdbInfo.Genre,
                rated: this.imdbInfo.Rated,
                runtime: this.imdbInfo.Runtime,
                language: this.imdbInfo.Language,
                year: this.imdbInfo.Year
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

            this.titleAdd = ''

        },
        async deleteFilmByTitle() {
            let rawResponse = await fetch('/rest/films/' + this.titleDelete, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                body: this.titleDelete
            });
            this.$store.state.films
            console.log('Successfully removed the film')
            this.titleDelete = ''
        },
        async updateFilm() {
            let data = {
                film_id: this.filmID,
                title: 'ww',
                director: 'ww',
                description: 'ww',
                image: 'ww',
                trailer: 'https://www.youtube.com/embed/' + this.trailerUpdate,
                genre: 'ww',
                rated: 'ww',
                runtime: 'ww',
                language: 'ww',
                year: 'ww'
            };
            let rawResponse = await fetch('/rest/films', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            console.log('Successfully updated the film')

        }
    },
}