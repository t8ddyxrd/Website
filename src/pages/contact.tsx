import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Contact() {
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

      {/* 📬 Contact Info */}
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-8 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
          Contact
        </h1>

        <p className="text-xl text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] mb-4">
          📧 Email: <a href="mailto:t8ddyx@gmail.com" className="underline hover:text-white">t8ddyx@gmail.com</a>
        </p>

        <p className="text-xl text-gray-300 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          💻 GitHub: <a href="https://github.com/t8ddyxrd" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">github.com/t8ddyxrd</a>
        </p>
      </motion.div>
    </main>
  );
}
