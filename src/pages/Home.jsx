import { useState } from 'react';
import useFingerprint from '../hooks/useFingerprint';
import FingerprintDisplay from '../components/FingerprintDisplay';
import InfoCard from '../components/InfoCard';
import ToggleSwitch from '../components/ToggleSwitch';

const Home = () => {
  const [advancedMode, setAdvancedMode] = useState(false);
  const fingerprintData = useFingerprint(advancedMode);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800">Browser Information</h2>
          <ToggleSwitch 
            label="Advanced Fingerprinting" 
            enabled={advancedMode} 
            setEnabled={setAdvancedMode} 
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <FingerprintDisplay fingerprint={fingerprintData.fingerprint} />
          
          <div className="grid grid-cols-1 gap-4">
            <InfoCard 
              title="User Agent" 
              value={fingerprintData.userAgent} 
            />
            <InfoCard 
              title="Screen Resolution" 
              value={fingerprintData.screenResolution} 
            />
            <InfoCard 
              title="Timezone" 
              value={fingerprintData.timezone} 
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <InfoCard 
            title="Language" 
            value={fingerprintData.language} 
          />
          <InfoCard 
            title="Cookies Enabled" 
            value={fingerprintData.cookiesEnabled} 
          />
          <InfoCard 
            title="CPU Cores" 
            value={fingerprintData.hardwareConcurrency} 
          />
          <InfoCard 
            title="Device Memory (GB)" 
            value={fingerprintData.deviceMemory} 
          />
          <InfoCard 
            title="Browser Plugins" 
            value={fingerprintData.plugins.join(', ')} 
          />
        </div>
      </div>
    </div>
  );
};

export default Home;