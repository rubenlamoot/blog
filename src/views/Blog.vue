<template>
    <div class="container">
    <h1 class="text-center">Blog</h1>
        <div class="row">
            <!--loop door de array arrArtikel en toon titel, korte beschrijving op het scherm-->
            <div :key="article.id" class="col-md-6" v-for="article in arrArtikel">
                <div class="card my-3">
                    <div class="card-body">
                        <h3 class="card-title">{{article.title}}</h3>
                        <p class="card-text">{{article.shortDes}}</p>
                        <!--de 'lees meer' is een link naar het volledig artikel die getoond wordt op de pagina Blog_article.vue-->
                        <!--in de link wordt een parameter meegegeven, dat is hier het ID van het artikel, om zo het juiste blogbericht te tonen-->
                        <router-link class="link" :to="`/blog_article/${article.id}`">Lees meer</router-link>
                    </div>
                 </div>
            </div>
        </div>
        <!--deze knop is een link naar de pagina Article_new.vue waar er een nieuw blog artikel kan aangemaakt worden-->
        <router-link class="link btn btn-primary" to="/new">Voeg een artikel toe</router-link>
    </div>
</template>

<script>

     export default {
        data() {
            return {
                // de array arrArtikel waar we alle objecten uit onze json file zullen steken
                arrArtikel : {}
                }
        },
         mounted() {
             this.getArticles()
         },
         methods: {
            // hier wordt gecheckt als er reeds iets in de localstorage zit
             getArticles() {
                 const artikelen = localStorage.getItem('artikelen');
                 // indien ja, haal de data er uit in steek ze in de array arrArtikel
                 if (artikelen) {
                     this.arrArtikel = JSON.parse(artikelen);
                     return;
                 }
                 // indien nee, haal de data op via axios op de server van syntraproject en steek de data in de localstorage
                 axios.get('http://www.syntraproject.be/ruben/articles.json')
                     .then(response => {
                         this.arrArtikel = response.data;
                         localStorage.setItem('artikelen', JSON.stringify(response.data))
                     })
             }
         },


     }

</script>