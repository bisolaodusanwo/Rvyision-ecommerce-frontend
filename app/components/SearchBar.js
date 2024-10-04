export default function SearchBar({ setSearchTerm }) {
  return (
    <input
      type="text"
      placeholder="Search for products..."
      className="p-3 w-full mb-6 rounded-lg border border-gray-300"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
