Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    }
}).mount('#app');
Vue.createApp({
    data() {
        return {
            firstName: 'Jane',
            lastName: 'Austin'
        }
    }
}).mount('#app2');