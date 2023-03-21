<template>
  <div class="menu _f _j-between _mb-0">
    <div class="menu-item _wid-50 _f _j-center _i-center _c-pointer" @click="openPopup">
      <img class="menu-item_pic" src="../assets/catalog-icon.svg" alt="catalog" />
      <span class="menu-item_name">Каталог</span>
    </div>
    <div class="menu-item _wid-50 _f _j-center _i-center _c-pointer" @click="openPopup">
      <img class="menu-item_pic" src="../assets/person-icon.svg" alt="catalog" />
      <span class="menu-item_name">Кабінет</span>
    </div>
  </div>
</template>

<script>
import {useStore} from "vuex";

export default {
  name: "MenuComponent",
  setup() {
    const store = useStore();
    const openPopup = () => store.commit('UPDATE_IS_OPEN_POPUP', true);


    return {
      openPopup
    }
  }
}
</script>

<style scoped>

</style>