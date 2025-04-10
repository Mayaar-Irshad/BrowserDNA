import { useState } from "react";
import useFingerprint from "../hooks/useFingerprint";
import FingerprintDisplay from "../components/FingerprintDisplay";
import InfoCard from "../components/InfoCard";
import ToggleSwitch from "../components/ToggleSwitch";
import PrivacyExposure from "../components/PrivacyExposure"; 

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
            
            {/* Updated Privacy Exposure Component */}
            <PrivacyExposure 
              plugins={fingerprintData.plugins} 
              advancedMode={advancedMode} 
            />
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