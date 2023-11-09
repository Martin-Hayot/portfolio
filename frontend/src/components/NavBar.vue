<script setup>
import { ref, onMounted } from "vue";

const menu = ref(null);
const menuBtn = ref(null);

onMounted(() => {
    menu.value = document.getElementById("menu");
    menuBtn.value = document.getElementById("menu-btn");
    menuBtn.value.addEventListener("click", toggleMenu);
});

const toggleMenu = () => {
    menu.value.classList.toggle("hidden");
    menu.value.classList.toggle("flex");
    menuBtn.value.classList.toggle("open");
};
</script>

<template>
    <nav
        class="flex items-center text-2xl justify-between text-neutral-200 h-20"
    >
        <a
            href="/"
            class="hover:scale-110 z-30 text-3xl transition-all duration-200 hover:text-white"
            >Martin Hayot</a
        >
        <div class="hidden md:flex h-10 md:space-x-16 md:pr-20">
            <a
                href="/projects"
                class="hover:scale-110 transition-all duration-200 hover:text-white"
                >Projects</a
            >
            <a
                href="/blog"
                class="hover:scale-110 transition-all duration-200 hover:text-white"
                >Blog</a
            >
            <a
                href="/about"
                class="hover:scale-110 transition-all duration-200 hover:text-white"
                >About me</a
            >
            <a
                href="/contact"
                class="hover:scale-110 transition-all duration-200 hover:text-white"
                >Contact me</a
            >
        </div>
        <div class="md:hidden mt-2">
            <button
                class="z-40 block hamburger md:hidden focus:outline-none"
                id="menu-btn"
                type="button"
            >
                <span class="hamburger-top"></span>
                <span class="hamburger-middle"></span>
                <span class="hamburger-bottom"></span>
            </button>
        </div>
    </nav>
    <!--Mobile Menu -->
    <div
        id="menu"
        class="absolute z-20 hidden top-0 bottom-0 left-0 flex-col self-end w-full min-h-screen py-1 pt-40 pl-12 space-y-3 text-xl text-white uppercase bg-black"
    >
        <a href="/" class="hover:text-red-500">Home</a>
        <a href="/projects" class="hover:text-red-500">Projects</a>
        <a href="/about" class="hover:text-red-500">About me</a>
        <a href="/contact" class="hover:text-red-500">Contact me</a>
    </div>
</template>

<style scoped>
@keyframes menu-transition {
    0% {
        transform: translateX(100%);
    }
    100% {
        transform: translateX(0);
    }
}

#menu {
    animation: menu-transition 0.5s ease-in-out;
    width: 100%; /* This will make the menu take up the full width of the screen */
    margin-left: auto; /* These two lines will center the menu horizontally */
    margin-right: auto;
}

.hamburger {
    width: 24px;
    height: 24px;
    transition: all 0.25s;
    position: relative;
    cursor: pointer;
}

.hamburger-top,
.hamburger-middle,
.hamburger-bottom {
    position: absolute;
    background: #fff;
    top: 0;
    left: 0;
    display: block;
    width: 24px;
    height: 2px;
    transform: rotate(0);
    transition: all 0.5s;
}

.hamburger-middle {
    transform: translateY(7px);
}

.hamburger-bottom {
    transform: translateY(14px);
}

.open {
    transform: rotate(90deg);
}

.open .hamburger-top {
    transform: rotate(45deg) translateY(6px) translateX(6px);
}

.open .hamburger-middle {
    display: none;
}

.open .hamburger-bottom {
    transform: rotate(-45deg) translateY(6px) translateX(-6px);
}
</style>
