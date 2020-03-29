import history from '../components/history.js'


export default {
    components: {
        history
      },
    template:`
    <div>
        <h2>My page</h2>
        <h3>My account</h3>
        <h3>My booking history</h3>
        <p>Här sidan visar my account info och booking history efter man gör inloggning</p>
        
        <history />
    </div>
    `
}
