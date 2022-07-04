// Attraverso l'apposita API di Boolean
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

var app = new Vue (
    {
        el: '#root',
        data: {
            randomEmailsArray: []
        },
        methods: {
            getRandomEmail() {
                for(i = 0; i < 10; i++) {
                    // A ogni iterazione richiamo l'API per generare un indirizzo email random

                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                    .then((response) => {
                        // pusho l'indirizzo email appena generato in randomEmailsArray

                        this.randomEmailsArray.push(response.data.response)
                        console.log(this.randomEmailsArray)
                    })
                }
            }
        }
    }
)
