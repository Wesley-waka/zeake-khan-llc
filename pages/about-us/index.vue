<template>
  <div class="hidden md:flex items-center justify-center flex-grow bg-transparent">
    <nav class="flex gap-8 text-[20px]">
      <a href="#" class="hover:underline">Home</a>
      <a href="/about-us" class="hover:underline">About</a>
      <a href="/contact-us" class="hover:underline">Contact Us</a>
    </nav>
  </div>

  <div v-if="isMenuOpen" class="md:hidden mt-2">
    <nav class="flex flex-col gap-4 text-[20px]">
      <a href="#" class="hover:underline">Home</a>
      <a href="#" class="hover:underline">About</a>
      <a href="#" class="hover:underline">Products</a>
    </nav>
  </div>

  <div class="max-w-full mx-[40px] m-2.5 my-[84px]">
  <div class="flex flex-row justify-between w-full">
    <h1 class="font-medium text-[50px] leading-tight">
      <span class="text-gray-500">Our Legacy of</span> <br>Building Dream
    </h1>

    <p class="w-[500px] text-[200px] font-light text-gray-500">Urbanice is a dream builder delivering quality homes that blend beauty,comfort and sustainability for your future</p>

  </div>


  <div class="flex flex-row space-x-6 items-center align-middle mt-3">
    <img src="/about-1.jpg" alt="about Real Estate" class="w-full h-[250px] rounded-[32px]">
    <img src="/about-2.jpg" alt="about Real Estate" class="w-full h-[250px] rounded-[32px]">
    <img src="/about-3.jpg" alt="about Real Estate" class="w-full h-[250px] rounded-[32px]">
  </div>

    <div>
      <h2 class=" font-medium mt-4 text-[36px] leading-[40px] text-center"><span class="text-gray-500">Stress Free </span> Step<br>to your Dream home</h2>
      <div class="mt-4">
        <div class="bg-gray-900 w-[400px] h-[200px] rounded-md p-5 text-white font-light ">
          <span class="font-medium text-2xl ">01.<br>
          Dream and discover <br>
          </span>
          <span class="w-[20px]">Envision your perfect home with our guidance and expertise Envision your perfect home with our guidance and expertisee</span>
        </div>
      </div>
    </div>

    <div>
      <h2 class=" font-medium mt-4 text-[36px] leading-[40px] text-center"><span class="text-gray-500">Explore </span> Your Options<br>Find Your <span class="text-gray-500">Perfect Match </span></h2>
      <p class="text-center text-[14px] font-light mt-2">There are plenty of options for you to explore</p>

      <div class="flex flex-row space-x-6 mt-4">
      <div class="w-full">
      <img src="/about-1.jpg" alt="about Real Estate" class="h-[250px] rounded-[60px]">
        <div class="flex-col space-y-2 mt-2">
        <h1 class="text-[20px]">Serenity Cottage</h1>
        <h1 class="text-gray-500">For Rent/Peaceful Country Side</h1>
        <div class="flex flex-row justify-between">
          <h1 class="text-[20px]">$3000</h1>
          <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-black dark:text-white">
            Button
          </button>
        </div>
        </div>
      </div>

      <div class="w-full">
        <img src="/about-1.jpg" alt="about Real Estate" class=" h-[250px] rounded-[60px]">
        <div class="flex-col space-y-2 mt-2">
          <h1 class="text-[20px]">Serenity Cottage</h1>
          <h1 class="text-gray-500">For Rent/Peaceful Country Side</h1>
          <div class="flex flex-row justify-between">
            <h1 class="text-[20px]">$3000</h1>
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
              Button
            </button>
          </div>
        </div>
      </div>

      <div class="w-full">
        <img src="/about-1.jpg" alt="about Real Estate" class="h-[250px] rounded-[60px]">
        <div class="flex-col space-y-2 mt-2">
          <h1 class="text-[20px]">Serenity Cottage</h1>
          <h1 class="text-gray-500">For Rent/Peaceful Country Side</h1>
          <div class="flex flex-row justify-between">
            <h1 class="text-[20px]">$3000</h1>
            <button type="button" class="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-black text-white hover:bg-gray-900 focus:outline-none focus:bg-gray-900 disabled:opacity-50 disabled:pointer-events-none dark:bg-white dark:text-neutral-800">
              Button
            </button>
          </div>
        </div>
      </div>
      </div>
    </div>

    <div class="text-center my-16">
      <h1 class="font-medium mt-4 text-[36px] leading-[40px] text-center">Ready to Revolutionize Your <br> <span class="text-gray-500"> Real Estate</span> Experience</h1>
      <h1 class="mt-2 text-[14px] font-light ">Join Our Newsletter today and discover the world of seamless property<br> management, unparalleled investment insights</h1>
      <div class="max-w-sm space-y-3 mx-auto">
        <div>
          <label for="hs-leading-icon" class="block text-sm font-medium mb-2 dark:text-white">Email address</label>
          <div class="relative">
            <input type="text" id="hs-leading-icon" name="hs-leading-icon" class="py-3 bg-white px-4 ps-11 block w-full border-black shadow-sm rounded-lg text-sm focus:z-10 focus:border-gray-600 focus:ring-gray-500 disabled:opacity-50 disabled:pointer-events-none " style="border: 0.75px solid grey" placeholder="Input your email">
            <div class="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
              <svg class="shrink-0 size-4 text-gray-400 dark:text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
          </div>
        </div>
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


<script>

</script>

<style>
.border-color{
  color: black;
}
</style>