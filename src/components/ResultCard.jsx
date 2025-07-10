// src/components/ResultCard.jsx
import { FiCheckCircle, FiAlertTriangle, FiXCircle } from 'react-icons/fi'

const icons = {
  safe: <FiCheckCircle className="text-safe" />,
  suspicious: <FiAlertTriangle className="text-yellow-400" />,
  malicious: <FiXCircle className="text-alert" />,
}

const messages = {
  safe: 'This link appears to be safe.',
  suspicious: 'Caution advised. This link might be suspicious.',
  malicious: 'Danger! This link is known to be harmful.',
}

const ResultCard = ({ url, status }) => {
  const hostname = new URL(url).hostname
  const favicon = `https://www.google.com/s2/favicons?sz=64&domain_url=${url}`

  return (
    <div className="mt-6 bg-darkCard p-6 rounded-xl shadow-md border border-gray-800">
      <div className="flex items-center gap-4 mb-4">
        <img src={favicon} alt="favicon" className="w-8 h-8" />
        <div className="text-lg font-medium">{hostname}</div>
      </div>
      <div className="flex items-center gap-3">
        {icons[status]}
        <span className={`text-lg ${status === 'safe' ? 'text-safe' : status === 'suspicious' ? 'text-yellow-400' : 'text-alert'}`}>
          {messages[status]}
        </span>
      </div>
    </div>
  )
}

export default ResultCard
