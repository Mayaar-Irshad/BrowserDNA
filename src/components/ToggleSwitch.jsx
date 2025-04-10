import { useState } from 'react';

const ToggleSwitch = ({ label, enabled, setEnabled }) => {
  return (
    <div className="flex items-center">
      <label className="mr-2 text-gray-700">{label}</label>
      <div
        className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer transition-colors ${enabled ? 'bg-primary' : 'bg-gray-300'}`}
        onClick={() => setEnabled(!enabled)}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition-transform ${enabled ? 'translate-x-6' : ''}`}
        ></div>
      </div>
    </div>
  );
};

export default ToggleSwitch;