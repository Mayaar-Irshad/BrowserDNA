const Navbar = () => {
  return (
    <header className="bg-dark text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">BrowserDNA</h1>
        <span className="text-sm opacity-75">Browser Fingerprinting Tool</span>
      </div>
    </header>
  );
};

export default Navbar;