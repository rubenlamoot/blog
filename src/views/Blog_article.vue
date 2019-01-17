<template>
    <div class="container">

        <div v-for="article in articles" :key="article.id">
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
    import articles from '../articles.json'

    export default {

        data(){

            return{
                articles,
                artID:this.$route.params.id
            }
        },
    }
</script>
