const InfoCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col">
      <div className="flex items-center mb-2">
        {icon && <span className="mr-2 text-primary">{icon}</span>}
        <h3 className="font-semibold text-gray-700">{title}</h3>
      </div>
      <div className="mt-2">
        <p className="text-gray-600 break-all">{value || 'Not available'}</p>
      </div>
    </div>
  );
};

export default InfoCard;