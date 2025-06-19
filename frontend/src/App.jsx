import LeftSection from "./components/LeftSection"
import RightSection from "./components/RightSection"
import { useState } from "react"

function App() {
  const [reloadFlag, setReloadFlag] = useState(false)
  const refetchCharts = () => setReloadFlag(prev => !prev)

  return (
    <>
      <div className="flex h-screen">
        <LeftSection onVoteSubmitted={refetchCharts} />
        <RightSection reload={reloadFlag} />
      </div>
    </>
  )
}

export default App
