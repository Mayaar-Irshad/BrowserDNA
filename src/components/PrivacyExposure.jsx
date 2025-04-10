import React from 'react';

const PrivacyExposure = ({ plugins, advancedMode }) => {
  // Determine exposure level based on plugins and advanced mode
  const exposureLevel = advancedMode ? 'high' : 
                       plugins.length > 0 ? 'medium' : 'low';

  const exposureData = {
    high: {
      level: 80,
      color: 'bg-red-500',
      text: 'High Risk',
      description: 'Advanced fingerprinting enabled - many trackable characteristics',
      icon: '🔴',
      gradient: 'bg-gradient-to-r from-red-500 to-red-400'
    },
    medium: {
      level: 50,
      color: 'bg-yellow-500',
      text: 'Medium Risk',
      description: 'Some trackable characteristics detected',
      icon: '🟡',
      gradient: 'bg-gradient-to-r from-yellow-500 to-yellow-400'
    },
    low: {
      level: 20,
      color: 'bg-green-500',
      text: 'Low Risk',
      description: 'Minimal fingerprinting - few trackable characteristics',
      icon: '🟢',
      gradient: 'bg-gradient-to-r from-green-500 to-green-400'
    }
  };

  const current = exposureData[exposureLevel];

  return (
    <div className="
      bg-white rounded-xl border border-gray-200
      shadow-sm hover:shadow-md
      transition-all duration-300 ease-in-out
      overflow-hidden
      group
    ">
      {/* Gradient header */}
      <div className={`h-1 w-full ${current.gradient}`}></div>
      
      <div className="p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center gap-3">
            <span className="text-2xl">{current.icon}</span>
            <h3 className="text-lg font-semibold text-gray-900">Privacy Exposure</h3>
          </div>
          <span className={`
            px-2 py-1 rounded-full text-xs font-medium
            ${current.color === 'bg-red-500' ? 'bg-red-100 text-red-800' : 
              current.color === 'bg-yellow-500' ? 'bg-yellow-100 text-yellow-800' :
              'bg-green-100 text-green-800'}
          `}>
            {current.text}
          </span>
        </div>

        {/* Animated meter */}
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Low</span>
            <span>High</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
            <div 
              className={`${current.color} h-2.5 rounded-full transition-all duration-1000 ease-out`}
              style={{ width: `${current.level}%` }}
            ></div>
          </div>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          {current.description}
        </p>

        {/* Exposure details */}
        <div className="bg-gray-50 rounded-lg p-3 border border-gray-100">
          <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1">
            Exposure Factors
          </h4>
          <ul className="text-xs text-gray-600 space-y-1">
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full mr-2" 
                    style={{ backgroundColor: current.color.replace('bg-', '') }}></span>
              Browser fingerprint uniqueness
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              {plugins.length} detectable plugin{plugins.length !== 1 ? 's' : ''}
            </li>
            <li className="flex items-center">
              <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
              {advancedMode ? 'Advanced tracking enabled' : 'Basic tracking'}
            </li>
          </ul>
        </div>

        {/* Privacy tip */}
        <div className="mt-3 text-xs text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          💡 Tip: {exposureLevel === 'high' 
            ? 'Disable advanced fingerprinting to reduce exposure' 
            : 'Use a privacy-focused browser for better protection'}
        </div>
      </div>
    </div>
  );
};

export default PrivacyExposure;