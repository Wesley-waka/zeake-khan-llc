<template>
    <Navbar />

    <nav class="bg-custom-image bg-cover bg-center h-[620px] w-full text-white bg-transparent mycol  p-4">


        <div class="flex items-center justify-center flex-grow pt-24">
            <div class="text-center px-4 md:px-8">
                <h1 class="text-2xl md:text-4xl font-bold mb-4">Contact Us</h1>
                <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.</p>
            </div>
        </div>
    </nav>

    <div class="flex md:flex-row flex-col md:space-y-0 space-y-8 md:space-x-6 my-10 max-w-[800px] mx-auto items-center">
        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100 md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/contact-us.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Call us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    ++1(917) 6094-597
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/location.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Visit us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    USA, NewYork
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/whatsapp.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Text us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    +1(917) 6094-597
                </p>

            </div>
        </div>



    </div>

    <footer class="mycol py-8 text-white">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row md:justify-between">
                <!-- Footer Left -->
                <div class="mb-4 md:mb-0">
                    <h3 class="text-2xl font-bold mb-2"><a href="https://www.zemy-group.com">Zemy-Group.com</a> </h3>
                    <p class="text-base">147 W 35thst, New York, NY 10001</p>
                    <p class="text-base">Phone: +1(917) 6094-597</p>
                    <p class="text-base">Email: info@zemy-group.com</p>
                </div>
                <!-- Footer Center -->
                <div class="mb-4 md:mb-0">
                    <h4 class="text-xl font-semibold mb-2">Quick Links</h4>
                    <ul class="list-none">
                        <li><a href="#" class="hover:underline">Home</a></li>
                        <li><a href="#" class="hover:underline">About</a></li>
                        <li><a href="#" class="hover:underline">Services</a></li>
                        <li><a href="#" class="hover:underline">Contact</a></li>
                    </ul>
                </div>
                <!-- Footer Right -->
                <div>
                    <h4 class="text-xl font-semibold mb-2">Follow Us</h4>
                    <div class="flex space-x-4">
                        <a href="#" class="text-white hover:text-gray-400"><i class="pi pi-facebook text-2xl"></i></a>
                        <a href="#" class="text-white hover:text-gray-400"><i class="pi pi-twitter text-2xl"></i></a>
                        <a href="#" class="text-white hover:text-gray-400"><i class="pi pi-linkedin text-2xl"></i></a>
                        <a href="#" class="text-white hover:text-gray-400"><i class="pi pi-instagram text-2xl"></i></a>
                    </div>
                </div>
            </div>
            <div class="text-center mt-8">
                <p class="text-sm">&copy; 2024 Zemy-Group. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>

<script setup>
import Navbar from '~/layouts/navbar.vue'

</script>

<style scoped>
.bg-custom-image {
    background-image: url('/about-2.jpg');
}
</style>