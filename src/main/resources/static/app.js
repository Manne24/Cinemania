export default {
  template: `
    
        <div id="app">
    <header>
          <nav id="meny-rad">
            <router-link to="/">Cinemania</router-link>
            <router-link to="/tickets">Tickets</router-link>
            <router-link to="/films">Films</router-link>
            <router-link to="/login"><i class="fas fa-sign-in-alt"></i></router-link>
            <router-link to="/myPage"><i class="fas fa-user"></i></i></router-link>
            <router-link to="/addFilmAdmin"><i class="fas fa-user-lock"></i></router-link>
            <a @click="doLogout"><i class="fas fa-door-open"></i></a>
          </nav>
          </header>
        <br>
          <main>
            <router-view />
    
          </main>
    
        </div>
      `,

      methods: {
        doLogout(){
          fetch('/logout')
          console.log('Successfully logged out')
          this.$store.commit('setUser', null)
          this.$router.push('/login').catch((err) => {
            throw new Error(`Problem handling something: ${err}.`);
        })

        }
      },

      async created() {      
          let user = await fetch('/auth/whoami')

          try{
            user = await user.json()
            this.$store.commit('setUser', user)
            console.log('Login user :', user.name);
          }catch{
            console.log('Client not authenticated');
          }

          let films = await fetch('/rest/films')
          films = await films.json()
          this.$store.commit('setFilms', films)

          let users = await fetch("/rest/users");
          users = await users.json();
          this.$store.commit("setUsers", users);

          let seats = await fetch("/rest/seats");
          seats = await seats.json();
          this.$store.commit("setSeats", seats);

          let screenings = await fetch("rest/screenings");
          screenings = await screenings.json();
          this.$store.commit("setScreenings", screenings);

          let bookings = await fetch("rest/bookings");
          bookings = await bookings.json();
          this.$store.commit("setBookings", bookings);

        }
};
