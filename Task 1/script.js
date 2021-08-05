const Countdown = {
    data() {
      return {
        countdown: 10
      }
    },
    mounted() {
        // Create an interval, running every second
        const interval = setInterval(() => {
            // If countdown hasn't reached zero
            if (this.countdown > 0) {
                // Decrement value
                this.countdown--;
            }
            else {
                // Alert user
                alert("Countdown has reached zero!");
                // End interval
                window.clearInterval(interval);
            }
        }, 1000);
    }
  }
  
Vue.createApp(Countdown).mount('#countdown')
  

const RawHTML = {
    data() {
      return {
        rawHTML: `<h3 class="raw-html">I am defined inside a Vue app</h3>`
      }
    }
  }
  
Vue.createApp(RawHTML).mount('#html')


const DynamicClass = {
    data() {
        return {
            // Set class as 'blue' if current minute is even, otherwise set class to 'green'
            dynamicClass: new Date().getMinutes() %2 === 0 ? "blue" : "green"
        }
    },
    mounted() {
        // Update every second
        setInterval(() => {
            this.dynamicClass = new Date().getMinutes() %2 === 0 ? "blue" : "green"
        }, 1000);
    }
}

Vue.createApp(DynamicClass).mount('#dynamicClass');

