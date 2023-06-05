/*Genero due cicli for con vue, uno che cicla in un array di quattro elementi e li stampa su schermo, l'altro che stampa su schermo i primi 10 numeri.*/



const { createApp } = Vue;

createApp({
    data() {
        return {
            numbers : ['1','2','3','4','5','6','7','8','9','10'],
        }
    },

}).mount('#app');