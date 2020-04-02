export default {
    template: `
        <div> 
            <div class="add-new-film">
        <form class="example" @submit.prevent="checkIfFilmExists">
        <!-- <label>ADD FILM TO DATABASE</label><br><br> -->
        <input v-model="titleAdd" type="text" 
        placeholder="Enter title of film" required><br>
        <!-- <input v-model="youTubeURL" type="text" 
        placeholder="YouTube-id" required><br> -->
        <button type="submit"><i class="fa fa-search"></i></button>
        <button @click.prevent="addNewFilm">ADD</button>
        <button type="reset" value="Reset">RESET</button>
        </form><br>
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
        
        <form class="example" @submit.prevent="deleteFilm">
        <input v-model="titleDelete" type="text" 
        placeholder="Function not working yet" required><br>
        <button type="submit">DELETE</button>
        </form>

        <hr>
        <br>
        <form class="example" @submit.prevent="updateFilm">
        <input v-model="trailerUpdate" type="text" 
        placeholder="Function not working yet" required><br>
        <button type="submit">UPDATE</button>
        </form>
        
        </div>
        </div>
    `,
    data() {
        return {
            film: {
            },
            imdbInfo: [],
            filmFound: '',
            titleAdd: '',
            trailerUpdate: '',
            titleDelete: '',
            youTubeURL: '',
            youTubeId: ''
        }
    },
    computed: {
        films() {
            return this.$store.state.films
        }
    }, methods: {
        checkIfFilmExists() {
            fetch('http://www.omdbapi.com/?apikey=87748bc7&t=' + this.titleAdd)
                .then((res) => { return res.json() })
                .then((res) => {
                    this.imdbInfo = res;
                    console.log(this.imdbInfo)
                })

        },
        getYouTubeURL() {

        },
        matchYoutubeUrl(url) {
            let youTubeId = /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
            return (url.match(youTubeId)) ? RegExp.$1 : false;
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
                trailer: 'https://www.youtube.com/embed/' + this.youTubeId,
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
        async deleteFilm() {
            let filmRemove = { title: this.titleDelete };
           
            let rawResponse = await fetch('/rest/films/title/' + filmRemove.title, {
                method: 'DELETE',
            });
            let response = await rawResponse.text();
            console.log(response)
        },
       /*  async updateFilm() {
            let data = { sender: 'Olle', message: 'Hi!' };
            let rawResponse = await fetch('/rest/films/', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            let response = await rawResponse.json();

        } */
    },
    async addYouTubeId() {
        /* let data = { sender: 'Olle', message: 'Hi!' };
        let rawResponse = await fetch('[route]/id', {
            // tell the server we want to send/create data
            method: 'put',
            // and that we will send data json formatted
            headers: { 'Content-Type': 'application/json' },
            // the data encoded as json
            body: JSON.stringify(data)
        });
        let response = await rawResponse.json(); */
    }
}

/* if(imdbInfo.length > 0) {
               addNewFilm
           } else {
              = 'Film not found on OMDB-API'
               return filmNotFound
           } */

