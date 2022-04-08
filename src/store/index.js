import { createStore } from "vuex";
import calculateAge from "@/helper/CalculateAge";

const BASE_URL = "https://random-data-api.com/api";

export default createStore({
    state: {
        user: {
            name: "",
            age: "",
            position: "",
            avatarUrl: "",
        },
        beer: {
            brand: "",
            name: "",
            style: "",
            hop: "",
            yeast: "",
            malts: "",
            ibu: "",
            alcohol: "",
            blg: "",
        },
    },
    getters: {},
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setDefaultUser(state) {
            state.user = {
                name: "",
                age: "",
                position: "",
                avatarUrl: require("@/assets/placeholder-user-300x300.png"),
            };
        },
        setBeer(state, beer) {
            state.beer = beer;
        },
    },
    actions: {
        async fetchUser({ commit }) {
            commit("setDefaultUser");
            const res = await fetch(`${BASE_URL}/users/random_user`);
            let {
                avatar: avatarUrl,
                first_name: firstName,
                last_name: lastName,
                date_of_birth: dateOfBirth,
                employment,
            } = await res.json();
            const user = {
                name: `${firstName} ${lastName}`,
                avatarUrl,
                age: calculateAge(dateOfBirth),
                position: employment.title,
            };
            commit("setUser", user);
        },
        async fetchBeer({ commit }) {
            const res = await fetch(`${BASE_URL}/beer/random_beer`);
            const beer = await res.json();
            commit("setBeer", beer);
        },
    },
    modules: {},
});
