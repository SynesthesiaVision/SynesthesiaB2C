<template>
    <div class="raizLogin">
        <div class="left"></div>
        <div class="right">
            <form action="">
                <h2>Entre com sua conta</h2>

                <label for="email">
                    <span>Email</span>
                    <input type="email" name="email" id="email">
                </label>

                <label for="password">
                    <span>Senha</span>
                    <input type="password" name="password" id="password">
                </label>

                <button type="submit" class="btnSignIn">Entrar</button>
            </form>

            <button class="forgot-password btnStyleSignIn">
                <a href="#">Esqueceu sua senha?</a>
            </button>

            <span>
            </span>

            <button class="btnStyleSignIn">
                <router-link to="/cadastro">Não tem uma conta? Cadastre-se</router-link>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "SignInVision",
    components: {
        // NavigationVision
    },
}
</script>

<style scoped>
html,
.raizLogin {
    height: 100%;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
}

.raizLogin {
    display: flex;
    overflow: hidden;
}

.left {
    height: 100vh;
    width: 50%;
    background-image: url('../assets/images/backgroundLogin.png');
    background-size: cover;
    background-repeat: no-repeat;
}

.right {
    width: 50%;

    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
}

.right a {
    color: black;
    text-decoration: none;
    font-weight: bold;
    margin: 2em;
}

.right>span {
    font-weight: bold;
    display: flex;
    background-image: url('../assets/images/imgFormLogin.png');
    background-size: contain;
    background-repeat: no-repeat;
    width: 20em;
    height: 3em;
    user-select: none;
}

form {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

form h2 {
    text-align: center;
    font-size: 2em;
    margin: 0;
}

label {
    display: flex;
    flex-direction: column;
}

label span {
    font-weight: bold;
    margin-bottom: 0.3em;
    margin-top: 1.5em;
    font-size: 1.4em;
}

label input {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    width: 25em;
    padding: 0.6em;
    font-size: 1.1em;
}

.btnSignIn {
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 1em;
    padding: 0.7em;
    font-size: 1.1em;
    cursor: pointer;
}

.btnStyleSignIn {
    background: none;
    color: #000;
    font-weight: bold;
    border: none;
    margin: 2em;
    font-size: 1.1em;
}

.btnStyleSignIn:hover {
    opacity: 0.8;
    transition: 0.9s;
}
</style>