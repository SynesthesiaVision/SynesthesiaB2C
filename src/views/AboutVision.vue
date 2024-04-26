<template>
    <NavigationDarkVision></NavigationDarkVision>
    <div class="black-screen">
        <h2>Como seriam suas vidas se tudo que enxergassem <br>
            do mundo fosse apenas uma tela preta? </h2>
        <button @click="scrollToSection()">
            <i class="fa-solid fa-arrow-down"></i>
        </button>
    </div>

    <div class="descIdea">
        <div id="idea" class="descContext">
            <p>Pensando nessa situação, os</p>
            <div class="descSynesthesia">
                <h3>Óculos Sensoriais para Cegos - Synesthesia Vision</h3>
                <img :src="logoImg">

            </div>
            <p>buscam proporcionar ao cego autonomia e segurança no seu deslocamento, através do desenvolvimento de
                uma tecnologia, que é complementar às bengalas, tornando assim sua experiência de vida mais independente
                e confortável.</p>
        </div>

        <div class="descProblem">
            <div class="title-problem">
                <img :src="iconProblem" width="50">
                <h3>Dor</h3>
            </div>

            <div class="desc-problem">
                <p>A bengala é a tecnologia assistiva mais utilizada pelos cegos por ser segura, barata e também
                    sinalizadora da cegueira. Porém tem uma limitação:</p>
                <p>Não conseguir localizar obstáculos acima da linha da cintura.</p>
                <img :src="imgBengala" width="600">
            </div>
        </div>

        <div class="descConcept">
            <div class="title-concept">
                <img :src="iconConcept" width="50">
                <h3>Conceito</h3>
            </div>

            <div class="desc-concept">
                <p>Diante de tudo isso, buscamos investigar o uso da <a style="color: #b837a2">Ecolocalização</a> e do
                    <a style="color: #9a92fb">Som Binaural</a> como princípios
                    para o desenvolvimento de óculos sensoriais que possibilitem uma espécie de visão <a
                        style="color: #eb8576">Sinestésica</a> do
                    mundo, ou seja, que permita que a audição seja os olhos de um cego.
                </p>
            </div>

            <CarouselConceptVision></CarouselConceptVision>
        </div>

        <div class="descProgress">
            <div class="title-progress">
                <img :src="iconProgress" width="50">
                <h3>Evolução</h3>
            </div>

            <div class="desc-progress">
                <p>O projeto tem vivenciado até então 4 fases.</p>
            </div>

            <CarouselProgressVision></CarouselProgressVision>
        </div>

        <div class="descTeam">
            <div class="title-team">
                <img :src="iconTeam" width="50">
                <h3>Equipe</h3>
            </div>

            <div class="desc-team">
                <p>Conheça a equipe por trás do projeto!</p>
            </div>

            <TeamVision></TeamVision>
        </div>
    </div>

    <FooterVision></FooterVision>
</template>

<script>
import NavigationDarkVision from "@/components/nav/NavigationDarkVision.vue"
import CarouselConceptVision from "@/components/carousel/CarouselConceptVision.vue"
import CarouselProgressVision from "@/components/carousel/CarouselProgressVision.vue"
import TeamVision from "@/components/cards/TeamVision.vue"
import FooterVision from "@/components/nav/FooterVision.vue"

export default {
    name: "AboutVision",
    components: {
        NavigationDarkVision,
        CarouselConceptVision,
        CarouselProgressVision,
        TeamVision,
        FooterVision
    },

    data() {
        return {
            logoImg: require("@/assets/images/logo.png"),
            iconProblem: require("@/assets/images/iconDor.png"),
            iconConcept: require("@/assets/images/iconConceito.png"),
            iconProgress: require("@/assets/images/iconEvolucao.png"),
            iconTeam: require("@/assets/images/iconTime.png"),
            imgBengala: require("@/assets/images/bengala.png"),
        };
    },
    methods: {
        scrollToSection() {
            var ideaSection = document.getElementById('idea');
            if (ideaSection) {
                ideaSection.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
}
</script>

<style scoped>
.black-screen {
    background-color: #000;
    display: flex;
    flex-direction: column;
    height: calc(100vh - 80px);
    justify-content: center;
    align-items: center;
    color: #EEEEEE;
}

.black-screen h2 {
    color: #EEEEEE;
}

.black-screen button {
    border: none;
    background: none;
    color: #fff;
    cursor: pointer;
}

.black-screen i {
    font-size: 2em;
    margin: 1em;
}

/* Ideia */
.descContext {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5em;
    height: 100vh;
}

.descContext p {
    font-size: 1.2em;
}

.descContext p:last-of-type {
    font-size: 1em;
    width: 80%;
    margin: 0 auto;
}

.descContext h3 {
    font-size: 1.5em;
}

/* Pequena descrição do projeto */
.descSynesthesia {
    display: flex;
    justify-content: center;
    gap: 1em;
    margin-top: 18px;
}

.descSynesthesia img {
    width: 55px;
    height: 50px;
}

/* Descrição do problema */
.descProblem {
    padding: 0em 5em 3em 5em;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.desc-problem img {
    display: flex;
    margin: 0 auto;
}

.title-problem,
.title-concept,
.title-progress,
.title-team {
    display: flex;
    font-size: 1.3em;
    gap: 0.7em;
    align-items: center;
    text-align: center;
    padding-bottom: 0.5em;
}

h3 {
    padding: 0;
}

.desc-problem p:first-of-type,
.desc-concept p:first-of-type,
.desc-progress p:first-of-type,
.desc-team p:first-of-type {
    font-size: 1.5em;
    font-weight: bold;
}

.desc-problem p:last-of-type {
    font-size: 1.3em;
    font-weight: bold;
    text-align: center;
    padding: 1em;
}

/* Idealização do projeto */
.descConcept {
    padding: 5em 5em 3em 5em;
}

/* Descrição da evolução */
.descProgress {
    padding: 5em 5em 3em 5em;
}

.descTeam {
    padding: 5em 5em 3em 5em;
}
</style>
