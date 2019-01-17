<template>
    <div class="container">
    <h1 class="text-center">Blog</h1>
        <div class="row">
            <div :key="article.id" class="col-md-6" v-for="article in articles">
                <div class="card my-3">
                    <div class="card-body">
                        <h3 class="card-title">{{article.title}}</h3>
                        <p class="card-text">{{article.shortDes}}</p>
                        <router-link class="link" :to="`/blog_article/${article.id}`">Lees meer</router-link>
                    </div>
                 </div>
            </div>
        </div>
        <button class="btn btn-primary">Voeg een artikel toe</button>
    </div>
</template>

<script>
    import articles from '../articles.json'


    export default {

        data(){
            return{
                articles
            }
        },
    }
</script>