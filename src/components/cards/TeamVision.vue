<template>
    <h4>Coordenadores</h4>
    <div class="teachers">
        <div class="cardC teacher1" style="background: linear-gradient(90deg, #FF5757, #8c52ff);">
            <!-- Prof Aida -->

            <div class="containerCardC">
                <img :src="aida" class="imgTeacher">

                <h5>Aida Araújo Ferreira</h5>
                <h5>Doutora em Ciência da Computação</h5>
            </div>

            <div class="socialC">
                <button class="btnLattes">
                    <a href="http://lattes.cnpq.br/8515798754882166" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="https://www.instagram.com/aida.ferreira/" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="mailto:aidaferreira@recife.ifpe.edu.br" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardC teacher2" style="background: linear-gradient(90deg, #8c52ff, #0cc0df);">
            <!-- Prof Gilmar -->

            <div class="containerCardC">
                <img :src="gilmar" class="imgTeacher">

                <h5>Gilmar Brito</h5>
                <h5>Doutor em Geotécnica</h5>
            </div>

            <div class="socialC">
                <button class="btnLattes">
                    <a href="http://lattes.cnpq.br/3706711468701771" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="https://www.instagram.com/gilmar_goncalves_de_brito_/" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="mailto:gilmarbrito@recife.ifpe.edu.br" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardC teacher3" style="background: linear-gradient(90deg, #0cc0df, #ffde59);">
            <!-- Prof Carlos -->

            <div class="containerCardC">
                <img :src="carlos" class="imgTeacher">

                <h5>Carlos Barros</h5>
                <h5>Bacharel em Jogos Digitais</h5>
            </div>

            <div class="socialC">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="https://www.instagram.com/carloslbarros/" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="mailto:carloslbarros@gmail.com" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>
    </div>

    <h4>Bolsistas</h4>
    <div class="students">
        <div class="cardS student1">
            <!-- Aluno Allamy Monteiro -->

            <div class="containerCardS">
                <img :src="allamy" class="imgStudent">

                <h5>Allamy Monteiro</h5>
                <h5>Estudante de ADS</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardS student2">
            <!-- Aluna Caroline Medeiros -->

            <div class="containerCardS">
                <img :src="caroline" class="imgStudent">

                <h5>Caroline Medeiros</h5>
                <h5>Estudante de ADS</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardS student3">
            <!-- Aluno Estevão Pereira -->

            <div class="containerCardS">
                <img :src="estevao" class="imgStudent">

                <h5>Estevão Pereira</h5>
                <h5>Estudante de Mecânica</h5>

            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardS student4">
            <!-- Aluno Felipe Oliveira -->

            <div class="containerCardS">
                <img :src="felipe" class="imgStudent">

                <h5>Felipe Oliveira</h5>
                <h5>Estudante de Eletrônica</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardS student5">
            <!-- Aluno Isaque Domingos -->

            <div class="containerCardS">
                <img :src="isaque" class="imgStudent">

                <h5>Isaque Domingos</h5>
                <h5>Estudante de Eletrônica</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardS student6">
            <!-- Aluno Jailson Pessoa -->

            <div class="containerCardS">
                <img :src="jailson" class="imgStudent">

                <h5>Jailson Pessoa</h5>
                <h5>Estudante de Eletrônica</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>


    </div>

    <div class="centerLastCards">
        <div class="cardS student7">
            <div class="containerCardS">
                <img :src="michael" class="imgStudent">

                <h5>Michael Barney</h5>
                <h5>Especialista em IA</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>

        <div class="cardS student8">
            <div class="containerCardS">
                <img :src="ryan" class="imgStudent">

                <h5>Ryan Morais</h5>
                <h5>Estudante de Eletrônica</h5>
            </div>

            <div class="socialS">
                <button class="btnLattes">
                    <a href="#" target="_blank">
                        <img :src="iconLattes" width="30">
                    </a>
                </button>

                <button class="btnInstagram">
                    <a href="#" target="_blank">
                        <img :src="iconInstagram" width="30">
                    </a>
                </button>

                <button class="btnEmail">
                    <a href="#" target="_blank">
                        <img :src="iconEmail" width="30">
                    </a>
                </button>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    name: "TeamVision",

    data() {
        return {
            iconLattes: require("@/assets/images/lattes.png"),
            iconInstagram: require("@/assets/images/btn-instagram.png"),
            iconEmail: require("@/assets/images/gmail.png"),
            aida: require("@/assets/images/aida.png"),
            gilmar: require("@/assets/images/gilmar.png"),
            carlos: require("@/assets/images/carlos.png"),
            allamy: require("@/assets/images/allamy.png"),
            caroline: require("@/assets/images/caroline.png"),
            estevao: require("@/assets/images/estevao.png"),
            felipe: require("@/assets/images/felipe.png"),
            isaque: require("@/assets/images/isaque.png"),
            jailson: require("@/assets/images/jailson.png"),
            michael: require("@/assets/images/michael.png"),
            ryan: require("@/assets/images/ryan.png"),
        };
    },
}
</script>

<style scoped>
h4 {
    font-size: 1.5em;
    margin-top: 1em;
    margin-bottom: 0.5em;
    text-align: center;
}

h5 {
    color: #fff;
    font-size: 1.2em;
}

.teachers {
    display: flex;
    justify-content: space-between;
    margin-bottom: 5em;
}

.cardC {
    width: 340px;
    height: 460px;
    border-radius: 10px;
}

.containerCardC,
.containerCardS {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.containerCardC h5:last-of-type,
.containerCardS h5:last-of-type {
    font-size: 1em;
    width: 80%;
}

.imgTeacher,
.imgStudent {
    width: 280px;
    height: 300px;
    border-radius: 5px;
    margin-top: 1.5em;
    margin-bottom: 1em;
    object-fit: cover;
}

.students {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    justify-items: center;
    gap: 2em
}

.cardS {
    width: 340px;
    height: 460px;
    border-radius: 5px;
    background-color: #2F4858;
}

.centerLastCards {
    display: flex;
    justify-content: space-evenly;
    margin: 2em
}

.socialC,
.socialS {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
}

.socialC {
    margin-top: 1em;
}

.socialS {
    margin-top: 0.4em;
}

.btnLattes,
.btnInstagram,
.btnEmail {
    background: none;
    border: none;
    border-radius: 50%;
}
</style>