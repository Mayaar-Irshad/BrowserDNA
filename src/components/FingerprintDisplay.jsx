const FingerprintDisplay = ({ fingerprint }) => {
  const handleCopyFingerprint = () => {
    navigator.clipboard.writeText(fingerprint);
  };

  return (
    <div className="
      bg-white rounded-xl border border-gray-200 
      shadow-sm hover:shadow-md
      transition-all duration-300 ease-in-out
      overflow-hidden
      group
      relative
    ">
      {/* Gradient accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 to-secondary-500"></div>
      
      <div className="p-6">
        {/* Header with icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="bg-primary-100 p-2 rounded-lg">
              <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-900">Browser Fingerprint</h3>
          </div>
          <button 
            onClick={handleCopyFingerprint}
            className="
              text-xs px-3 py-1 rounded-full 
              bg-gray-100 hover:bg-gray-200
              text-gray-600 hover:text-gray-800
              flex items-center gap-1
              transition-colors duration-200
              opacity-0 group-hover:opacity-100
            "
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            Copy
          </button>
        </div>

        {/* Visual fingerprint representation */}
        <div className="mb-4">
          <div className="flex justify-center">
            <div className="grid grid-cols-5 gap-1 w-full max-w-xs">
              {fingerprint.split('').slice(0,20).map((char, i) => (
                <div 
                  key={i}
                  className="
                    aspect-square rounded-md flex items-center justify-center 
                    font-mono font-bold text-sm
                    transition-all duration-300 ease-in-out
                    hover:scale-110 hover:z-10 hover:shadow-md
                  "
                  style={{
                    backgroundColor: `hsl(${(i * 45) % 360}, 80%, 90%)`,
                    color: `hsl(${(i * 45) % 360}, 80%, 30%)`,
                    transform: `rotate(${i % 2 ? '2deg' : '-2deg'})`
                  }}
                >
                  {char}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fingerprint value with subtle background */}
        <div className="
          bg-gray-50 p-3 rounded-lg mb-3
          border border-gray-100
          group-hover:bg-gray-100/50
          transition-colors duration-300
        ">
          <code className="
            text-sm font-mono text-gray-800 break-all
            flex items-center justify-between
          ">
            <span>{fingerprint}</span>
          </code>
        </div>

        {/* Description with animated underline */}
        <p className="
          text-sm text-gray-500 
          relative inline-block
          after:content-[''] after:absolute after:bottom-0 after:left-0 
          after:h-px after:w-0 after:bg-primary-500
          group-hover:after:w-full
          after:transition-all after:duration-500
        ">
          This unique identifier is generated from your browser's characteristics.
        </p>
      </div>
    </div>
  );
};

export default FingerprintDisplay;