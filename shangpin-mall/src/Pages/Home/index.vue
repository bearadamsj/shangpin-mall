<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <typeNav></typeNav>
        <listContainer></listContainer>
        <todayRecommand></todayRecommand>
        <rankVue></rankVue>
        <likeVue></likeVue>
        <floorVue></floorVue>
        <brandVue></brandVue>
    </div>
</template>

<script>
// components 
import listContainer from '@/Pages/Home/ListContainer'
import todayRecommand from '@/Pages/Home/Recommanded'
import rankVue from '@/Pages/Home/Rank'
import likeVue from '@/Pages/Home/Like'
import floorVue from '@/Pages/Home/Floor'
import brandVue from '@/Pages/Home/Brand'

// axios requests
import redCategoryList from '@/API';
redCategoryList()
export default {
    components: {
        listContainer,
        todayRecommand,
        rankVue,
        likeVue,
        floorVue,
        brandVue,
    }
}
</script>

<style lang="less"></style>