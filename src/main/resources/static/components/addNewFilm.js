export default {
    template: `
        <div> 
            <h1 class="title-admin">Admin Panel</h1>
            <div class="add-new-film">
                <div class="admin-form">
                    <h4>Search and add Movie</h4>
                    <div class="search-form">
                        <form class="example" @submit.prevent="checkIfFilmExists">
                            <input v-model="titleAdd" type="text" 
                            placeholder="TITLE of film to add" required >
                            <input v-model="screeningDate" type="text" 
                            placeholder="Screening DATE (YYYY-MM-DD)" required>
                            <input v-model="salonID" type="text" 
                            placeholder="SALON id (1 OR 2)" required>
                            <input v-model="startTimeScreening" type="text" 
                            placeholder="START time (00:00:00)" required><br>
                            <input v-model="endTimeScreening" type="text" 
                            placeholder="END time time (00:00:00)" required><br>
                            <button type="submit"><i class="fa fa-search"></i></button>
                            <button @click.prevent="addNewFilm">ADD</button>
                            <button type="reset" value="Reset">RESET</button>
                        </form>
                    </div>
                    <p :style="{color: 'red'}">{{ imdbInfo.Error }}</p><br> 
                    <section class= "search-result">
                    Title: {{ imdbInfo.Title }} <br>
                    Director: {{ imdbInfo.Director }} <br>
                    Description: {{ imdbInfo.Plot}} <br>
                    Language: {{imdbInfo.Language}}<br>
                    Length: {{imdbInfo.Runtime}} <br>
                    Age: {{imdbInfo.Rated}} <br>
                    Year of production: {{imdbInfo.Year}} <br>
                    Genre: {{imdbInfo.Genre}}<br>
                    Runtime: {{imdbInfo.Runtime}}<br>
                    <p style="color:red">{{ filmFound }}</p><br>
                    </section>
                    <hr>

                    
                    <h4>Delete Movie</h4>
                    <div class="delete-form">
                    <form class="delete" @submit.prevent="deleteFilmByTitle">
                    <p style="color:red">{{ filmDeletedMessage }}</p>
                    <input v-model="titleDelete" type="text" 
                    placeholder="TITLE of film to delete" required><br>
                    <button type="submit" >DELETE</button>
                    </form><br>
                    </div>
                    <hr>
<!-- 
                    <hr>
                    <h4>Update Movie</h4>
                    <div class="update-form">
                    <form class="update" @submit.prevent="updateFilm">
                    <input v-model="trailerUpdate" type="text" 
                    placeholder="Enter new YouTube ID for trailer" required><br><br>
                    <input v-model="filmID" type="text" 
                    placeholder="Enter ID of film to update (need some adjusting to work)" required><br>
                    <button type="submit">UPDATE</button>
                    </form> -->
                    </div>
                </div>
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
            titleDelete: '',
            filmDeletedMessage: '',
            screeningDate: '',
            salonID: '',
            startTimeScreening: '',
            endTimeScreening: ''
        }
    },
    computed: {
        film() {
            return this.$store.state.films.filter((film) => film.film_id === this.filmID)

        }
    }, methods: {
        checkIfFilmExists() {
            fetch('http://www.omdbapi.com/?apikey=87748bc7&t=' + this.titleAdd)
                .then((res) => { return res.json() })
                .then((res) => {
                    this.imdbInfo = res;
                    console.log(this.imdbInfo)
                })

            fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&maxResult=1&topicId=%2Fm%2F02vxn&key=[YOUR_API_KEY]&q=' + this.titleAdd + 'trailer')
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
            this.$store.commit("appendFilm", result);
            console.log(result.film_id)
            this.titleAdd = ''

            if (!this.screeningDate.trim() &&
                !this.salonID.trim() &&
                !this.startTimeScreening.trim() &&
                !this.endTimeScreening.trim()) {
                return
            }

            let newScreening = {
                date: this.screeningDate,
                film_id: result.film_id,
                salon_id: this.salonID,
                start_time: this.startTimeScreening,
                end_time: this.endTimeScreening
            }

            let resultScreening = await fetch('/rest/screenings', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newScreening)
            })

            resultScreening = await resultScreening.json()
            console.log(resultScreening)
            this.$store.commit("appendScreening", resultScreening);

            this.screeningDate = '',
            this.salonID = '',
            this.startTimeScreening = '',
            this.endTimeScreening = ''
            this.filmFound = 'Film ADDED.'


        },
        async deleteFilmByTitle() {
            let rawResponse = await fetch('/rest/films/' + this.titleDelete, {
                method: 'DELETE',
                headers: { "Content-Type": "application/json" },
                body: this.titleDelete
            });
            this.$store.state.films
            console.log('Successfully removed the film')
            this.filmDeletedMessage = 'Successfully removed the film'
            this.titleDelete = ''
        },
        async updateFilm() {

            let film = await fetch("/rest/films/" + this.filmID);
            film = await film.json();
            console.log(film);
            this.film = film;

            console.log(this.film)

            let data = {
                film_id: this.filmID,
                title: this.film.title,
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