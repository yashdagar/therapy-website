import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-16 lg:px-24 xl:px-24">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-start">
            <div>
            <Image
                width={384}
                height={768}
                src="/about.jpg"
                alt="Dr. Serena Blake"
                className="rounded-sm w-full md:py-12"
            />
            </div>
            <div>
            <h2 className='mb-12! text-[#7e7e6b]!'>
                About Dr. Serena Blake, PsyD
            </h2>
            <p className="mb-6 leading-relaxed">
                Finding meaningful support in times of stress, anxiety, or emotional upheaval can be a transformative experience. 
                I view therapy as a collaborative space where you can begin to make sense of your thoughts and experiences, 
                identify recurring patterns, and move toward healing and growth. My approach emphasizes both structure and 
                flexibility—drawing from evidence-based modalities like cognitive-behavioral therapy, mindfulness, and trauma-informed care, 
                while tailoring the work to meet your unique needs.<br /><br />

                I&quot;m Dr. Serena Blake, a licensed clinical psychologist based in Los Angeles, California. Over the past eight years, 
                I&quot;ve had the privilege of working with individuals across more than 500 therapy sessions. Whether we&quot;re focusing on managing anxiety, 
                building healthier relationships, or addressing the lasting impacts of trauma, I strive to offer a space grounded in respect, compassion, 
                and professional integrity.<br /><br />

                Therapy with me is available both in-person at my office on Maplewood Drive or virtually through secure Zoom sessions. In either setting, 
                my priority is to create a safe, trusting environment where meaningful change can take place.<br /><br />
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space 
                for you to thrive.
            </p>
            {/* <div className="space-y-2">
                <p><strong>Experience:</strong> 8 years of practice, 500+ sessions</p>
                <p><strong>Location:</strong> 1287 Maplewood Drive, Los Angeles, CA 90026</p>
                <p><strong>Phone:</strong> (323) 555-0192</p>
                <p><strong>Email:</strong> serena@blakepsychology.com</p>
            </div> */}
            </div>
        </div>
        </div>
    </section>
  )
}

export default About
