<template>
    <div class="footer-container">
        <div class="footer-icons">
            <div class="footer-icon">
                <a href="https://www.linkedin.com/in/douglas-guacaran" target="_blank"> <i class="fa-brands fa-linkedin"> </i> </a>
            </div>
            <div class="footer-icon">
                <a href="#"> <i class="fa-solid fa-suitcase"></i> </a>
            </div>
        </div>
        <div>
            <p class="footer-container-bottom">Copyright Diseñado por Douglas Guacaran© 2022. Tech Developer, todos los derechos reservados.</p>
        </div>
    </div>
</template>

<script>
export default {
    name:'Footer',


}
</script>

<style>

.footer-container {
    background-color:#000;
    color: #fff;
}

.footer-icons {
    display: flex;
    justify-content: center;
    padding:25px;
}

.footer-icon a{
    color: #fff;
}

.font-icon a i {
    font-size: 55px;

}
.footer-icon {
    border-radius: 5px;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 36px;
    width: 36px;
    background-color:  #6195ff;
}
.footer-container-bottom {
    text-align: center;
    font-size: 10px;
    padding-bottom:40px;
}
</style>