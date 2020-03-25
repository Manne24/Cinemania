export default {
    template:`
    <div>
        <h4>Select Ticket Amount</h4>
        <form>
            <p>Child</p>
            <div class="value-button" id="decrease"  value="Decrease Value">-</div>
                <input type="number" id="number" value="0" />
            <div class="value-button" id="increase" value="Increase Value">+</div>
            <p>Adult</p>
            <div class="value-button" id="decrease"  value="Decrease Value">-</div>
                <input type="number" id="number" value="0" />
            <div class="value-button" id="increase" value="Increase Value">+</div>
            <p>Senior</p>
            <div class="value-button" id="decrease"  value="Decrease Value">-</div>
                <input type="number" id="number" value="0" />
            <div class="value-button" id="increase" value="Increase Value">+</div>
        </form>
        <button>Continue</button>
    </div>
    
    `
}