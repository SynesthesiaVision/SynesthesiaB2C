<template>
    <div class="raizCadastro">
        <div class="left">

            <img src="../assets/images/logo-signup.png" width="320px">

            <form action="" @submit.prevent="submitForm">
                <label for="name">
                    <span>Nome</span>
                    <input type="text" name="name" ref="name">
                </label>

                <label for="CPF">
                    <span>CPF</span>
                    <input type="text" name="CPF" ref="CPF">
                </label>

                <label for="number">
                    <span>Número de Celular</span>
                    <input type="tel" name="number" ref="number">
                </label>

                <label for="CEP">
                    <span>CEP</span>
                    <input type="text" name="CEP" ref="CEP">
                </label>

                <label for="address">
                    <span>Endereço</span>
                    <input type="text" name="address" ref="address">
                </label>

                <label for="email">
                    <span>Email</span>
                    <input type="email" name="email" ref="email">
                </label>

                <label for="password">
                    <span>Senha</span>
                    <input type="password" name="password" ref="password">
                </label>

                <button type="submit" class="btnSignUp">Cadastre-se</button>
            </form>
        </div>

        <div class="right"></div>
    </div>
</template>

<script>
export default {
    name: "SignUpVision",
    components: {
        // NavigationVision
    },

    methods: {
        submitForm() {
            const formData = {
                name: this.$refs.name.value,
                password: this.$refs.password.value,
                email: this.$refs.email.value,
                cpf: this.$refs.CPF.value,
                zipCodeBR: this.$refs.CEP.value,
                address: this.$refs.address.value,
                phone: this.$refs.number.value,
                accountStatus: "ACTIVE",
                role: 'CLIENT'
            };

            fetch('http://localhost:4000/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(formData)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro na requisição: ${response.status} - ${response.statusText}`);
                    }
                    return response.text().then(text => {
                        return text ? JSON.parse(text) : {};
                    });
                })
                .then(data => {
                    console.log('Resposta da API:', data);
                })
                .catch(error => {
                    console.error('Erro na requisição:', error);
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