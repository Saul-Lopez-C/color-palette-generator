const Header = ({ handleDownload }) => {
  return (
    <div className="h-24 flex items-center justify-between lg:px-12 md:px-8 px-6">
        <h1 className="text-4xl font-bold text-amber-500">Kolors</h1>
        <button onClick={handleDownload} className="bg-amber-500 text-white font-bold px-3 py-2 hover:bg-amber-600 rounded">Download</button>
    </div>
  )
}

export default Header