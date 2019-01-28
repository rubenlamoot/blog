import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './views/Blog.vue'
import Blog_article from './views/Blog_article.vue'
import Article_new from './views/Article_new.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[{
        path:'/blog',
        component: Blog
    },
        {
            path:'/blog_article/:id',
            component: Blog_article
        },
        {
            path:'/new',
            component: Article_new
        }
    ]
})

export default router
