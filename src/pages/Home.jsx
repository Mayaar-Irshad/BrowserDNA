import { useState } from "react";
import useFingerprint from "../hooks/useFingerprint";
import FingerprintDisplay from "../components/FingerprintDisplay";
import InfoCard from "../components/InfoCard";
import ToggleSwitch from "../components/ToggleSwitch";

const Home = () => {
  const [advancedMode, setAdvancedMode] = useState(false);
  const fingerprintData = useFingerprint(advancedMode);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Browser Information</h2>
            <p className="text-gray-600">Detailed analysis of your browser characteristics</p>
          </div>
          <ToggleSwitch 
            label="Advanced Fingerprinting" 
            enabled={advancedMode} 
            setEnabled={setAdvancedMode} 
          />
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Column - Fingerprint & Privacy */}
          <div className="lg:col-span-1 space-y-6">
            <FingerprintDisplay fingerprint={fingerprintData.fingerprint} />
            
            {/* Privacy Meter */}
            <div className="bg-white rounded-xl p-4 border border-gray-200">
              <h3 className="font-medium mb-2">Privacy Exposure</h3>
              <div className="w-full bg-gray-100 rounded-full h-2.5">
                <div 
                  className="bg-red-500 h-2.5 rounded-full transition-all duration-500" 
                  style={{ width: `${fingerprintData.plugins.length > 0 ? '75%' : '45%'}` }}
                ></div>
              </div>
              <p className="text-xs mt-2 text-gray-500">
                {fingerprintData.plugins.length > 0 
                  ? "High (Advanced fingerprinting enabled)" 
                  : "Medium (Basic fingerprinting)"}
              </p>
            </div>
          </div>
          
          {/* Right Column - Info Cards */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <InfoCard 
                title="User Agent" 
                value={fingerprintData.userAgent} 
                icon="🖥️"
              />
              <InfoCard 
                title="Screen Resolution" 
                value={fingerprintData.screenResolution} 
                icon="📱"
              />
              <InfoCard 
                title="Timezone" 
                value={fingerprintData.timezone} 
                icon="🌐"
              />
              <InfoCard 
                title="Language" 
                value={fingerprintData.language} 
                icon="🗣️"
              />
              <InfoCard 
                title="Cookies Enabled" 
                value={fingerprintData.cookiesEnabled} 
                icon="🍪"
              />
              <InfoCard 
                title="CPU Cores" 
                value={fingerprintData.hardwareConcurrency} 
                icon="⚙️"
              />
              <InfoCard 
                title="Device Memory (GB)" 
                value={fingerprintData.deviceMemory} 
                icon="🧠"
              />
              <InfoCard 
                title="Browser Plugins" 
                value={fingerprintData.plugins.join(', ') || 'Enable advanced mode to see plugins'} 
                icon="🔌"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;