<template>
    <NavigationVision></NavigationVision>

    <h2>OFICINAS SYNESTHESIA VISION</h2>
    <div class="ebook1">
        <img v-bind:src="ebookManual" width="250">
        <div class="desc-ebook1">
            <h4>Oficina Synesthesia Vision - Manual do Estudante - 1° Edição</h4>
            <p>Material didático desenvolvido pela equipe do projeto Oficinas
                Synesthesia Vision do IFPE Campus Recife. <br> O objetivo desta apostila é a capacitação
                teórica e prática dos estudantes em
                conceitos básicos de eletrônica,
                programação, robótica e prototipagem de
                dispositivos tecnológicos, através da
                realização de Oficinas de Robótica Livre.
                Visamos também a conscientização dos
                participantes em relação à importância
                do desenvolvimento de tecnologias
                assistivas para auxiliar na independência
                de pessoas com necessidades especiais.</p>
            <button class="btnView" id="downloadEbook1">
                <a href="https://drive.google.com/file/d/1qgjVh_dKVJY5ZPUwJ3WlshXVvwGz8Tpe/view?usp=sharing"
                    target="_blank">
                    <i class="fa-solid fa-eye" style="color: #ffffff;"></i>
                    Visualizar</a>
            </button>
        </div>
    </div>

    <div class="ebook2">
        <img v-bind:src="ebookESP" width="250" class="inverse">
        <div class="desc-ebook1">
            <h4>Oficina Synesthesia Vision - Manual do Estudante (ESP32 e Kodular) - 2° Edição</h4>
            <p>Material didático desenvolvido pela equipe do projeto Oficinas
                Synesthesia Vision do IFPE Campus Recife. <br> O objetivo desta apostila é a capacitação
                teórica e prática dos estudantes em
                conceitos básicos de eletrônica,
                programação, robótica e prototipagem de
                dispositivos tecnológicos, através da
                realização de Oficinas de Robótica Livre.
                Visamos também a conscientização dos
                participantes em relação à importância
                do desenvolvimento de tecnologias
                assistivas para auxiliar na independência
                de pessoas com necessidades especiais.</p>
            <button class="btnView" id="downloadEbook2">
                <a href="https://drive.google.com/file/d/16KmSrF4dVy46f5eMk70tRlKxBqz9v7vn/view?usp=sharing"
                    target="_blank">
                    <i class="fa-solid fa-eye" style="color: #ffffff;"></i>
                    Visualizar</a>
            </button>
        </div>
    </div>

    <FooterVision></FooterVision>
</template>

<script>
import NavigationVision from "@/components/nav/NavigationVision.vue"
import FooterVision from "@/components/nav/FooterVision.vue"

export default {
    name: "EducationVision",
    components: {
        NavigationVision,
        FooterVision
    },

    data() {
        return {
            ebookManual: require("@/assets/images/ebook_manualDoEstudante.png"),
            ebookESP: require("@/assets/images/ebook_ESP_Kodular.png"),
        };
    },
}
</script>

<style scoped>
.ebook1,
.ebook2 {
    margin: 3em;
    display: flex;
    justify-content: center;
    align-items: center;
}

.desc-ebook1,
.desc-ebook2 {
    display: flex;
    flex-direction: column;
    width: 30%;
    margin: 1em;
    gap: 1em;
    align-items: center;
}

p {
    text-align: justify
}

.btnView {
    background-color: var(--roxo);
    border-radius: 4px;
    border: none;
    font-family: 'Nunito Sans', sans-serif;
    font-size: 1em;

    padding: 1em;
    width: 10em;
    cursor: pointer;
}

.btnView a {
    color: white
}
</style>