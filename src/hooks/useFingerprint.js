// UseFigerprint.js:
// Custom hook to collect browser fingerprint data using basic or advanced mode
import { useState, useEffect } from 'react';
import FingerprintJS from '@fingerprintjs/fingerprintjs';

const useFingerprint = (advancedMode) => {
  const [fingerprintData, setFingerprintData] = useState({
    fingerprint: '',
    userAgent: '',
    screenResolution: '',
    timezone: '',
    language: '',
    cookiesEnabled: '',
    plugins: [],
    hardwareConcurrency: '',
    deviceMemory: '',
  });

  useEffect(() => {
    const getFingerprint = async () => {
      try {
        // // Collect basic browser dataavailable without the library
        const basicData = {
          userAgent: navigator.userAgent,
          screenResolution: `${window.screen.width}x${window.screen.height}`,
          timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          language: navigator.language,
          cookiesEnabled: navigator.cookieEnabled ? 'Yes' : 'No',
          hardwareConcurrency: navigator.hardwareConcurrency || 'Not available',
          deviceMemory: navigator.deviceMemory || 'Not available',
        };

        if (advancedMode) {
          // Load the FingerprintJS library only when advanced mode is enabled and get unique ID
          const fp = await FingerprintJS.load();
          const result = await fp.get();
          
          setFingerprintData({
            ...basicData,
            fingerprint: result.visitorId,
            plugins: Array.from(navigator.plugins).map(p => p.name),
          });
        } else {
          // Generate a simple fingerprint hash from available data
          const simpleFingerprint = hashCode(JSON.stringify(basicData));
          setFingerprintData({
            ...basicData,
            fingerprint: simpleFingerprint.toString(),
            plugins: ['Enable advanced mode to see plugins'],
          });
        }
      } catch (error) {
        console.error('Error generating fingerprint:', error);
      }
    };

    getFingerprint();
  }, [advancedMode]);

  // Simple hash function for basic fingerprint/fallback ID
  const hashCode = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = (hash << 5) - hash + char;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
  };

  return fingerprintData;
};

export default useFingerprint;