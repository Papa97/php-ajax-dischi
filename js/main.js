const app = new Vue ({
    el: "#app",
    data: {
        albums: [],
        sceltaGenere: "",
    },
    created() {
        axios.get("./backend.php")
        .then( (response) => {
            this.albums = response.data;
        })
    },
    methods: {
        filtraGenere(){
            this.sceltaGenere = "";
            console.log();
        },
        // filtraGenere() {
        //     if (this.sceltaGenere == "tutti") {
        //         return this.album;
        //     } else {
        //         return this.album.filter((elm) => elm.genre.includes(this.sceltaGenere));
        //     };
        // }
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