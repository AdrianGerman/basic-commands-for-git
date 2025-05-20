export const CommandItem = ({ command, description }) => (
  <div className="bg-gray-700 p-2 rounded-none shadow-[4px_4px_0px_0px_#000] outline-2 outline-black transition-transform duration-300 hover:scale-105 cursor-pointer">
    <p className="text-green-400 font-mono text-sm before:content-['$'] before:mr-1 before:text-gray-500 bg-black py-1 px-2">
      {command}
    </p>
    <p className="text-gray-400 text-xs before:content-['#'] before:mr-1 mt-2">
      {description}
    </p>
  </div>
)
