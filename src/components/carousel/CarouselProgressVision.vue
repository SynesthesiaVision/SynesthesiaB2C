<template>
    <div class="progress">
        <div class="mark-i">
            <button class="btnMarkI" @click="markI = true; markII = false; markIII = false; markIV = false">
                <h3>Mark I</h3>
            </button>
        </div>
        <div class="mark-ii">
            <button class="btnMarkII" @click="markI = false; markII = true; markIII = false; markIV = false">
                <h3>Mark II</h3>
            </button>
        </div>
        <div class="mark-iii">
            <button class="btnMarkIII" @click="markI = false; markII = false; markIII = true; markIV = false">
                <h3>Mark III</h3>
            </button>
        </div>
        <div class="mark-iv">
            <button class="btnMarkIV" @click="markI = false; markII = false; markIII = false; markIV = true">
                <h3>Mark IV</h3>
            </button>
        </div>
    </div>

    <div class="descProgress">
        <div class="desc-markI" v-if="markI">
            <h4>Nossa prova de conceito!</h4>
            <div class="container-markI">
                <div class="txt-markI">
                    <p>Desenvolvido em meados de 2015 utilizando componentes eletrônicos baratos em uma sucata de óculos
                        escuro. Os feedbacks dos cegos que testaram o nosso equipamento foram muito positivos.</p>
                </div>

                <div class="carousel-markI">
                    <img :src="oculosMarkI">
                </div>
            </div>
        </div>

        <div class="desc-markII" v-else-if="markII">
            <h4>Buscamos nos aperfeiçoar!</h4>
            <div class="container-markII">
                <div class="txt-markII">
                    <p>Esse se tornou um protótipo que utilizava óculos impresso em impressora 3D, componentes
                        eletrônicos
                        mais precisos, um algoritmo de geração de som binaural muito melhor e um aplicativo que fornece
                        informações complementares para o usuário.</p>
                </div>

                <div class="carousel-markII">
                    <img :src="oculosMarkII">
                </div>
            </div>
        </div>

        <div class="desc-markIII" v-else-if="markIII">
            <h4>Evoluimos bastante!</h4>
            <div class="container-markIII">
                <div class="txt-markIII">
                    <p>Seguindo com o aperfeiçoamento e com a proposta da produção comercial desse equipamento. Esse
                        utiliza
                        placa de circuito impresso! O que o torna muito mais leve, confortável e bonito por eliminar a
                        maior
                        parte dos fios.</p>
                </div>

                <div class="carousel-markIII">
                    <img :src="oculosMarkIII">
                </div>
            </div>
        </div>

        <div class="desc-markIV" v-else>
            <h4>Fase atual.</h4>
            <div class="container-markIV">
                <div class="txt-markIV">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi neque nihil, magnam ipsum
                        provident
                        ad dolore dolorem temporibus doloribus labore fugiat deleniti numquam id tempora, corporis earum
                        magni minima! Corporis.</p>
                </div>

                <div class="carousel-markIV">
                    <img :src="oculosMarkIV">
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "CarouselProgressVision",
    data() {
        return {
            activeOption: 'markI',
            markI: true,
            markII: false,
            markIII: false,
            markIV: false,
            oculosMarkI: require("@/assets/images/oculos_markI.png"),
            oculosMarkII: require("@/assets/images/oculos_markII.png"),
            oculosMarkIII: require("@/assets/images/oculos_markIII.png"),
            oculosMarkIV: require("@/assets/images/oculos_markIV.png"),
        };
    },
    methods: {
        toggleDiv(option) {
            if (option === 'markI') {
                this.activeOption = 'markI';
                this.markI = true;
                this.markII = false;
                this.markIII = false;
                this.markIV = false;
            } else if (option === 'markII') {
                this.activeOption = 'markII';
                this.markI = false;
                this.markII = true;
                this.markIII = false;
                this.markIV = false;
            } else if (option === 'markIII') {
                this.activeOption = 'markIII';
                this.markI = false;
                this.markII = false;
                this.markIII = true
                this.markIV = false;
            } else if (option === 'markIV') {
                this.activeOption = 'markIV';
                this.markI = false;
                this.markII = false;
                this.markIII = false;
                this.markIV = true;
            }
        }
    }
}
</script>

<style scoped>
h3 {
    padding: 0;
}

h4 {
    font-size: 2em;
    margin: 1em;
    text-align: center;
}

.progress {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
}

.progress button {
    padding: 1em 5em 1em 5em;
    border: none;
    cursor: pointer;
    color: #fff;
    font-weight: bold;
    font-size: 0.95em;
    border-radius: 5px 5px 0 0;
    border-bottom: 1px solid #ffffffb0;
}

.descProgress {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.mark-i,
.mark-ii,
.mark-iii,
.mark-iv {
    display: flex;
    flex-direction: column;
}

.container-markI,
.container-markII,
.container-markIII,
.container-markIV {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.carousel-markI,
.carousel-markII,
.carousel-markIII,
.carousel-markIV {
    width: 40%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.carousel-markI img,
.carousel-markII img,
.carousel-markIII img,
.carousel-markIV img {
    width: 440px;
    height: 310px;
    border-radius: 3px;
}

.txt-markI,
.txt-markII,
.txt-markIII,
.txt-markIV {
    width: 30%;
    text-align: justify;
    font-size: 1.4em;
    font-weight: bold;
}

.btnMarkI {
    background-color: var(--rosaAlt);
}

.btnMarkII {
    background-color: var(--azulClaro);
}

.btnMarkIII {
    background-color: var(--rosaClaro);
}

.btnMarkIV {
    background-color: var(--roxo);
}

.desc-markI,
.desc-markII,
.desc-markIII,
.desc-markIV {
    height: 70vh;
    color: #fff;
    display: flex;
    flex-direction: column;
}

.desc-markI {
    background: url(../../assets/images/markI.png);
}

.desc-markII {
    background: url(../../assets/images/markII.png);
}

.desc-markIII {
    background: url(../../assets/images/markIII.png);
}

.desc-markIV {
    background: url(../../assets/images/markIV.png);
}
</style>