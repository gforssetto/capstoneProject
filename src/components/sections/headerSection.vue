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

export default {
    name:'headerSection',
    methods:{
        addCard(e){
            e.preventDefault();
            let name =  $('.formInput').eq(0)
            let email =  $('.formInput').eq(1)
            let gitHub =  $('.formInput').eq(2)
            console.log(
               name, email, gitHub
            )
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