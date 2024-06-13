<template>
    <div class="raizCadastro">
        <div class="left">

            <img src="../assets/images/logo-signup.png" width="320px">

            <form action="" @submit.prevent="submitForm">
                <label for="name">
                    <span>Nome</span>
                    <input type="text" name="name" ref="name" v-model="name">
                </label>

                <label for="cpf">
                    <span>CPF</span>
                    <input type="text" name="cpf" ref="cpf" v-model="cpf">
                </label>

                <label for="phone">
                    <span>Número de Celular</span>
                    <input type="tel" name="phone" ref="phone" v-model="phone">
                </label>

                <label for="zipCodeBR">
                    <span>CEP</span>
                    <input type="text" name="zipCodeBR" ref="zipCodeBR" v-model="zipCodeBR">
                </label>

                <label for="address">
                    <span>Endereço</span>
                    <input type="text" name="address" ref="address" v-model="address">
                </label>

                <label for="email">
                    <span>Email</span>
                    <input type="email" name="email" ref="email" v-model="email">
                </label>

                <label for="password">
                    <span>Senha</span>
                    <input type="password" name="password" ref="password" v-model="password">
                </label>

                <button type="submit" class="btnSignUp" @click="enviarFormulario">Cadastre-se</button>
            </form>
        </div>

        <div class="right"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            password: '',
            email: '',
            cpf: '',
            zipCodeBR: '',
            address: '',
            phone: ''
        };
    },
    methods: {
        enviarFormulario() {
            const url = 'http://localhost:18080/api-V1/user/create';
            // const url = 'http://200.133.17.24:4000/api-V1/user/create';
            // const url = 'http://192.168.0.77:18080/api-V1/user/create';
            const dadosDoFormulario = {
                name: this.name,
                password: this.password,
                email: this.email,
                cpf: this.cpf,
                zipCodeBR: this.zipCodeBR,
                address: this.address,
                phone: this.phone,
            };
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dadosDoFormulario)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Ocorreu um erro ao enviar a solicitação.');
                    }
                    console.log('Solicitação enviada com sucesso!');
                    this.$router.push('/login');
                })
                .catch(error => {
                    console.error('Erro:', error.message);
                });
        }
    }
}
</script>

<style scoped>
html,
.raizCadastro {
    height: 100%;
    margin: 0;
    font-family: 'Nunito Sans', sans-serif;
}

.raizCadastro {
    display: flex;
    overflow: hidden;
}

.left {
    width: 50%;
    margin: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

form {
    display: flex;
    flex-direction: column;
}

form label {
    display: flex;
    flex-direction: column;
}

label span {
    font-weight: bold;
    margin-bottom: 0.1em;
    margin-top: 0.3em;
}

label input {
    background-color: #fff;
    border: 1px solid #000;
    border-radius: 3px;
    width: 18em;
    padding: 0.3em;
    font-size: 1.1em;
}

.btnSignUp {
    background-color: purple;
    color: white;
    border: none;
    border-radius: 5px;
    margin-top: 1em;
    padding: 0.7em;
    font-size: 1.1em;
    cursor: pointer;
}

.right {
    height: 100vh;
    width: 50%;
    background-image: url('../assets/images/backgroundCadastro.png');
    background-size: cover;
    background-repeat: no-repeat;
}
</style>