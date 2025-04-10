const FingerprintDisplay = ({ fingerprint }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center">
      <h3 className="text-lg font-semibold mb-4">Your Browser Fingerprint</h3>
      <div className="bg-gray-100 p-4 rounded-md">
        <code className="text-sm break-all">{fingerprint}</code>
      </div>
      <p className="mt-4 text-sm text-gray-600">
        This unique identifier is generated based on your browser characteristics.
      </p>
    </div>
  );
};

export default FingerprintDisplay;