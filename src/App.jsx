import { Content } from "./components/Content"

function App() {
  return (
    <main class="relative inset-0 -z-10 min-h-screen w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex flex-col items-center justify-center">
        <Content />
      </div>
    </main>
  )
}

export default App
