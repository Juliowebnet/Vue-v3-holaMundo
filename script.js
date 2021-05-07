const Counter = {
    data() {
        return {
            counter: 0
        }
    },
    mounted() {
        setInterval(()=> {
            this.counter++
        }, 1000)
    }
}

const AttributeBinding = {
    data(){
        return{
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    }
}

const EventHandling = {
    data(){
        return {
            message: 'Hello Vue.js!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message
            .split('')
            .reverse()
            .join('')
        }
    }
}

Vue.createApp(Counter).mount('#counter')
Vue.createApp(AttributeBinding).mount('#bind-attribute')
Vue.createApp(EventHandling).mount('#event-handling')