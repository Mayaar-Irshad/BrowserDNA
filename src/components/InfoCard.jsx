const InfoCard = ({ title, value, icon }) => {
  const handleCopy = () => {
    if (!value) return;
    navigator.clipboard.writeText(value);
  };

  return (
    <div className="
      bg-white/90 backdrop-blur-sm 
      rounded-xl p-4 border border-gray-200 
      shadow-xs hover:shadow-md 
      transition-all duration-300 ease-in-out
      hover:border-primary-200
      hover:-translate-y-0.5
      group
    ">
      {/* Rest of your card content remains the same */}
      <div className="flex items-start gap-3">
        <div className="
          bg-primary-100 p-2 rounded-lg
          group-hover:bg-primary-200
          transition-colors duration-300
        ">
          {icon || (
            <svg className="w-5 h-5 text-primary-600 group-hover:text-primary-800 transition-colors" 
                 fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h3 className="font-medium text-gray-700 group-hover:text-gray-900 transition-colors">{title}</h3>
          <p className="mt-1 text-gray-900 font-mono text-sm break-all">
            {value || 'Not detected'}
          </p>
          {value && (
            <button 
              onClick={handleCopy}
              className="mt-2 text-xs flex items-center 
                        text-primary-600 hover:text-primary-800 
                        opacity-0 group-hover:opacity-100
                        transition-all duration-300"
            >
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
              </svg>
              Copy
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
export default InfoCard;