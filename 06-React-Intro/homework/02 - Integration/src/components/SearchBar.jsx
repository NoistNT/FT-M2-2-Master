export default function SearchBar({ onSearch }) {
  return (
    <div>
      <input type="search" />
      <button onClick={(characterId) => onSearch(characterId)}>Add</button>
    </div>
  )
}
