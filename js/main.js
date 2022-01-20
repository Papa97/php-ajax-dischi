const app = new Vue ({
    el: "#app",
    data: {
        albums: [],
        sceltaGenere: "tutti",
    },
    created() {
        axios.get("./backend.php")
        .then( (response) => {
            this.albums = response.data;
        })
    },
    methods: {
    },
    computed: {
        genereFiltered () {
            if (this.sceltaGenere == "tutti") {
                return this.albums;
            } else {
                return this.albums.filter((elm) => 
                elm.genre.includes(this.sceltaGenere)
                );
            }
        }
    }
})