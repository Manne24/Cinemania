export default {
    template: `
      <div>
          <transition-group name="fade" tag="div">
      <div v-for="i in [currentIndex]" :key="i">
        <img class="slider-img" :src="currentImg" />
      </div>
    </transition-group>
    <a class="prev" @click="prev">&#10094; Previous</a>
    <a class="next" @click="next"> Next &#10095;</a>
  </div>
    
    `, 
    data() {
        return {
            images: ["https://m.media-amazon.com/images/M/MV5BNzQzMzJhZTEtOWM4NS00MTdhLTg0YjgtMjM4MDRkZjUwZDBlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
                    "https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_SX300.jpg",
                    "https://m.media-amazon.com/images/M/MV5BMTIzNjg0MzgwNF5BMl5BanBnXkFtZTcwMTQ1MzczMQ@@._V1_SX300.jpg",
                    "https://m.media-amazon.com/images/M/MV5BMTQzOTYwMzA4NF5BMl5BanBnXkFtZTgwMDQyODIzNjE@._V1_SX300.jpg",
                    "https://m.media-amazon.com/images/M/MV5BMmNlYzRiNDctZWNhMi00MzI4LThkZTctMTUzMmZkMmFmNThmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"
                    
            ],
            timer:null,
            currentIndex: 0
        }
    },
    mounted: function() {
        this.startSlide();
      }
    ,
    methods: {
        startSlide: function() {
        //   this.timer = setInterval(this.next, 5000);
        }, 
        next: function() {
          this.currentIndex += 1;
        },
        prev: function() {
          this.currentIndex -= 1;
        }
      },
    computed: {
        films() {
            return this.$store.state.films
            },
            currentImg: function() {
                return this.images[Math.abs(this.currentIndex) % this.images.length];
              }
        }
}