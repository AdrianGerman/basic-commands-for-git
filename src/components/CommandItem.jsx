export const CommandItem = ({ command, description }) => {
  const parseCommand = (text) => {
    const regex = /"[^"]*"|<[^>]*>|--?[a-zA-Z-]+|\b[A-Z]{2,}\b|[\w-]+/g
    const tokens = text.match(regex) || []

    return tokens.map((token, i) => {
      let colorClass = ""

      if (i === 0 && token === "git") {
        colorClass = "text-green-400"
      } else if (/^--?\w+/.test(token)) {
        colorClass = "text-yellow-300"
      } else if (/^<.*>$/.test(token)) {
        colorClass = "text-white"
      } else if (/^".*"$/.test(token)) {
        colorClass = "text-white"
      } else if (/^[A-Z]{2,}$/.test(token)) {
        colorClass = "text-blue-400"
      } else {
        colorClass = "text-purple-400"
      }

      return (
        <span key={i} className={`${colorClass}`}>
          {i > 0 ? " " : ""}
          {token}
        </span>
      )
    })
  }

  return (
    <div className="bg-gray-700 p-2 rounded-none shadow-[4px_4px_0px_0px_#000] outline-2 outline-black transition-transform duration-300 hover:scale-105 cursor-pointer">
      <p className="bg-black py-1 px-2 text-sm font-mono before:content-['$'] before:mr-1 before:text-gray-500">
        {parseCommand(command)}
      </p>
      <p className="text-gray-400 text-xs before:content-['#'] before:mr-1 mt-2">
        {description}
      </p>
    </div>
  )
}
