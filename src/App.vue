<template>
    <header class="app__header">
        <nav class="container">
            <ul>
                <li>
                    <button v-if="this.$route.path === '/profile'">
                        <router-link to="/">Log Out</router-link>
                    </button>
                    <button v-else @click="handleClick">
                        <router-link to="/profile"> Enter Profile</router-link>
                    </button>
                </li>
            </ul>
        </nav>
    </header>
    <router-view />
</template>
<script>
export default {
    methods: {
        handleClick() {
            this.$store.dispatch("fetchBeer");
        },
    },
};
</script>
<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
body {
    height: 1px;
    min-height: 100vh;
    background-image: url("@/assets/bender.png");
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 600px;
}
.app__header {
    height: 65px;
    background: orange;
    position: sticky;
    top: 0px;
    display: flex;
    align-items: center;

    nav {
        ul {
            li {
                list-style: none;

                button {
                    border: none;
                    border-radius: 5px;
                    a {
                        display: inline-block;
                        padding: 10px 20px;
                        border: none;
                        border-radius: inherit;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
.container {
    max-width: 1200px;
    margin: 0 auto;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

@media screen and (max-height: 400px) {
    .app__header {
        position: static;
    }
}
</style>
