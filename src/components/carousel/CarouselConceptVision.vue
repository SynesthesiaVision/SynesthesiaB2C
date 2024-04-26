<template>
    <div class="concepts">
        <div class="eco">
            <button class="btnEco" @click="ecoContainer = true; somBinauralContainer = false; sinesContainer = false;">
                <h3>Ecolocalização</h3>
            </button>
        </div>

        <div class="somB">
            <button class="btnSomB" @click="ecoContainer = false; somBinauralContainer = true; sinesContainer = false;">
                <h3>Som Binaural</h3>
            </button>
        </div>

        <div class="sines">
            <button class="btnSines" @click="ecoContainer = false; somBinauralContainer = false; sinesContainer = true;">
                <h3>Sinestesia</h3>
            </button>
        </div>
    </div>

    <div class="descConcepts">
        <div class="desc-eco" v-if="ecoContainer">
            <div class="txt-eco">
                <p>É um fenômeno que consiste na emissão de ondas sonoras para obter informações sobre o ambiente. Ao emitir um som, ele ecoa pelo local até que retorne para o ponto inicial. Assim, realizamos cálculos para saber a distância aproximada de um canto ao outro.</p>
            </div>

            <div class="img-eco">
                <img :src="imgEco" width="300">
            </div>
        </div>

        <div class="desc-binaural" v-else-if="somBinauralContainer">
            <div class="txt-binaural">
                <p>É um recurso imersivo que localiza o áudio em volta de quem está ouvindo, simulando como um humano consegue captar os sons naturalmente e saber sua origem.</p>
            </div>

            <div class="img-binaural">
                <img :src="imgBinaural" width="275">
            </div>
        </div>

        <div class="desc-sinestesia" v-else>
            <div class="txt-sinestesia">
                <p>É a relação de planos sensoriais diferentes: por exemplo, o gosto com o cheiro, ou a visão com o tato. O termo é usado para descrever uma figura de linguagem e uma série de fenômenos provocados por uma condição neurológica.</p>
            </div>

            <div class="img-sinestesia">
                <img :src="imgSinestesia" width="250">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "CarouselConceptVision",
    data() {
        return {
            ecoContainer: true,
            somBinauralContainer: false,
            imgEco: require("@/assets/images/ecolocalizacao.png"),
            imgBinaural: require("@/assets/images/sombinaural.png"),
            imgSinestesia: require("@/assets/images/sinestesia.png"),
        };
    },
    methods: {
        toggleDiv() {
            if (this.ecoContainer) {
                this.ecoContainer = false;
                this.somBinauralContainer = true;
            } else if (this.somBinauralContainer) {
                this.somBinauralContainer = false;
            } else {
                this.ecoContainer = true;
            }
        }
    }
}
</script>

<style scoped>
h3 {
    padding: 0;
}

.concepts {
    display: flex;
    justify-content: space-between;
    margin-top: 2em;
}

.concepts button {
    padding: 1.5em 5em 1.5em 5em;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 0.95em;
    border-radius: 5px 5px 0 0;
}

.eco,
.somB,
.sines {
    display: flex;
    flex-direction: column;
}

.btnEco {
    background-color: var(--rosaRoxeado);
}

.btnSomB {
    background-color: var(--azulClaro);
}

.btnSines {
    background-color: var(--rosaClaro);
}

.desc-eco, .desc-binaural, .desc-sinestesia {
    border: 5px solid var(--rosaRoxeado);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    padding: 2em;
    height: 40vh;
}

.desc-binaural {
    border: 5px solid var(--azulClaro) !important;
}

.desc-sinestesia {
    border: 5px solid var(--rosaClaro) !important;
}

.txt-eco, .txt-binaural, .txt-sinestesia {
    width: 45%;
    text-align: justify;
    font-size: 1.4em;
    font-weight: bold;
}

</style>