<template>
    <div class="top-element">
        <div id="whitebg"></div>
        <div id="blackbg" :style="{ width: result + '%' }"></div>
        <div id="gradient-bar"></div>
        <div class="content d-flex flex-column justify-content-center align-items-center">
            <h1 class="headline display-1">Das Diskriminierungs Barometer</h1>
            <button class="start-btn " @click="startAnimation">
                <h3>Start &rarr;</h3>
            </button>

        </div>
    </div>
</template>
  
<script>
export default {

    data() {
        return {
            result: 0,
        };
    },
    methods: {
        startAnimation() {
            if (this.result < 50) {
                this.result = 100
            } else {
                this.result = 0
            }

        }
    }
};
</script>
  
<style scoped>
/* button.outlined:{
  background: rgba(var(--primaryColor-rgb), 0.15);
} */
.top-element {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
}

#whitebg {
    background: white;
    width: 100%;
    height: 100vh;
    z-index: 1;
    position: absolute;
}

#blackbg {
    background: black;
    /* width: 90%; */
    height: 100vh;
    z-index: 2;
    position: absolute;

    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 3s;
}

#gradient-bar {
    background-image: linear-gradient(to right,
            #4846F0 25%,
            #F0694A);
    mix-blend-mode: screen;
    width: 100%;
    height: 100vh;
    z-index: 4;
    position: absolute;
    /* so that the button with the lower z-index remains clikable */
    pointer-events: none;
}

.content {
    max-width: 90rem;
    margin: auto;
}

.headline{
    mix-blend-mode: difference;
    color: white;
    z-index: 3;
    /*das muss noch responsive */
    font-size: 150px;
    font-weight: 500;
    text-transform: uppercase;
}

.start-btn {
    mix-blend-mode: difference;
    color: white;
    background-color: transparent;
    z-index: 3;
    border: 1px solid white;
    border-radius: 20px;
    padding: 0.5rem 0.75rem;
    font: inherit;
    cursor: pointer;
    
    text-transform: uppercase;
}

.start-btn>h3 {
    margin: 0;
    font-weight: 300;
}

.start-btn:hover {
    mix-blend-mode: difference;
    color: black;
    background-color: white;
    z-index: 3;
    border: 1px solid white;
    border-radius: 20px;
}


</style>