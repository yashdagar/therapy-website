import React from 'react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[66vh] bg-[#f3f0e8] flex items-center justify-cente justify-center">
        <div 
          className="flex absolute inset-0 bg-cover bg-center bg-no-repeat items-center overflow-hidden mr-[4vw] ml-[4vw] mb-[4vw]"
        >
          <video src="/video.mp4" className='object-cover h-full w-full' autoPlay={true} playsInline={true} loop={true} muted={true} />
          <div className="absolute inset-0 bg-black/40 backdrop-blur-xs"></div>
        </div>

        <div className="relative text-center text-white px-4 max-w-4xl py-48">
          <h1>
            Your Journey to Healing <br/>Starts Here
          </h1>
          <h2 className="text-xl! md:text-2xl! mb-8 opacity-90 text-[#fefefe]! font-light!">
            Compassionate, <u>evidence-based therapy</u> for anxiety, relationships, and trauma recovery
          </h2>
          <button>
            <a>
              Book a Free<br /> Consult
            </a>
          </button>
        </div>
    </section>
  )
}

export default Hero
