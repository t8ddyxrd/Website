import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white font-sans flex flex-col justify-center items-center px-4 relative">

      {/* 👿 Home Icon */}
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

      {/* 🌐 Nav Menu */}
    <nav className="absolute top-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-6 text-lg z-50 font-medium">
  <Link href="/about" className="hover:scale-110 transition-transform">
    <span className="hover:text-white">About</span>
  </Link>
  <span className="w-[2px] h-5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
  <Link href="/projects" className="hover:scale-110 transition-transform">
    <span className="hover:text-white">Projects</span>
  </Link>
  <span className="w-[2px] h-5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
  <Link href="/certs" className="hover:scale-110 transition-transform">
    <span className="hover:text-white">Certs</span>
  </Link>
  <span className="w-[2px] h-5 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]" />
  <Link href="/contact" className="hover:scale-110 transition-transform">
  <span className="inline-block min-w-[80px] text-center hover:text-white">Contact</span>
</Link>
</nav>

      {/* 📄 Main Content */}
      <motion.div
        className="max-w-3xl w-full text-center"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-[0_0_20px_rgba(255,255,255,0.7)]">
          Teodor Todorov
        </h1>

        <p className="text-lg text-gray-300 mb-2 drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
          Aspiring Cybersecurity Analyst | Blue Team | SOC | SIEM | Cloud
        </p>

        <p className="text-sm text-gray-400 mb-8 leading-relaxed drop-shadow-[0_0_6px_rgba(255,255,255,0.2)]">
          Focused on defensive security, real-world detection engineering, and digital forensics. 
          Open to remote or on-site SOC roles.
        </p>

        <motion.a
          href="/resume.pdf"
          whileHover={{ scale: 1.05 }}
          className="inline-block px-6 py-3 border border-white text-white font-medium rounded-lg 
                     transition-all hover:bg-white hover:text-black shadow-md"
        >
          Download CV
        </motion.a>
      </motion.div>
    </main>
  );
}
