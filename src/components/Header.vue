<template>
  <header class="header">
    <div class="container _f _j-between _i-center">
      <Logo style="margin-right: 16px" />
      <input class="header_search _wid-100" type="text" placeholder="Пошук">
      <div class="header-basket" @click="openBasket">
        <span class="header-basket_count">{{countCart}}</span>
      </div>
    </div>
  </header>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import Logo from "@/components/Logo.vue";

export default {
  name: "HeaderComponent",
  components: {
    Logo
  },
  setup() {
    const store = useStore();
    const countCart = computed(() => store.getters.BASKET_CART_COUNT)
    const openBasket = () => {
      if (countCart.value) {
        store.commit('UPDATE_IS_OPEN_BASKET', true);
      }
    }
    return {
      countCart,
      openBasket
    }
  }
}
</script>

<style scoped>

</style>