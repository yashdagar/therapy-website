// pages/index.tsx
import Head from 'next/head';
import Hero from '@/components/screens/Hero';
import Navbar from '@/components/layout/Navbar';
import About from '@/components/screens/About';
import Services from '@/components/screens/Services';
import FAQ from '@/components/screens/FAQ';
import Contact from '@/components/screens/Contact';
import Footer from '@/components/layout/Footer';
import Quote from '@/components/screens/Quote';
import Rates from '@/components/screens/Rates';

export default function Home() {

  return (
    <>
      <Head>
        <title>Dr. Serena Blake - Clinical Psychologist | Los Angeles</title>
        <meta name="description" content="Licensed clinical psychologist in Los Angeles specializing in anxiety, relationships, and trauma recovery. In-person and virtual sessions available." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <About />
        <Quote />
        <Services />
        <Rates />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}