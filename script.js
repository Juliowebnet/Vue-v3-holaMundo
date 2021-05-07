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

const TwoWayBinding = {
    data() {
        return {
            message: 'Hello Vue!'
        }
    }
}

const ConditionalRendering = {
    data() {
        return {
            seen: true
        }
    }
}

const ListRendering = {
    data() {
        return {
            todos: [
                {text: 'Learn JavaScript'},
                {text: 'Learn Vue'},
                {text: 'Build something awesome'}
            ]
        }
    }
}

Vue.createApp(Counter).mount('#counter')
Vue.createApp(AttributeBinding).mount('#bind-attribute')
Vue.createApp(EventHandling).mount('#event-handling')
Vue.createApp(TwoWayBinding).mount('#two-way-binding')
Vue.createApp(ConditionalRendering).mount('#conditional-rendering')
Vue.createApp(ListRendering).mount('#list-rendering')