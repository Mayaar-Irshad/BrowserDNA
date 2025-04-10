const InfoCard = ({ title, value, icon }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center mb-3">
          {icon && <span className="text-2xl mr-3">{icon}</span>}
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>
        <div className="pl-9"> {/* Adjust based on icon size */}
            <p className="text-gray-600 break-words text-sm md:text-base">
              {value || 'Not available'}
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;