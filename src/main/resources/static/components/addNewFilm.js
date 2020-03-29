export default {
    template: `
        <div> 
        <form @submit.prevent="checkIfFilmExists">
        <label>ADD FILM</label><br>
        <input v-model="titleAdd" type="text" placeholder="Enter title of film"><br>
        <button type="submit">FIND</button>
        </form>
        <!-- <div v-for="info of imdbInfo"
         :key="info.Title" ></div> -->
        <button @click="addNewFilm">ADD</button><br>
        <hr>
        title: {{ imdbInfo.Title }} <br>
        director: {{ imdbInfo.Director }} <br>
        description: {{ imdbInfo.Plot}} <br>
        language: {{imdbInfo.Language}}<br>
        length: {{imdbInfo.Runtime}} <br>
        age: {{imdbInfo.Rated}} <br>
        year of production: {{imdbInfo.Year}} <br>
        genre: {{imdbInfo.Genre}}<br>
        runtime: {{imdbInfo.Runtime}}<br>

        <p style="color:red">{{ filmNotFound }}</p><br>
        
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
            },
            imdbInfo: [],
            filmNotFound: '',
            titleAdd: '',
            titleDelete: ''
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
        test(){
            console.log(this.imdbInfo)
        },
        async addNewFilm() {
            console.log(this.imdbInfo)

            if (!this.imdbInfo.Title.trim() &&
                !this.imdbInfo.Director.trim() &&
                !this.imdbInfo.Plot.trim() &&
                !this.imdbInfo.Poster.trim() &&
                !this.imdbInfo.Genre.trim() &&
                !this.imdbInfo.Rated.trim()) {
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

            /* this.title = '',
                this.director = '',
                this.description = '',
                this.director = '',
                this.image = '',
                this.genre = '',
                this.rated = '',
                this.runtime = '' */

        }
    },
}

 /* if(imdbInfo.length > 0) {
                addNewFilm
            } else {
               = 'Film not found on OMDB-API'
                return filmNotFound
            } */

