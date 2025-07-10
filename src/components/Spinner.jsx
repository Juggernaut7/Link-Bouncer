// src/components/Spinner.jsx
const Spinner = () => {
  return (
    <div className="mt-6 flex justify-center animate-pulseSlow">
      <div className="w-10 h-10 border-4 border-neonGreen border-t-transparent rounded-full animate-spin"></div>
    </div>
  )
}

export default Spinner
