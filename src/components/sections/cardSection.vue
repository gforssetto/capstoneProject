<template>
    <aside class="card">
        <h4>{{ info.name }}</h4>
        <ul>
            <li><span class="fa-solid fa-envelope"></span><a href="#">{{ info.email }}</a></li>
            <li><span class="fa-brands fa-github"></span><a href="#">{{ info.github }}</a></li>
        </ul>        
    </aside>
</template>

<script>
export default {
    name:'cardSection',
    props:{
        info:{}
    }
}
</script>