import { CommandGrid } from "./CommandGrid"

export const Content = () => {
  return (
    <div className="w-full py-12 flex flex-col items-center">
      <div className="mb-8 text-center slide-in-top">
        <h1 className="text-5xl font-extrabold pixel-font mb-4 text-yellow-300">
          🕹️ Basic Commands for GIT
        </h1>
        <p className="text-lg text-gray-300 mb-10 text-center max-w-xl">
          Esta es una app React para mostrar comandos básicos de Git con estilo
          retro pixel.
        </p>
      </div>
      <CommandGrid />
    </div>
  )
}
