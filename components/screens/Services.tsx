import Image from 'next/image';
import React from 'react'

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Anxiety & Stress Management",
      image: "https://images.unsplash.com/photo-1544027993-37dbfe43562a",
      description: "Learn effective coping strategies and mindfulness techniques to manage anxiety and stress. Through evidence-based approaches like CBT, we'll work together to identify triggers and develop personalized tools for lasting relief. You'll gain confidence in handling life's challenges while building resilience for the future."
    },
    {
      id: 2,
      title: "Relationship Counseling",
      image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2",
      description: "Strengthen your connections through improved communication and deeper understanding. Whether you're navigating relationship challenges, rebuilding trust, or enhancing intimacy, we'll explore patterns and develop healthy relationship skills. Sessions focus on creating lasting positive change for both individual and couples therapy."
    },
    {
      id: 3,
      title: "Trauma Recovery",
      image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca",
      description: "Heal from past experiences in a safe, supportive environment using trauma-informed approaches. We'll work at your pace to process difficult experiences and develop healthy coping mechanisms. Through specialized techniques, you'll learn to reclaim your sense of safety and move forward with renewed strength and hope."
    }
  ];

  return (
    <section id="services" className="py-16 bg-[#f3f0e8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Services & Specialties
                </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {services.map((service) => (
                <div key={service.id} className="text-center">
                    <Image
                    width={512}
                    height={512}
                    src={service.image}
                    alt={service.title}
                    className="w-full aspect-square object-cover rounded-full mb-6"
                    />
                    <div className="px-2">
                    <h3 className="text-3xl font-light! text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-900/70 font-thin! leading-relaxed">
                        {service.description}
                    </p>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Services