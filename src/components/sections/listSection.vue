<template>
    <main>
        <card-section v-for="profile in profileList" :key="profile.id" :info="profile"/>
    </main>
</template>

<script>
import cardSection from './cardSection.vue'

export default {
  components: { cardSection },
    name:'listSection',
    props:{
        profileList:[]
    }
}
</script>