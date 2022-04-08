<template>
    <div class="profile">
        <h2>Profile</h2>
        <div class="profile__card">
            <img :src="user.avatarUrl" @error="setAltImg" />
            <div class="info">
                <p><span class="bold">Name:</span> {{ user.name }}</p>
                <p><span class="bold">Age:</span> {{ user.age }}</p>
                <p><span class="bold">Position:</span> {{ user.position }}</p>
            </div>
        </div>
        <recommended-beer />
        <button @click="handleClick">Recommend new beer</button>
    </div>
</template>

<script>
import RecommendedBeer from "./RecommendedBeer.vue";
import { mapState } from "vuex";
export default {
    components: { RecommendedBeer },
    computed: mapState({
        user: (state) => state.user,
    }),
    methods: {
        handleClick() {
            this.$store.dispatch("fetchBeer");
        },
        setAltImg(e) {
            // e.target.src = this.user.avatarUrl.slice(0, -1) + "5";
            e.target.src = require("../assets/failedProfileImg.jpg");
        },
    },
    mounted() {
        this.$store.dispatch("fetchUser");
        this.$store.dispatch("fetchBeer");
    },
    updated() {
        console.log(this.$store.state.user);
    },
};
</script>

<style lang="scss" scoped>
.profile {
    background-color: hsl(51, 96%, 81%);
    border: 1px solid gray;
    border-radius: 0 20px 20px 0;
    box-shadow: 0px 0px 10px gray;
    padding: 15px;
    margin-top: 20px;
    margin-right: 30px;
    margin-bottom: 30px;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .profile__card {
        padding: 10px 20px;
        display: flex;
        border-radius: 10px;
        flex-direction: row-reverse;
        gap: 15px;

        .info {
            text-align: left;
            font-size: 1.2rem;
            p {
                margin: 1rem 0;
            }

            .bold {
                font-weight: bold;
                text-decoration: underline;
            }
        }
    }

    img {
        background-color: white;
        display: block;
        max-height: 300px;
        max-width: 300px;
        border-radius: 20px;
    }

    button {
        padding: 10px 20px;
        border: 1px solid black;
        border-radius: 5px;

        &:hover {
            cursor: pointer;
            background: orange;
        }

        &:active {
            color: orangered;
        }
    }
}
@media screen and (max-width: 400px) {
    .profile {
        .profile__card {
            img {
                width: 200px;
            }
        }
    }
}
@media screen and (max-width: 700px) {
    .profile {
        .profile__card {
            flex-direction: column;
        }
    }
}
</style>