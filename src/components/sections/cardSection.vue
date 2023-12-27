<template>
    <div class="container">
        <aside class="card">
            <h4>{{ info.name }}</h4>
            <ul>
                <li><span class="fa-solid fa-envelope"></span><a href="#">{{ info.email }}</a></li>
                <li><span class="fa-brands fa-github"></span><a href="#">{{ info.github }}</a></li>
            </ul>
            <div>
                <button v-on:click="toggleConfirm">Delete</button>
                <button>Edit</button>
            </div>
        </aside>
        <article class="none confirm">
            <aside>
                <button v-on:click="deleteCard" :id="itemID">Delete</button>
                <button v-on:click="cancel">Cancel</button>
            </aside>
        </article>
    </div>
</template>

<script>
import supabase from '/src/lib/supabaseClient.js'
import $ from 'jquery'

export default {
    name:'cardSection',
    props:{
        info:{}
    },
    computed:{
        itemID(){
            return this.info.id 
        }
    },
    methods:{
        async deleteCard(e){
            let cardId = $(e.target).attr('id')
            await supabase.from('githubProfiles').delete().match({id:cardId})
            location.reload(true)
        },
        toggleConfirm(e){
            let target = $(e.target)
            let parent = target.parent().parent().next()
            parent.toggleClass("none");
        },
        cancel(e){
            let target = $(e.target).parent().parent()
            target.toggleClass("none")
        }
    }
}
</script>