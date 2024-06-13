<template>
    <NavigationVision></NavigationVision>

    <h2>SYNESTHESIA NA MÍDIA</h2>

    <div class="card">
        <img v-bind:src="imgFebrace" alt="Imagem da equipe da Febrace 2023" width="300">
        <div class="container-card">
            <h3>FEBRACE 2023</h3>
            <p>A equipe formada por Lucas Alves, Marcelo Henrique e Ryan Gomes apresentaram virtualmente o projeto
                de
                "Desenvolvimento de Placa de Circuito Impresso para Bengala Sensorial" para avaliadores da FEBRACE.
            </p>
            <button class="confira-btn">
                <a href="https://www.instagram.com/p/Cnjn_eVuiQU/?igshid=YmMyMTA2M2Y%3D" target="_blank">
                    <i class="fa-solid fa-globe" style="color: #ffffff;"></i>
                    CONFIRA</a>
            </button>
        </div>
    </div>

    <div class="card">
        <img v-bind:src="imgSynesOfi"
            alt="Imagem do evento Oficinas Synesthesia Vision 2022" width="300" class="inverse">
        <div class="container-card">
            <h3>Oficinas Synesthesia Vision 2022</h3>
            <p>No dia 29/06/2022 a equipe do projeto Oficinas Synesthesia Vison , do Grendes&Labgeo ministrou a
                oficina
                "Utilização de Arduíno para desenvolver tecnologias para o meio ambiente", como parte do evento que
                contempla a Semana do Meio Ambiente do IFPE - Campus Cabo de Santo Agostinho.</p>
            <button class="confira-btn">
                <a href="https://www.instagram.com/p/Cfjw2tNrLzq/?igshid=MDJmNzVkMjY%3D" target="_blank">
                    <i class="fa-solid fa-globe" style="color: #ffffff;"></i>
                    CONFIRA</a>
            </button>
        </div>
    </div>

    <div class="card">
        <img v-bind:src="imgIngreX" alt="Imagem do evento Oficinas Ingrediente X 2022"
            width="300">
        <div class="container-card">
            <h3>Oficinas ingrediente X 2022</h3>
            <p>A oficina ingrediente X visou desenvolver o interesse de estudantes dos anos finais do ensino
                fundamental
                II pela programação de computadores.</p>
            <button class="confira-btn">
                <a href="https://www.instagram.com/p/Caz9vzGLMB2/?igshid=MDJmNzVkMjY%3D" target="_blank">
                    <i class="fa-solid fa-globe" style="color: #ffffff;"></i>
                    CONFIRA</a>
            </button>
        </div>
    </div>

    <div class="card-insta">
        <h3>Quer acompanhar mais conteúdo e ficar por dentro do projeto?</h3>
        <a href="https://www.instagram.com/synesthesiavision" 
        target="_blank">
        <img v-bind:src="iconInstagram" width="30"> <br>
        Nos acompanhe no Instagram 
    </a>
    </div>

    <FooterVision></FooterVision>
</template>

<script>
import NavigationVision from "@/components/nav/NavigationVision.vue"
import FooterVision from "@/components/nav/FooterVision.vue"

export default {
    name: "NewsVision",
    components: {
        NavigationVision,
        FooterVision
    },

    data() {
    return {
      imgFebrace: require("@/assets/images/img_Febrace2023.png"),
      imgIngreX: require("@/assets/images/img_ingredienteX.png"),
      imgSynesOfi: require("@/assets/images/img_synesthesiaOficina.png"),
      iconInstagram: require("@/assets/images/instagram.png"),
    };
  },
}
</script>

<style scoped>
.card,
.card-insta {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-bottom: 3em;
    gap: 1em;
}

.card-insta {
    flex-direction: column;
}

.card-insta img {
    margin: 0.4em;
}

.container-card p {
    width: 25em;
    margin: 1em;
}

h2 {
    margin-bottom: 1em;
}

.confira-btn,
.confira-btn a {
    background-color: var(--roxo);
    color: white;
    border-radius: 4px;
    border: none;
    margin: 1em;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    padding: 1em;
    width: 12em;
}
</style>