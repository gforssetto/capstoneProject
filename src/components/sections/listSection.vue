<template>
    <main>
        <card-section v-for="card in cardList" :key="card.email" :info="card"/>
    </main>
</template>

<script>
import cardSection from './cardSection.vue'
export default {
  components: { cardSection },
    name:'listSection',
    data(){
        return{
            cardList:[
                {
                    name:'Guilherme',
                    email:'email@mail.com',
                    github:'GitGui'
                },
                {
                    name:'Nathan',
                    email:'email@mail.com',
                    github:'NathHub'
                },
                {
                    name:'Rafael',
                    email:'email@mail.com',
                    github:'Raff_12'
                },

            ]
        }
    }
}
</script>