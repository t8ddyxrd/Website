import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function About() {
  return (
    <main className="min-h-screen bg-black text-white font-sans px-6 py-12 relative flex flex-col items-center">
      
      {/* 👿 Logo */}
      <Link href="/">
        <div className="absolute top-5 left-5 hover:scale-105 transition-transform cursor-pointer z-50">
          <Image
            src="/devil_icon.png"
            alt="Home"
            width={180}
            height={180}
            priority
          />
        </div>
      </Link>

      {/* 🧠 About Section */}
      <motion.div
        className="max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-bold mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
          About Me
        </h1>

        <p className="text-lg text-gray-300 leading-relaxed drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
          I am  Teodor Todorov — an aspiring cybersecurity analyst focused on defensive security, real-world SIEM engineering, and cloud-based detection strategies. Passionate about identifying threats and strengthening system integrity across modern infrastructures.
        </p>

        <p className="text-gray-400 text-sm mt-6 leading-relaxed">
          My goal is to join a Security Operations Center (SOC) and contribute to building secure, resilient digital environments. I am currently working on industry certifications and hands-on labs.
        </p>
      </motion.div>
    </main>
  );
}
