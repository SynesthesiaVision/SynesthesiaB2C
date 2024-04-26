<template>
    <div class="container">
        <h2 class="title-midia">Eventos que o Synesthesia participou</h2>
        <div class="midia">
            <div class="glide">
                <div class="glide__track" data-glide-el="track">
                    <ul class="glide__slides">
                        <li class="glide__slide">
                            <div class="midiaImage1"></div>
                            <div class="desc-event">
                                <h3>FEBRACE 2023</h3>
                                <p>A equipe formada por Lucas Alves, Marcelo Henrique e Ryan gomes apresentaram
                                    virtualmente
                                    o
                                    projeto de Desenvolvimento de placa de circuito impresso para Bengala sensorial
                                    para
                                    avaliadores
                                    da FEBRACE.</p>
                                <p>Quer saber sobre mais eventos que envolveu o projeto e conhecer a equipe por trás
                                    dos
                                    óculos?</p>
                                <button id="midia-btn">
                                    <a href="/noticias">
                                        <i class="fa-solid fa-book-open" style="color: #ffffff;"></i>
                                        Leia Mais</a>
                                </button>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div class="midiaImage2"></div>
                            <div class="desc-event">
                                <h3>Oficinas ingrediente X 2022</h3>
                                <p>A oficina ingrediente X visou desenvolver o interesse de estudantes dos anos
                                    finais do
                                    ensino fundamental II pela programação de computadores.</p>
                                <p>Quer saber sobre mais eventos que envolveu o projeto e conhecer a equipe por trás
                                    dos
                                    óculos?</p>
                                <button id="midia-btn">
                                    <a href="/noticias">
                                        <i class="fa-solid fa-book-open" style="color: #ffffff;"></i>
                                        Leia Mais</a>
                                </button>
                            </div>
                        </li>
                        <li class="glide__slide">
                            <div class="midiaImage3"></div>
                            <div class="desc-event">
                                <h3>Oficinas Synesthesia Vision 2022</h3>
                                <p>No dia 29/06/2022 a equipe do projeto Oficinas Synesthesia Vision, do
                                    Grendes&Labgeo
                                    ministrou a oficina "Utilização de Arduíno para desenvolver tecnologias para o
                                    meio
                                    ambiente", como parte do evento que contempla a Semana do Meio Ambiente do IFPE
                                    - Campus
                                    Cabo de Santo Agostinho.</p>
                                <p>Quer saber sobre mais eventos que envolveu o projeto e conhecer a equipe por trás
                                    dos
                                    óculos?</p>
                                <button id="midia-btn">
                                    <a href="/noticias">
                                        <i class="fa-solid fa-book-open" style="color: #ffffff;"></i>
                                        Leia Mais</a>
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import Glide from '@glidejs/glide'

export default {
    props: {
        title: String,
        items: Array
    },
    mounted() {
        const config = {
            type: 'slider',
            autoplay: 4000,
            focusAt: 'center',
            gap: 70,
            perView: 1
        }
        new Glide('.glide', config).mount()
    }
}

import '@/assets/css/glide.core.min.css';
import '@/assets/css/glide.theme.min.css';
</script>

<style scoped>
/* eventos do projeto / uso do slider */

.midia {
    margin: 0 auto;
    padding: 2em;
    width: 65vw;
}

.title-midia {
    text-align: center;
    font-size: 2em;
    color: var(--preto);
    user-select: none;
}

#midia-btn {
    background-color: var(--roxo);
    border-radius: 4px;
    border: none;
    margin: 1em;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;
    padding: 1em;
    width: 10em;
    cursor: pointer;
}

#midia-btn a {
    color: white;
}

.desc-event {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    width: 40em;
    color: #000;
}

/* imagens do slide */
.midiaImage1,
.midiaImage2,
.midiaImage3 {
    background-size: contain;
    background-repeat: no-repeat;
    width: 400px;
    height: 400px;
}

.midiaImage1 {
    background-image: url('../../assets/images/img_Febrace2023.png');
}

.midiaImage2 {
    background-image: url('../../assets/images/img_ingredienteX.png');
}

.midiaImage3 {
    background-image: url('../../assets/images/img_synesthesiaOficina.png');
}

.desc-event p:first-of-type {
    font-size: 1em;
    width: 30em;
}

.desc-event p:last-of-type {
    font-size: 0.9em;
    width: 25em;
    padding: 1em;
}
.glide__slide {
    display: flex;
    justify-content: center;
    margin: 0 auto;
}
</style>