<template>
    <header-section/>
    <list-section :profileList="this.profiles"/>
</template>

<script>
import HeaderSection from './sections/headerSection.vue'
import listSection from './sections/listSection.vue'
import  supabase  from '../lib/supabaseClient'

export default {
    name:'mainSection',
    components:{
        listSection,
        HeaderSection
    },
    data(){
        return{
            profiles:[]
        }
    },
    methods:{
        async getProfiles() {
        let  data  = await supabase.from('githubProfiles').select();
        this.profiles = data.data;
        console.log(this.profiles)

      }
    },
    created(){
        this.getProfiles();
    }
}
</script>