const FingerprintDisplay = ({ fingerprint }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
      <div className="text-center">
        <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Your Browser Fingerprint</h3>
        
        {/* Visual Fingerprint Grid */}
        <div className="flex justify-center my-4">
          <div className="grid grid-cols-5 gap-2 w-40">
            {fingerprint.split('').slice(0,10).map((char, i) => (
              <div 
                key={i}
                className="h-8 rounded-md flex items-center justify-center font-mono font-bold"
                style={{
                  backgroundColor: `hsl(${(i * 30) % 360}, 70%, 80%)`,
                  color: `hsl(${(i * 30) % 360}, 70%, 30%)`
                }}
              >
                {char}
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-gray-50 p-3 rounded-lg mb-4">
          <code className="text-sm font-mono text-indigo-600 break-all">{fingerprint}</code>
        </div>
        <p className="text-sm text-gray-500">
          This unique identifier is generated from your browser's characteristics.
        </p>
      </div>
    </div>
  );
};

export default FingerprintDisplay;