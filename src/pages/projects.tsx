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
              filtering by country/ISP, live monitoring, and Discord webhook alerting.
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
              href="https://github.com/t8ddyxrd/AD-Homemade-Lab"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-3"
            >
              View on GitHub →
            </a>
          </div>
        </motion.div>

        {/* ⚙️ Sysmon GPO Deployment */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-2xl w-full shadow-lg border border-zinc-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Sysmon via GPO ⚙️</h2>
            <p className="text-zinc-400">
              Automated deployment of Sysmon across a domain using Group Policy Objects. Includes pre-configured 
              Sysmon XML config for Windows event collection, ideal for blue team detection labs and SIEM ingestion.
            </p>
            <ul className="list-disc list-inside text-zinc-400 mt-2">
              <li>Sysmon MSI deployment via GPO</li>
              <li>Centralized Sysmon config XML</li>
              <li>Scalable for domain environments</li>
              <li>Step-by-step setup guide</li>
            </ul>
            <a
              href="https://github.com/t8ddyxrd/Installing-Sysmon-via-GPO"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-3"
            >
              View on GitHub →
            </a>
          </div>
        </motion.div>

        {/* 📜 Sigma Rules */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-2xl w-full shadow-lg border border-zinc-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.55 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Sigma Rules 📜</h2>
            <p className="text-zinc-400">
              A collection of custom Sigma detection rules for Windows event logs, focusing on real-world threats such as 
              brute force attempts, persistence mechanisms, and suspicious PowerShell activity. Mapped to MITRE ATT&CK.
            </p>
            <ul className="list-disc list-inside text-zinc-400 mt-2">
              <li>SSH brute force detection</li>
              <li>Encoded PowerShell command detection</li>
              <li>Persistence via scheduled tasks</li>
              <li>Ready-to-use YAML Sigma format</li>
            </ul>
            <a
              href="https://github.com/t8ddyxrd/Sigma-Rules"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline mt-3"
            >
              View on GitHub →
            </a>
          </div>
        </motion.div>

        {/* 🔎 Splunk BOTSv2 Walkthrough */}
        <motion.div
          className="bg-zinc-900 p-6 rounded-2xl w-full shadow-lg border border-zinc-700"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.65 }}
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl font-semibold">Splunk BOTSv2 Investigation 🔎</h2>
            <p className="text-zinc-400">
              A full walkthrough of Splunk’s Boss of the SOC v2 dataset, documenting search queries, detections, 
              and incident investigation process. Designed to sharpen SOC analyst skills with hands-on data hunting.
            </p>
            <ul className="list-disc list-inside text-zinc-400 mt-2">
              <li>Step-by-step investigation notes</li>
              <li>Splunk SPL queries for detection</li>
              <li>Mapped findings to MITRE ATT&CK</li>
              <li>Ideal prep for SOC analyst interviews</li>
            </ul>
            <a
              href="https://github.com/t8ddyxrd/Splunk-BOTS-v2-Investigation-Walkthrough"
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
