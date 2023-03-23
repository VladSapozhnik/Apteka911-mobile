<template>
    <div class="cart_img object-fit">
      <img :src="require('../assets/'+cart.img+'.png')" alt="cart">
    </div>
    <h3 class="cart_title">
      {{ cart.title }}
    </h3>
    <div class="_mb-8 _f _j-between _i-end">
      <div class="cart-price">
        <div class="cart-price_prev" v-if="cart.prevPrice">{{ cart.prevPrice }} грн</div>
        <div class="cart-price_current" :class="{active: cart.prevPrice}">{{ cart.currentPrice }} грн</div>
      </div>
      <div class="cart_basket object-fit" @click="onSubmit(cart)" :class="{active: !isAddToCart}">
        <img v-if="!isAddToCart" src="../assets/basketCart.svg" alt="basket cart">
        <img v-else src="../assets/basketActive.svg" alt="basket cart">
      </div>
    </div>
    <div class="cart_is-stock">
      <span v-if="cart.isStock">Є в наявності</span>
      <span v-else :style="{color: '#8592AA'}">Немає в наявності</span>
    </div>
</template>

<script>
import {ref} from "vue";
import basket from "@/components/Basket.vue";

export default {
  name: "CartSlide",
  computed: {
    basket() {
      return basket
    }
  },
  props: {
    cart: Object,
  },
  setup(props, context) {
    const isAddToCart = ref(false);
    const onSubmit = (cart) => {
      console.log(cart)
      isAddToCart.value = !isAddToCart.value;
      context.emit('addCartToBasket', cart);
    }

    return {
      onSubmit,
      isAddToCart,
    }
  }
}
</script>

<style scoped>

</style>