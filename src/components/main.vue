<template>
    <header-section/>
    <list-section/>
</template>

<script>
import HeaderSection from './sections/headerSection.vue'
import listSection from './sections/listSection.vue'

export default {
    name:'mainSection',
    components:{
        listSection,
        HeaderSection
    }
}
</script>