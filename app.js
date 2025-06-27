"use strict"

const app = Vue.createApp({
    template: `
    <h1>Hallo {{ name }}!!</h1>
    <img :src="myImage">
    <button v-on:click="getNewImage()">Klick mich!</button>
    `,
    data() {
        return {
            name: 'Junus',
            myImage: 'https://random.imagecdn.app/500/150'
        }
    },

    methods: {
        getNewImage() {
            const width = Math.floor(Math.random() * 500);
            this.myImage = `https://random.imagecdn.app/${width}/150`;
        }
    },
});

app.mount('#app');