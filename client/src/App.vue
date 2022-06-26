<template>
    <header-component></header-component>
    <router-view></router-view>
</template>

<script>
import HeaderComponent  from './components/layouts/Header.vue';

export default{
    components: {
        HeaderComponent
    }
}
</script>


<style>

@import '../public/css/app.css';

</style>