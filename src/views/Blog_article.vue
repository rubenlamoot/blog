<template>
    <div class="container">
        <!--hier wordt 1 volledig blog artikel getoond-->
        <!--loop terug door de array en toon alles van het blogartikel waar de ID overeenkomt met de parameter die we hebben meegegeven-->
        <div v-for="article in arrArtikel" :key="article.id">
            <div v-if="article.id === Number(artID)">
                <h2>{{article.title}}</h2>
                <div class="row">
                    <div class="col-md-6">
                        <p>{{article.author}}</p>
                        <p>{{article.description}}</p>
                    </div>
                    <div class="col-md-6">
                        <p>{{article.date}}</p>
                        <img class="img-fluid" v-bind:src="article.image" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
      data() {
          return {
              arrArtikel:{},
              // artID krijgt de waarde van de parameter die we via de link 'lees meer' van de blog-pagina hebben meegeven
              artID: this.$route.params.id
          }
      },
      mounted() {
          // terug de opvulling van de array met de objecten in de localstorage
          this.arrArtikel = JSON.parse(localStorage.getItem('artikelen'));
      },

  }

</script>
