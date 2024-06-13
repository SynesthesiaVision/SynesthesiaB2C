<template>
    <div>
        <NavigationVision />
        <h2>PERSONALIZE SEUS ÓCULOS</h2>
        <div id="containerBuy">
            <div class="iconGlasses">
                <i :class="iconClass" :style="iconStyle"></i>
            </div>
            <form id="formBuy">
                <div class="labelFormBuy">
                    <label for="color">Cor</label><br>
                    <select name="color" id="color" v-model="selectedColor">
                        <option value="black">Preto</option>
                        <option value="white">Branco</option>
                        <option value="blue">Azul</option>
                        <option value="red">Vermelho</option>
                        <option value="pink">Rosa</option>
                    </select>
                </div>

                <div class="labelFormBuy">
                    <label for="size">Tamanho</label><br>
                    <select name="size" id="size" v-model="selectedSize">
                        <option value="p">Pequeno</option>
                        <option value="m">Médio</option>
                        <option value="g">Grande</option>
                    </select>
                </div>

                <button type="submit">COMPRAR</button>
            </form>
        </div>
        <FooterVision />
    </div>
</template>

<script>
import NavigationVision from "@/components/nav/NavigationVision.vue";
import FooterVision from "@/components/nav/FooterVision.vue";

export default {
    name: "MainVision",
    components: {
        NavigationVision,
        FooterVision,
    },
    data() {
        return {
            selectedColor: "black",
            selectedSize: "m",
            iconClass: "fa-solid fa-glasses",
        };
    },
    computed: {
        iconStyle() {
            return {
                color: this.getColor(this.selectedColor),
                fontSize: this.getFontSize(this.selectedSize),
            };
        },
    },
    methods: {
        getFontSize(size) {
            switch (size) {
                case "p":
                    return "5em";
                case "m":
                    return "7em";
                case "g":
                    return "10em";
                default:
                    return "7em";
            }
        },
        getColor(color) {
            switch (color) {
                case "black":
                    return "#000";
                case "white":
                    return "#d0d0d0";
                case "blue":
                    return "#0869c9";
                case "red":
                    return "#9f2020";
                case "pink":
                    return "#e0169d";
                default:
                    return "black";
            }
        },
    },
};
</script>

<style scoped>
#containerBuy {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 80vh;
}

#formBuy {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10em;
}

#formBuy button {
    margin: 1em
}

.iconGlasses {
    padding: 7em;
    border-radius: 5px;
    text-align: center;
    display: flex;
    justify-content: center;
}

.fa-glasses {
    transition: color 0.3s, font-size 0.3s;
    position: absolute;
    margin-top: -0.5em;
}
</style>
