import { createStore } from "vuex";
import coachesModules from "./modules/coaches/index.js";
import requestModule from "./modules/requests/index.js";

const store = createStore({
    modules: {
        coaches: coachesModules,
        requests: requestModule
    },
    state() {
        return {
            userId: 'c3',
        }
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;