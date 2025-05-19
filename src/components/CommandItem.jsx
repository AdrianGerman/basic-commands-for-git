export const CommandItem = ({ command, description }) => (
  <div className="bg-gray-700 border-2 border-black p-2 rounded-lg shadow pixel-border">
    <p className="text-green-400 font-mono text-sm">{command}</p>
    <p className="text-gray-300 text-xs">{description}</p>
  </div>
)
