import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
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

      {/* 💻 Title */}
      <motion.h1
        className="text-5xl md:text-6xl font-bold drop-shadow-[0_0_25px_rgba(255,255,255,0.8)] text-center mb-12"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      >
        Projects
      </motion.h1>

      {/* Cards container */}
      <div className="w-full max-w-4xl grid gap-6">
        {/* 🕵️ sN1TCH Project Card */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-2xl w-full shadow-lg border border-zinc-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">sN1TCH 🕵️‍♂️</h2>
            <p className="text-zinc-400">
              A CLI-based log analysis tool with real-time GeoIP lookups, auto-blocking for suspicious IPs,
              filtering by country/ISP, live monitoring, and  Discord webhook alerting.
            </p>
            <ul className="list-disc list-inside text-zinc-400 mt-2">
              <li>Live log monitoring with IP detection</li>
              <li>Auto-block IPs via UFW/IPTables using <code>--block</code></li>
              <li>GeoIP + ISP info from logs</li>
              <li>Export data with <code>--save</code></li>
              <li>Discord alerts via webhooks</li>
            </ul>
            <a
              href="https://github.com/t8ddyxrd/sN1TCH"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-3"
            >
              View on GitHub →
            </a>
          </div>
        </motion.div>

        {/* 🧱 AD Lab Build Card */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-2xl w-full shadow-lg border border-zinc-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.35 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Active Directory Lab 🧱</h2>
            <p className="text-zinc-400">
              A Windows Server 2019 homelab for blue-team practice: domain setup (<code>t8ddy.com</code>),
              OU structure, security groups, user provisioning, GPO hardening (password/lockout, audit),
              drive mapping with item-level targeting, and DNS records — fully documented with step-by-step
              screenshots (#1–#18) for easy replication.
            </p>
            <ul className="list-disc list-inside text-zinc-400 mt-2">
              <li>GPOs: lockout, password policy, logon auditing</li>
              <li>Groups & Users: <code>GG_HR</code>, <code>GG_IT</code>, and user provisioning</li>
              <li>Drive Maps: HR share with security group targeting</li>
              <li>DNS: A records for internal services (e.g., <code>intranet.t8ddy.com</code>)</li>
              <li>Clean, GitHub-ready README with images</li>
            </ul>
            <a
              href="https://github.com/t8ddyxrd/ad-lab" // ← replace if your repo slug differs
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-3"
            >
              View on GitHub →
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
