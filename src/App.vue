<template>
  <mainSection/>
</template>

<script>
  import mainSection from './components/main.vue';
  import { onMounted } from 'vue'
  import  supabase  from './lib/supabaseClient'

  export default {
    name: 'App',
    components: {
      mainSection
    },
    setup() {
      
      let profiles = [];

      async function getProfiles() {
        const  data  = await supabase.from('githubProfiles').select('*');
        profiles = data;
      }

      onMounted(() => {
        getProfiles();
      });

      return {
        profiles,
      };
    }
  }

</script>

<style>
@import url('./css/style.css');
</style>
