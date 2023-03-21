<template>
    <swiper
        v-if="pending"
        class="carts"
        :slidesPerView="2"
        :slidesPerGroup="2"
        :spaceBetween="8"
        :pagination="{
        clickable: true,
      }"
        :modules="modules"
        :grid="{
        rows: 2,
        fill: 'row'
      }"
        :navigation="{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
      }"
    >
      <swiper-slide v-for="cart of carts" :key="cart.id" class="cart">
        <CartSlide :cart="cart" @addCartToBasket="addCartToBasket" />
      </swiper-slide>
    </swiper>
  <div class="preloader object-fit" v-else>
    <img :src="require('../assets/preloader.gif')" alt="preloader">
  </div>
</template>

<script>
import CartSlide from "@/components/CartSlide.vue";

import {useStore} from "vuex";
import {computed} from "vue";
import {Swiper, SwiperSlide} from 'swiper/vue';
import 'swiper/css';
import "swiper/css/grid";
// import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {Grid, Pagination, Navigation} from 'swiper';

export default {
  name: "Carts-Container",
  components: {
    Swiper,
    SwiperSlide,
    CartSlide
  },
  setup() {
    const store = useStore();

    const pending = computed(() => store.getters.IS_LOADING);
    const carts = computed(() => store.getters.CARTS_RESULT);

    const addCartToBasket = (cart) => {
      store.dispatch('SET_BASKET', cart);
    }

    store.dispatch('GET_CART_API');

    return {
      addCartToBasket,
      carts,
      pending,
      modules: [Grid, Pagination, Navigation]
    };
  },
}
</script>

<style scoped>

</style>