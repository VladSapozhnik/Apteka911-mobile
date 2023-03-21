<template>
  <div class="goods">
      <div class="goods_head">Постачальник: <span>Lorem Ipsum</span></div>
      <ul class="goods-list" v-for="cart of basket" :key="cart.id">
        <li class="goods-item _f">
          <div class="goods-item_pic object-fit">
            <img :src="require('../assets/'+cart.img+'.png')" alt="basket goods" />
          </div>
          <div>
            <h4 class="goods-item_title">{{cart.title}}</h4>
            <div class="goods-item-price">
              {{ cart.currentPrice }} грн
              <span class="goods-item-price_number">{{cart.quantity}} шт</span>
            </div>
          </div>
        </li>
      </ul>
  </div>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";

export default {
  name: "BasketGoods",
  setup() {
    const store = useStore();
    const basket = computed(() => store.getters.BASKET);
    return {
      basket
    }
  }
}
</script>

<style scoped>

</style>