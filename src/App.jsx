// src/App.jsx
import React, { useState } from "react"
import LinkInput from "./components/LinkInput"
import ResultCard from "./components/ResultCard"
import Spinner from "./components/Spinner"

function App() {
  const [url, setUrl] = useState("")
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <div className="min-h-screen bg-darkBg text-white font-sans flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl">
      <h1 className="text-3xl font-bold mb-6 text-center text-neonGreen tracking-wide drop-shadow-neon animate-pulseSlow">
  🔗 LinkBouncer
</h1>
        <p className="text-lg text-center text-neonGreen tracking-wide drop-shadow-neon animate-pulseSlow">
  Check the status of a link in real-time.
</p>
        <p className="text-lg text-center text-neonGreen tracking-wide drop-shadow-neon animate-pulseSlow">
  Enter a link below and see the status in real-time.
</p>
        <LinkInput
          url={url}
          setUrl={setUrl}
          setStatus={setStatus}
          setLoading={setLoading}
        />

        {loading && <Spinner />}
        {!loading && status && <ResultCard url={url} status={status} />}
      </div>
    </div>
  )
}

export default App
