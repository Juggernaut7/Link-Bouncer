// src/components/ResultCard.jsx
import React from "react"
import { motion } from "framer-motion"
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiXCircle,
} from "react-icons/fi"

const icons = {
  safe: (
    <FiCheckCircle className="text-safe text-2xl shadow-neon animate-pulseSlow" />
  ),
  suspicious: (
    <FiAlertTriangle className="text-yellow-400 text-2xl animate-pulseSlow" />
  ),
  malicious: (
    <FiXCircle className="text-alert text-2xl shadow-pinkGlow animate-pulseSlow" />
  ),
}

const messages = {
  safe: "This link appears to be safe.",
  suspicious: "Caution advised. This link might be suspicious.",
  malicious: "Danger! This link is known to be harmful.",
}

const descriptions = {
  safe: "No malicious activity detected. You can proceed safely.",
  suspicious: "This link might have unusual behavior. Double-check before visiting.",
  malicious: "This link is blacklisted or flagged for phishing, malware, or scams.",
}

const ResultCard = ({ url, status }) => {
  if (!url || !status) return null

  const hostname = new URL(url).hostname
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`

  return (
  <motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.015 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className={`mt-6 bg-darkCard p-6 rounded-xl shadow-md border border-gray-800 backdrop-blur-md`}
>

      <div className="flex items-center gap-2 mb-4">
        <img src={favicon} alt="favicon" className="w-8 h-8 rounded-md" />
        <div className="text-lg font-medium text-white">{hostname}</div>
      </div>

      <div className="flex items-center gap-4 mb-4">
        <img src={favicon} alt="favicon" className="w-8 h-8 rounded-md" />
        <div className="text-lg font-medium text-white">{hostname}</div>
      </div>

      <div className="flex items-center gap-3 mb-2">
        {icons[status]}
        <span
          className={`text-lg font-semibold ${
            status === "safe"
              ? "text-safe"
              : status === "suspicious"
              ? "text-yellow-400"
              : "text-alert"
          }`}
        >
          {messages[status]}
        </span>
      </div>

      <p className="text-sm text-gray-400">{descriptions[status]}</p>
    </motion.div>
  )
}

export default ResultCard
