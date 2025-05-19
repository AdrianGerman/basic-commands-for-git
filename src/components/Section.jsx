import { CommandItem } from "./CommandItem"

export const Section = ({
  title,
  emoji,
  commands,
  columns = 2,
  className = ""
}) => (
  <div className={`transition-all duration-300 ${className}`}>
    <h2 className="text-lg font-bold mb-4 text-pink-300">
      {emoji} {title}
    </h2>
    <div className={`grid grid-cols-1 sm:grid-cols-${columns} gap-4`}>
      {commands.map((cmd, idx) => (
        <CommandItem key={idx} command={cmd.cmd} description={cmd.desc} />
      ))}
    </div>
  </div>
)
