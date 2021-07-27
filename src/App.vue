<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/rough">Rough</router-link>
        </div>
        <transition mode="out-in" name="page">
            <router-view />
        </transition>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
}

body {
    box-sizing: border-box;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

.page-enter,
.page-leave-to {
    opacity: 0;
    transform: translateY(-30px);
}

.page-enter-active,
.page-leave-active {
    transition: all 0.3s ease;
}

.page-enter-to,
.page-leave {
    opacity: 1;
    transform: translateY(0);
}
</style>
