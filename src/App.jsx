import { useStore } from './store'

import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

function App() {

  const bears = useStore((state) => state.bears)

  const increasePopulation = useStore((state) => state.increasePopulation)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center space-y-6 bg-white p-10 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-800">Vite + React</h1>

        <div className="space-y-4">
          <Button onClick={increasePopulation}>
            Click {bears}
          </Button>

          <Slider defaultValue={[33]} max={100} step={1} />
        </div>

        <p className="text-sm text-gray-600">
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>

        <p className="text-xs text-gray-400">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </div>
  )
}

export default App
