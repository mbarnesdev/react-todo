import { useAtom } from "jotai"
import { isDarkModeAtom } from "@/atoms"
import cx from "classnames"

const App = () => {
  const [isDarkMode, setIsDarkMode] = useAtom(isDarkModeAtom)

  const handleToggleButton = () => setIsDarkMode((prevState: boolean) => !prevState)
  const headerClassnames = cx({"dark-mode": isDarkMode})

  return (
    <div>
      <h1 className={headerClassnames}>
        Theme Color
      </h1>
      <button onClick={handleToggleButton}>
        Toggle
      </button>
    </div>
  )
};

export default App;
