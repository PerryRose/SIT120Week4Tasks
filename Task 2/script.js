const CurrentMinute = {
    data() {
      return {
        isEven: new Date().getMinutes() %2 == 0
      }
    }
  }
  
Vue.createApp(CurrentMinute).mount('#currentMinute')

const CurrentDay = {
    data() {
        return {
            day: new Date().toLocaleString('en-us', { weekday: 'long' })
        }
    }
}

Vue.createApp(CurrentDay).mount('#currentDay')

const ShowHide = {
    data() {
        return {
            show: true
        }
    },
    methods: {
        changeBoolean() {
            this.show = !this.show;
        }
    }
}

Vue.createApp(ShowHide).mount('#showHide');

const ListRendering = {
    data() {
        return {
            fruits: [{name: 'Apple'}, {name: 'Banana'}, {name: 'Peach'}]
        }
    }
}

Vue.createApp(ListRendering).mount("#listRendering")