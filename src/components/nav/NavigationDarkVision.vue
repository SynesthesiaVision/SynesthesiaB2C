<template>
    <div id="nav-bar">
        <img :src='logoImg' width="50" alt="Logo Synesthesia Vision">
        <ul id="menu-op">
            <li>
                <router-link to="/">INÍCIO</router-link>
            </li>
            <li>
                <router-link to="/sobre">SOBRE</router-link>
            </li>
            <li>
                <router-link to="/educacao">EDUCAÇÃO</router-link>
            </li>
            <li>
                <router-link to="/noticias">NOTÍCIAS</router-link>
            </li>
            <li hidden>
                <a href="">CONTATO</a>
            </li>
        </ul>

        <li>
            <router-link to="/login">COMPRE OS ÓCULOS</router-link>
        </li>
    </div>
</template>

<script>
export default {
    name: "NavigationVision",
    data() {
        return {
            logoImg: require("@/assets/images/logo.png"),
        };
    },
};
</script>

<style scoped>
#nav-bar,
#menu-op {
    /* border: 1px solid black; */
    display: flex;
    flex-direction: row;

    justify-content: space-between;
    align-items: center;
    text-align: center;

    min-height: 5em;
}

li a {
    color: #EEEEEE;
}

#nav-bar {
    padding-left: 5em;
    padding-right: 5em;
    user-select: none;
    background: #000;
}

#menu-op {
    gap: 3em;
}
</style>