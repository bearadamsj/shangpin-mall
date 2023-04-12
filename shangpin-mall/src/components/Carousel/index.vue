<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(carousel, index) in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
      <!-- <div class="swiper-slide">
                            <img src="./images/banner2.jpg" />
                        </div>
                        <div class="swiper-slide">
                            <img src="./images/banner3.jpg" />
                        </div>
                        <div class="swiper-slide">
                            <img src="./images/banner4.jpg" />
                            </div> -->
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    listbanners: {
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
            console.log(this.list)
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            loop: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>