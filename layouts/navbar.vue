<script setup>

// Reactive Variables Start
const isMenuOpen = ref(false);
const dropdownStates = ref([]);
const scrolled = ref(false);
const navLinks = ref([
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },

    {
        name: 'Contact', path: '/contact-us',
    },
    { name: 'OSH', path: '/osh' },

]);

// Reactive Variables End


useHead({
    title: 'Contact Us | Webrisk Consultancy',
    meta: [
        { name: 'description', content: 'Get in touch with Webrisk Consultancy. We\'re here to help with any questions or inquiries you may have about our products or services.' },
        { name: 'keywords', content: 'contact, customer support, inquiries, Your Company Name' },
        { property: 'og:title', content: 'Contact Us | Webrisk Consultancy' },
        { property: 'og:description', content: 'Get in touch with Webrisk Consultancy. We\'re here to help with any questions or inquiries.' },
        // { name: 'twitter:card', content: 'summary_large_image' },
        // { name: 'twitter:title', content: 'Contact Us | Your Company Name' },
        // { name: 'twitter:description', content: 'Get in touch with Your Company Name. We\'re here to help with any questions or inquiries.' },
        // { name: 'twitter:image', content: 'https://yourcompany.com/twitter-image.jpg' }
    ],
    link: [
        { rel: 'canonical', href: 'https://web-risk-consultancy.vercel.app/contactUs' }
    ]
})

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
    isMenuOpen.value = false;
};

const toggleDropdown = (index) => {
    Object.keys(dropdownStates.value).forEach(key => {
        if (parseInt(key) !== index) {
            dropdownStates.value[key] = false;
        }
    });
    dropdownStates.value[index] = !dropdownStates.value[index];
};

const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});


onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll);
});



</script>


<template>
    <nav
        :class="['fixed w-full z-50   transition-colors duration-300 lg:p-[1px] ', scrolled ? 'bg-white' : 'bg-transparent']">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto py-2.5 lg:py-0">
            <!-- Logo Section Start -->
            <a href="#" class="flex items-center">
                <img src="~/assets/images/zeake-khan.svg" alt="Logo" class="h-8 lg:h-24">

            </a>
            <!-- Logo Section End -->

            <div class="flex items-center lg:order-2">
                <!-- Contact Us Button Start (visible only on large screens) -->
                <NuxtLink to="/contact-us"
                    class="hidden lg:inline-block text-white background-primary hover:background-primary font-semibold rounded-lg text-[16px] px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-[#9E2829] dark:hover:bg-[#9E2829] focus:outline-none">
                    Contact Us
                </NuxtLink>
                <!-- Contact Us Button End -->

                <!-- Mobile Menu Toggle Start -->
                <button @click="toggleMenu" type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
                    <span class="sr-only">Open main menu</span>
                    <svg v-if="!isMenuOpen" class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <svg v-else class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </button>
                <!-- Mobile Menu Toggle End -->
            </div>

            <!-- Main Menu Links Start -->
            <div :class="{ 'hidden': !isMenuOpen, 'block': isMenuOpen }"
                class="w-full lg:flex lg:w-auto lg:order-1 text-[14px]" id="mobile-menu">
                <ul
                    class="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0 lg:items-center lg:justify-center font-semibold bg-gray-800 lg:bg-transparent p-4 rounded-lg">
                    <li v-for="(link, index) in navLinks" :key="index"
                        :class="['relative group', index === navLinks.length - 1 ? 'lg:hidden' : '']">
                        <NuxtLink v-if="!link.subMenu" :to="link.path" @click="closeMenu"
                            :class="['block py-2 pl-3 pr-4 rounded lg:p-0 whitespace-nowrap', scrolled ? 'lg:text-gray-800 text-gray-800' : ' text-gray-800']">
                            {{ link.name }}
                        </NuxtLink>
                        <div v-else>
                            <a href="#" @click.prevent="toggleDropdown(index)"
                                :class="['flex items-center py-2 pl-3 pr-4 whitespace-nowrap', scrolled ? 'text-white lg:text-gray-800' : 'text-white']">
                                {{ link.name }}
                                <svg :class="{ 'rotate-180': dropdownStates[index] }"
                                    class="w-5 h-5 ml-1 mt-1 transform transition-transform" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 9l-7 7-7-7" />
                                </svg>
                            </a>
                            <!-- Submenu Start -->
                            <ul v-if="dropdownStates[index]"
                                class="lg:absolute bg-gray-800 rounded-lg w-full lg:w-56 lg:top-full lg:left-0 z-10">
                                <li v-for="(subLink, subIndex) in link.subMenu" :key="subIndex">
                                    <NuxtLink :to="subLink.path" @click="closeMenu"
                                        class="block px-4 py-2 text-white hover:bg-gray-700">
                                        {{ subLink.name }}
                                    </NuxtLink>
                                </li>
                            </ul>
                            <!-- Submenu End -->
                        </div>
                    </li>
                    <!-- Contact Us Button for mobile (visible only on small screens) -->
                </ul>
            </div>
            <!-- Main Menu Links End -->
        </div>
    </nav>
</template>


<style lang="scss">
/* Custom Styling for Submenu */
@media (min-width: 1024px) {
    .group:hover .group-hover\:block {
        display: block;
    }
}

// * Ensures dropdown arrows toggle correctly*/ 
svg.rotate-180 {
    transform: rotate(180deg);
}


.p-menubar {
    background: none;

    & .p-menubar-root-list>.p-menuitem>.p-menuitem-content {
        color: green;
        transition: background-color 0.2s, color 0.2s, border-color 0.2s,
            box-shadow 0.2s, outline-color 0.2s;
        border-radius: 6px;
    }
}
</style>