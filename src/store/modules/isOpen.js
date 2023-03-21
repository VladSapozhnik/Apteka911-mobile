
export default {
    state: {
        isOpenPopup: false,
        isOpenBasket: false
    },
    mutations: {
        UPDATE_IS_OPEN_POPUP(state, isOpen) {
            state.isOpenPopup = isOpen;
        },
        UPDATE_IS_OPEN_BASKET(state, isOpen) {
            state.isOpenBasket = isOpen;
        }
    },
    getters: {
        IS_OPEN_POPUP(state) {
            return state.isOpenPopup;
        },
        IS_OPEN_BASKET(state) {
            return state.isOpenBasket;
        },
    }
}