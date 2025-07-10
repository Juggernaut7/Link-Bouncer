// src/components/LinkInput.jsx
import { scanLink } from '../utils/scanLink'
import { FiSend } from 'react-icons/fi'

const LinkInput = ({ url, setUrl, setStatus, setLoading }) => {
  const handleScan = async () => {
    if (!url) return
    setLoading(true)
    const result = await scanLink(url)
    setStatus(result.status)
    setLoading(false)
  }

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4">
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Paste URL here..."
        className="w-full p-3 rounded-lg bg-darkCard border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-neonGreen"
      />
      <button
        onClick={handleScan}
        className="flex items-center gap-2 bg-neonGreen text-black px-5 py-3 rounded-lg shadow-neon transition hover:scale-105"
      >
        <FiSend />
        Scan Link
      </button>
    </div>
  )
}

export default LinkInput
