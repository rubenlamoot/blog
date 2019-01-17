import Vue from 'vue'
import VueRouter from 'vue-router'
import Blog from './views/Blog.vue'
import Blog_article from './views/Blog_article.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    routes:[{
        path:'/blog',
        component: Blog
    },
        {
            path:'/blog_article/:id',
            component: Blog_article
        }
    ]
})

export default router
