<template>
    <header>
        <section>
            <h1>CASPTONE</h1>
        </section>
        <article>
            <form action="post" class="form" v-on:submit="addCard">
                <input type="text" name="name" id="name" placeholder="Insert the name" class="formInput">
                <input type="text" name="email" id="email" placeholder="Insert the email" class="formInput">
                <input type="text" name="github" id="github" placeholder="Insert the github" class="formInput">
                <input type="submit" value="Save">
            </form>
        </article>
    </header>
</template>

<script>

import $ from 'jquery';
import  supabase  from '/src/lib/supabaseClient.js'

export default {
    name:'headerSection',
    methods:{
        addCard(){
            let name =  $('.formInput').eq(0).val()
            let email =  $('.formInput').eq(1).val()
            let gitHub =  $('.formInput').eq(2).val()
            this.card.name = name;
            this.card.email = email;
            this.card.github = gitHub;
            console.log(
               this.card
            )
            this.insertNew(this.card)
        },
        async insertNew(newCard){
            await supabase.from('githubProfiles').insert(newCard)
        }
    },
    data(){
        return{
            card:{
                name:'',
                email:'',
                github:''
            }
        }
    }
}
</script>