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

Vue.createApp(Counter).mount('#counter')
Vue.createApp(AttributeBinding).mount('#bind-attribute')