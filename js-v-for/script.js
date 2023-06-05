/*Genero due cicli for con vue, uno che cicla in un array di quattro elementi e li stampa su schermo, l'altro che stampa su schermo i primi 10 numeri.*/



const { createApp } = Vue;

createApp({
    data() {
        return {
            partecipants : [
                {
                    name : 'Ginetta',
                    role: 'Software Developer',
                    experience : 5
                },
                {
                    name : 'Ginetto',
                    role: 'Designer',
                    experience : 2
                },
                {
                    name : 'Lorenzina',
                    role: 'Junior Software Developer',
                    experience : 1
                },

            ],
        }
    },

}).mount('#app');