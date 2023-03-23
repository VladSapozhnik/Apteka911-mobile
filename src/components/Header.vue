<template>
  <header class="header">
    <div class="container _f _j-between _i-center">
      <Logo />
      <input class="header_search _wid-100" type="text" placeholder="Пошук">
      <router-link :to="{name: 'basket'}" class="header-basket" @click="openBasket">
        <span class="header-basket_count">{{countCart}}</span>
      </router-link>
    </div>
  </header>
</template>

<script>
import {computed} from "vue";
import {useStore} from "vuex";
import { RouterLink} from "vue-router";
import Logo from "@/components/Logo.vue";
export default {
  name: "HeaderComponent",
  components: {
    Logo,
    RouterLink
  },
  setup() {
    const store = useStore();
    const countCart = computed(() => store.getters.BASKET_CART_COUNT)
    // const router = useRouter()
    const openBasket = () => {
      if (countCart.value) {
        return {name: 'basket'}
        // router.push({
        //   name: 'basket'
        // })
        // console.log(router.push('/'))
        // store.commit('UPDATE_IS_OPEN_BASKET', true);
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