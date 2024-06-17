import React from "react";

function Home() {
  return (
    <section class="text-gray-900 body-font">
  <div class="container px-5 py-10 mx-auto">
    <div class="flex flex-wrap w-full mb-20">
      <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
        <div class="h-1 w-20 bg-indigo-500 rounded"></div>
      </div>
      <h1 class="lg:w-1/2 w-full leading-relaxed text-black">time jun | 9:00</h1>
    </div>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <h1 class=" text-4xl text-black font-bold mb-4">300</h1>
          <p class="leading-relaxed text-base">User List</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <h1 class="text-4xl text-black font-bold title-font mb-4">300</h1>
          <p class="leading-relaxed text-base">Overdue</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          <h1 class="text-4xl text-black font-bold title-font mb-4">30</h1>
          <p class="leading-relaxed text-base">Book List</p>
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-100 p-6 rounded-lg">
          
          <h1 class="text-4xl text-black font-bold title-font mb-4">300</h1>
          <p class="leading-relaxed text-base">Pending</p>
        </div>
      </div>
    </div>
  </div>
</section>
  );
}

export default Home;
