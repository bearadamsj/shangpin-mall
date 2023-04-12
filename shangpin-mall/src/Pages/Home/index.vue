<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <typeNav></typeNav>
        <listContainer></listContainer>
        <todayRecommand></todayRecommand>
        <rankVue></rankVue>
        <likeVue></likeVue>
        <floorVue v-for="(floor, index) in floorlist" :key="floor.id"
        :list="floor"></floorVue>
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

import { mapState } from 'vuex'
export default {
    components: {
        listContainer,
        todayRecommand,
        rankVue,
        likeVue,
        floorVue,
        brandVue,
    },

    data(){
        return {
        }
    },

    mounted(){
        this.$store.dispatch('getFloorList')
        
    },

    computed: {
        ...mapState({
            floorlist: (state) => state.home.floorlist
        })
    }

}
</script>

<style lang="less"></style>