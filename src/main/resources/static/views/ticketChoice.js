import ticketChoiceContent from '../components/ticketChoiceContent.js';
export default {
  components :{
    ticketChoiceContent
},
  template: `
    <div>
      <ticketChoiceContent/>
    </div>  
    `/* ,  
    computed: {
    screenings() {
      return this.$store.state.screenings;
    }
  } */,
};
