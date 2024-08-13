<template>
  <head>
    <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet">
  </head>
  <div class="bg-custom-image bg-cover bg-center h-screen text-white bg-transparent">
    <div class="mx-auto px-4">
      <div>
        <div class="flex justify-between items-center h-16 bg-transparent">
          <!-- Hamburger menu for small screens -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none bg-transparent">
              <i class="pi pi-bars text-2xl"></i>
            </button>
          </div>
      
          <!-- Logo for both small and large screens -->
          <div class="flex-shrink-0 bg-transparent lg:p-2 lg:rounded-lg">
            <NuxtLink to="/" class="flex items-center">
              <img src="assets/images/zeake-khan.svg" alt="Sierra logo" class="h-20 lg:h-16">
            </NuxtLink>
          </div>
      
          <!-- Menu items for medium and large screens -->
          <div class="hidden md:flex items-center justify-center flex-grow bg-transparent">
            <nav class="flex gap-8 text-[20px]">
              <a href="#" class="hover:underline">Home</a>
              <a href="#" class="hover:underline">About</a>
              <a href="#" class="hover:underline">Products</a>
            </nav>
          </div>
      
          <div>
            <button class="rounded-md p-4 mycol text-white">Find House</button>
          </div>
        </div>
      
        <!-- Mobile menu -->
        <div v-if="isMenuOpen" class="md:hidden mt-2">
          <nav class="flex flex-col gap-4 text-[20px]">
            <a href="#" class="hover:underline">Home</a>
            <a href="#" class="hover:underline">About</a>
            <a href="#" class="hover:underline">Products</a>
          </nav>
        </div>
      </div>
  </div>      
  
    <!-- Centered text -->
    <div class="flex pl-4 items-center h-full">
      <span class="text-5xl font-pacifico">
        Find the best<br/>
        <span class="text-6xl mt-2 pb-4 leading-extra-loose text-brown-500 font-pacifico">
          Commercial Real Estate
        </span>
        <br/>in NY tri-state area
      </span>
    </div>
  </div>
  <section class="mycol py-16 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">Our Services</h2>
      <p class="text-lg text-center mb-12">We offer a range of services to meet your needs. Discover how we can help you achieve your goals.</p>
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Service One -->
        <div class="mycol1 p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg" alt="Service One" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-2xl font-semibold mb-4">Renting</h3>
          <p class="text-base">We offer a range of renting space for companies amnd organizations in need of large spaces for short periods</p>
        </div>
        <!-- Service Two -->
        <div class="mycol1 p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <img src="https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg" alt="Service Two" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-2xl font-semibold mb-4">Leasing</h3>
          <p class="text-base">We offer a range of leasing space for companies amnd organizations in need of large spaces for extendedd periods</p>
        </div>
        <!-- Service Three -->
        <div class="mycol1 p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <img src="https://images.pexels.com/photos/1481105/pexels-photo-1481105.jpeg" alt="Service Three" class="w-full h-48 object-cover rounded-md mb-4">
          <h3 class="text-2xl font-semibold mb-4">Shared spaces</h3>
          <p class="text-base">EWe offer shared spaces for companies in need of small spaces for lean teams</p>
        </div>
      </div>
    </div>
  </section>

  <section class="mycol my-4 py-16 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">Contact Us</h2>
      <p class="text-lg text-center mb-12">Have questions or need assistance? Fill out the form below, and we’ll get back to you as soon as possible.</p>
      <div class="flex justify-center">
        <form class="w-full max-w-lg mx-auto bg-gray-800 p-8 rounded-lg shadow-lg">
          <div class="mb-4">
            <label for="name" class="block text-sm font-semibold mb-2">Name</label>
            <input type="text" id="name" name="name" required class="w-full p-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400">
          </div>
          <div class="mb-4">
            <label for="email" class="block text-sm font-semibold mb-2">Email</label>
            <input type="email" id="email" name="email" required class="w-full p-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400">
          </div>
          <div class="mb-4">
            <label for="message" class="block text-sm font-semibold mb-2">Message</label>
            <textarea id="message" name="message" rows="4" required class="w-full p-3 border border-gray-600 rounded-md bg-gray-900 text-white placeholder-gray-400"></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  </section>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row items-center">
        <!-- Image on the Left -->
        <div class="flex-shrink-0 md:w-1/2 mb-8 md:mb-0">
          <img src="https://images.pexels.com/photos/273209/pexels-photo-273209.jpeg" alt="Description Image" class="w-full h-auto object-cover rounded-lg shadow-lg">
        </div>
        <!-- Description on the Right -->
        <div class="md:w-1/2 md:pl-8">
          <h2 class="text-3xl font-bold mb-4">Our Mission</h2>
          <p class="text-lg mb-4">
            We are dedicated to providing exceptional real estate services to help you find your dream property. Our team of experts is committed to offering personalized support and professional guidance throughout the buying or renting process.
          </p>
          <p class="text-lg">
            Whether you're searching for residential or commercial properties, our extensive market knowledge and experience ensure that you receive the best possible service tailored to your needs. Let us help you make informed decisions and achieve your real estate goals.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="bg-gray-100 py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold text-center mb-8">What Our Clients Say</h2>
      <p class="text-lg text-center mb-12">Hear from our satisfied clients about their experiences working with us.</p>
      <div class="flex flex-wrap justify-center gap-8">
        <!-- Testimonial One -->
        <div class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/100" alt="Client One" class="w-16 h-16 object-cover rounded-full mr-4">
            <div>
              <h3 class="text-xl font-semibold">John Doe</h3>
              <p class="text-sm text-gray-600">CEO, Company</p>
            </div>
          </div>
          <p class="text-base italic">"The service was excellent, and the team was very professional. I highly recommend them for any real estate needs!"</p>
        </div>
        <!-- Testimonial Two -->
        <div class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/100" alt="Client Two" class="w-16 h-16 object-cover rounded-full mr-4">
            <div>
              <h3 class="text-xl font-semibold">Jane Smith</h3>
              <p class="text-sm text-gray-600">Marketing Director</p>
            </div>
          </div>
          <p class="text-base italic">"Fantastic experience! The staff was incredibly helpful, and we found the perfect property thanks to their expertise."</p>
        </div>
        <!-- Testimonial Three -->
        <div class="bg-white p-6 rounded-lg shadow-lg w-full md:w-1/3">
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/100" alt="Client Three" class="w-16 h-16 object-cover rounded-full mr-4">
            <div>
              <h3 class="text-xl font-semibold">Michael Brown</h3>
              <p class="text-sm text-gray-600">Entrepreneur</p>
            </div>
          </div>
          <p class="text-base italic">"The team was very responsive and attentive. They understood my needs and helped me find exactly what I was looking for."</p>
        </div>
      </div>
    </div>
  </section>
  <footer class="mycol py-8 text-white">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row md:justify-between">
        <!-- Footer Left -->
        <div class="mb-4 md:mb-0">
          <h3 class="text-2xl font-bold mb-2">Company Name</h3>
          <p class="text-base">1234 Main Street, City, State, ZIP</p>
          <p class="text-base">Phone: (123) 456-7890</p>
          <p class="text-base">Email: info@example.com</p>
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
        <p class="text-sm">&copy; 2024 Company Name. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const isMenuOpen = ref(false);
</script>

<style>
.mycol{
  background-color: rgb(158,40,41) ;
}
.mycol1{
  background-color: rgb(98,1,49);
}
</style>