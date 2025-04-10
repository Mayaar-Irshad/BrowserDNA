const Navbar = () => {
  return (
    <header className="bg-gradient-to-r from-dark-800 to-dark-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <svg className="h-8 w-8 text-indigo-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-indigo-100">
              BrowserDNA
            </h1>
          </div>
          <span className="text-sm bg-indigo-500/10 px-3 py-1 rounded-full text-indigo-200">
            Browser Fingerprinting Tool
          </span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;