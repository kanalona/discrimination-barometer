<template>
    <div class="start">
        <div id="whitebg"></div>
        <div id="blackbg" :style="{ width: result + '%' }"></div>
        <div id="gradient-bar"></div>
        <div class="content d-flex flex-column justify-content-center align-items-center">


            <Transition name="fade" mode="out-in">
                <div v-if="!showNewText" class="text title my-4"><span class="strike-through"
                        :class="{ 'strike-through-active': isStriked }">Der <br />AMS-Algorithmus</span></div>

                <div v-else class="text title my-4">Das <br />Diskriminierungs <br />Barometer</div>
            </Transition>

            <button v-show="buttonVisible" class="start-btn my-4" @click="startAnimation">
                <p class="h4">Start &rarr;</p>
            </button>

        </div>
    </div>
</template>
  
<script>

export default {
    emits: ['scrollTo'],
    data() {
        return {
            result: 0,
            isStriked: false,
            showNewText: false,
            text: "Der AMS-Algoritmus",
            firstTime: true,
            buttonVisible: true
        };
    },
    methods: {
        startAnimation() {
            if (this.firstTime) {
                //scroll to top
                this.$emit("scrollTo", "start");

                // disable scrolling until anmation is done
                setTimeout(() => document.body.classList.add("disable-scroll"), 500);

                //start button invisble
                this.buttonVisible = false;

                //STRIKE THROUGH
                // lasts 2sec
                this.isStriked = true;

                //Fade In-Out of Text
                // starts at 2sec, lasts 2sec = sec
                setTimeout(() => this.showNewText = true, 2000);

                // starts at 2sec, lasts ? = sec
                setTimeout(() => this.result = 100, 2000);

                //starts at 5sec, lasts ?
                setTimeout(() => { this.$emit("scrollTo", "intro") }, 5000);

                //start button visible
                //activate scroll
                setTimeout(() => {
                    this.buttonVisible = true;
                    document.body.classList.remove("disable-scroll")
                }, 5500);

                this.firstTime = false;
            } else {
                this.$emit("scrollTo", "intro");
            }



        },

    }
};
</script>
  
<style scoped>
.title {
    font-size: clamp(2.6rem, 6.485vw + 4vh + -1.175rem, 8rem);
    line-height: clamp(2.6rem, 9.592vw + 4vh +-2.293rem, 9.6rem);
}

/* .title>*, .title {
    line-height: 80%;
} */

.smaller-font {
    font-size: clamp(2.4rem, -0.495rem + 9.709vw, 8rem);
}

.content {
    /* max-width: 70rem; */
    margin: auto;
    /* max-width: calc(100% - 10em);   */
}

.text {
    mix-blend-mode: difference;
    color: white;
    z-index: 3;
    /*das muss noch responsive */
    /* font-size: 150px; */
    font-weight: 500;
    text-transform: uppercase;
    min-height: 66%;
}

.start {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
}

/*Gradient Bar */
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
    transition-duration: 2s;
}

#gradient-bar {
    background-image: linear-gradient(to right,
            var(--primaryColor) 25%,
            var(--secondaryColor));
    mix-blend-mode: screen;
    width: 100%;
    height: 100vh;
    z-index: 4;
    position: absolute;
    /* so that the button with the lower z-index remains clikable */
    pointer-events: none;
}

/*Text Content */




/*ANIMATIONS */
/*Fading */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1000ms;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
    opacity: 1;
}

/*Strike Through */
.strike-through {
    text-decoration: none;
    background-image: linear-gradient(#fff, #fff);
    background-repeat: no-repeat;
    background-position: center left;
    background-size: 0% 16px;
    transition: background-size 2000ms ease-in-out;
}

/* .strike-through-active {
    background-size: 100% 16px;
} */

@media (max-width: 576px) {
    .strike-through {
        background-size: 0% 5px;
    }

    .strike-through-active {
        background-size: 100% 5px;
        ;
    }
}

@media (min-width: 576px) {
    .strike-through {
        background-size: 0% 6px;
    }

    .strike-through-active {
        background-size: 100% 6px;
        ;
    }
}

@media (min-width: 768px) {
    .strike-through {
        background-size: 0% 8px;
    }

    .strike-through-active {
        background-size: 100% 8px;
        ;
    }
}

@media (min-width: 992px) {
    .strike-through {
        background-size: 0% 10px;
    }

    .strike-through-active {
        background-size: 100% 10px;
        ;
    }
}

@media (min-width: 1200px) {
    .strike-through {
        background-size: 0% 14px;
    }

    .strike-through-active {
        background-size: 100% 14px;
        ;
    }
}

@media (min-width: 1400px) {
    .strike-through {
        background-size: 0% 16px;
    }

    .strike-through-active {
        background-size: 100% 16px;
        ;
    }
}

/*Start-Button */
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

.start-btn>* {
    margin: 0;
    font-weight: 300;
}

.start-btn:hover,
.start-btn:active {
    mix-blend-mode: difference;
    color: black;
    background-color: white;
    z-index: 3;
    border: 1px solid white;
    border-radius: 20px;
}
</style>

