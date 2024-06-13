<template>
    <footer>
        <p><i class="fa-regular fa-copyright" style="color: #ffffff;"></i>
            2024 Synesthesia Vision. All rights reserved</p> <br>
        <a href="mailto:synesthesiavision@recife.ifpe.edu.br">
            <i class="fa-regular fa-envelope" style="color: #ffffff;"></i>
            Entre em contato</a>
    </footer>
</template>

<script>
export default {
    name: "FooterVision"
}
</script>

<style>
footer {
    background-color: var(--preto);
    height: 8em;
    color: white;
    font-weight: lighter;

    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    text-align: center;

    position: relative;

    left: 0;
    bottom: 0;
}

footer a {
    color: white;
}
</style>