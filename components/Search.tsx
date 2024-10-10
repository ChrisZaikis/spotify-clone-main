import { MdOutlineShortText } from 'react-icons/md'

const Search = ({ search, setSearch }) => {
  return (
    <div className="flex max-w-[1150px] items-center overflow-hidden rounded-full border-2 border-[#333333] bg-[#1A1A1A] p-1.5 px-5 pr-8">
      <div className="flex-shrink-0 w-4 h-4 border-2 rounded-full animate-pulse" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="border-none bg-[#1A1A1A] text-xs text-white placeholder-[#FAFAFA] outline-none focus:ring-0 lg:w-full"
        placeholder="Search..."
      />

      <div className="ml-auto flex items-center divide-x-2 divide-dotted divide-[#333333]">
        <div className="flex pr-5 space-x-2">
          <button className="tag">Dance</button>
          <button className="tag">House</button>
          <button className="tag">Pop</button>
        </div>

        <div className="flex items-center space-x-1.5 pl-4 text-[#CECECE]">
          <MdOutlineShortText className="text-2xl animate-pulse" />
          <span className="text-sm font-medium">Filters</span>
        </div>
      </div>
    </div>
  )
}

export default Search
