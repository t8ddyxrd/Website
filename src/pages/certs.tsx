import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Certs() {
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

      {/* 🛡️ Coming Soon */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        Coming Soon
      </motion.h1>
    </main>
  );
}
