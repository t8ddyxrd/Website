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

      {/* 🔐 Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        Certifications
      </motion.h1>

      {/* 🛡️ Security+ Card */}
      <motion.div
        className="bg-zinc-900 p-6 rounded-2xl w-full max-w-xl shadow-lg border border-zinc-700 mb-8"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/securityplus_badge.png" 
            alt="Security+ Badge"
            width={70}
            height={70}
            className="rounded"
          />
          <div>
            <h2 className="text-2xl font-semibold">CompTIA Security+</h2>
            <p className="text-zinc-400 mt-1">Issued: August 2025</p>
            <p className="text-zinc-400">Credential ID: Available on request</p>
            <a
              href="https://www.credly.com/badges/71ae234c-6fe9-4d8a-ac57-7339b62a4bee"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              View on Credly
            </a>
          </div>
        </div>
      </motion.div>

      {/* 🔵 BTL1 Card */}
      <motion.div
        className="bg-zinc-900 p-6 rounded-2xl w-full max-w-xl shadow-lg border border-zinc-700"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <Image
            src="/btl1.svg" 
            alt="Blue Team Level 1 Badge"
            width={70}
            height={70}
            className="rounded"
          />
          <div>
            <h2 className="text-2xl font-semibold">Blue Team Level 1 (BTL1)</h2>
            <p className="text-zinc-400 mt-1">Issued: October 2025</p>
            <p className="text-zinc-400">Score: 75% (First Attempt)</p>
            <a
              href="https://www.credly.com/badges/ed582e9f-458c-4057-9842-f9d57a6dbe00"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-2 inline-block"
            >
              View on Credly
            </a>
          </div>
        </div>
      </motion.div>

    </main>
  );
}
