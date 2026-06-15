import React from 'react'

const Profil = () => {
  return (
   <div class="flex items-center justify-center min-h-screen p-4 bg-gray-100 dark:bg-zinc-900 transition-colors duration-300">
  
  <div class="bg-green-500 md:bg-blue-500 dark:bg-black rounded-2xl p-6 shadow-2xl max-w-sm w-full text-center text-white transition-colors duration-500">
    
    <div class="flex justify-center">
      <img 
        src="https://img.magnific.com/premium-vector/default-avatar-profile-icon-social-media-user-image-gray-avatar-icon-blank-profile-silhouette-vector-illustration_561158-3407.jpg?semt=ais_hybrid&w=740&q=80" 
        alt="Profile" 
        class="w-24 h-24 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    <h3 class="text-2xl font-bold mt-4">CodingLab</h3>
    <p class="text-sm text-opacity-90 text-white/80">YouTuber & Blogger</p>

    <div class="mt-6 flex justify-center gap-4">
      <button class="bg-white text-blue-600 dark:text-black font-semibold px-5 py-2 rounded-full shadow-md hover:scale-105 transition-transform text-sm">
        Subscribe
      </button>
      <button class="border-2 border-white text-white font-semibold px-5 py-2 rounded-full hover:bg-white hover:text-blue-600 dark:hover:text-black transition-all text-sm">
        Message
      </button>
    </div>

    <div class="mt-6 pt-4 border-t border-white/20 flex justify-between text-xs font-medium">
      <div>
        <span class="block text-lg font-bold">60.4k</span>
        <span class="text-white/70">Followers</span>
      </div>
      <div>
        <span class="block text-lg font-bold">20k</span>
        <span class="text-white/70">Likes</span>
      </div>
      <div>
        <span class="block text-lg font-bold">12.4k</span>
        <span class="text-white/70">Shares</span>
      </div>
    </div>

  </div>
</div>
  )
}

export default Profil