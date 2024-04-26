<template>
  <NavigationVision></NavigationVision>
  
  <!-- card inicial -->
  <div class="presentation">
    <img v-bind:src="logoImg" width="500" alt="Logo Synesthesia Vision" />
    <img v-bind:src="oculosImg" width="600" alt="Óculos Synesthesia Vision" />
  </div>

  <!-- descrição do projeto -->
  <div class="card">
    <div class="project">
      <img :src="oculosGifImg" width="500">
      <div class="desc-project">
        <h2>Entenda o projeto</h2>
        <p>Esses óculos não são apenas um acessório! São uma visão de futuro que coloca a independência e a
          mobilidade no centro das atenções. Utilizando tecnologia de áudio binaural de ponta, é possível
          proporcionar uma experiência sensorial única, assim permitindo que pessoas cegas naveguem pelo
          mundo com confiança e facilidade.</p>

        <p>Quer entender mais sobre?</p>
        <button class="about-project-btn">
          <a href="/sobre" class="about-project-btn">
            <i class="fa-solid fa-star" style="color: #ffffff;"></i>
            Saiba Mais</a>
        </button>
      </div>
    </div>
  </div>

  <!-- descrição das caracteristicas do óculos como produto -->
  <div class="card">
    <div class="characteristics">
      <h2>Características</h2>
      <div class="card-characteristics">
        <div class="card-desc-chara conf">
          <h3>Confiança e independência</h3>
          <p>Esses óculos não são apenas um acessório, são uma visão de futuro que coloca a independência
            e a mobilidade no centro das atenções. É oferecido uma experiência sensorial única,
            permitindo que pessoas cegas naveguem pelo mundo com confiança e facilidade.</p>
        </div>
        <img :src="indepenImg" width="300">
      </div>

      <div class="card-characteristics">
        <div class="card-desc-chara perso">
          <h3>Personalização</h3>
          <p>Além disso, esses óculos são totalmente personalizáveis, adaptando-se às preferências
            individuais de cada usuário. <br> Escolha cor e tamanho conforme sua necessidade!</p>
        </div>
        <img class="inverse" :src="personaImg" width="300">
      </div>

      <div class="card-characteristics">
        <div class="card-desc-chara tecIno">
          <h3>Tecnologia inovadora</h3>
          <p>Imagine caminhar por ruas movimentadas, atravessar cruzamentos e explorar ambientes
            desconhecidos sem depender de ninguém. Os óculos audiobinaurais usam som tridimensional para
            criar uma imagem sonora do ambiente ao seu redor, guiando-o com precisão por obstáculos e
            direções. <br> É como ter um guia pessoal invisível a cada passo!</p>
        </div>
        <img :src="tecnoBiImg" width="300">
      </div>
    </div>
  </div>

  <CarouselVision></CarouselVision>
  <FooterVision></FooterVision>
</template>

<script>
import NavigationVision from "@/components/nav/NavigationVision.vue"
import CarouselVision from "@/components/carousel/CarouselVision.vue"
import FooterVision from "@/components/nav/FooterVision.vue"

export default {
  name: "HomeVision",
  components: {
    NavigationVision,
    CarouselVision, 
    FooterVision
  },

  data() {
    return {
      logoImg: require("@/assets/images/logoAlt.png"),
      oculosImg: require("@/assets/images/oculos.png"),
      oculosGifImg: require("@/assets/images/oculos.gif"),
      indepenImg: require("@/assets/images/independencia.png"),
      personaImg: require("@/assets/images/personalizacao.png"),
      tecnoBiImg: require("@/assets/images/tecnologiabinaural.png"),
    };
  },
};
</script>

<style scoped>
.presentation,
.characteristics,
.buy,
.midia {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 5em;
  padding-bottom: 5em;
}

/* direcionamento pra descrição do projeto */
.project {
  display: flex;
  justify-content: center;
  align-items: center;
}

.desc-project {
  text-align: center;
}

.desc-project h2 {
  margin-bottom: 0.5em;
}

.desc-project p {
  font-size: 1.1em;
  width: 40em;
  margin-bottom: 0.5em;
}

.desc-project p:last-of-type {
  font-size: 1.2em;
  text-align: center;
}

/* botão do saiba mais */
.about-project-btn {
  background-color: var(--rosaEscuro);
  color: white;
  border-radius: 4px;
  border: none;
  margin: 1em;
  font-family: 'Nunito Sans', sans-serif;
  font-size: 1em;
  padding: 1em;
}

.about-project-btn:hover {
  color: white;
  opacity: 0.9;
  transition: 0.5s;
}

/* caracteristicas */
.characteristics {
  gap: 2em;
}

.characteristics h2 {
  font-size: 2.5em;
}

.card-characteristics {
  display: flex;
  align-items: center;
  gap: 3em;
  text-align: center;
  font-size: 1.2em;
}

.card-desc-chara {
  order: 2;
}

.card-desc-chara p {
  font-size: 1.1em;
  width: 26em;
}

.conf h3 {
  color: #b7569d;
}

.perso h3 {
  color: #3e977f;
}

.tecIno h3 {
  color: #e14a4f;
}
</style>