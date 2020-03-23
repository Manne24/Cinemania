export default {
  template: `
    
        <div id="app">
    
          <nav id="meny-rad">
            <router-link to="/">Cinemania</router-link>
            <router-link to="/tickets">Biljetter</router-link>
            <router-link to="/films">Filmer</router-link>
            <router-link to="/news">Nyheter</router-link>
            <router-link to="/login">Login</router-link>
          </nav>
        
          <main>
            <router-view />
    
          </main>
    
        </div>
      `,
      async created() {
          let films = await fetch('/rest/films')
          films = await films.json()
          console.log(films)
          this.$store.commit('setFilms', films)
      },
      async created(){
        let users = await fetch('/rest/users')
        users = await users.json()
  
        this.$store.commit('setUsers', users)
      }
}
