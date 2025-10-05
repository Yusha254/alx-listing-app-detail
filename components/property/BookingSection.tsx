import React from "react";

const BookingSection: React.FC<{ price: number }> = ({ price }) => {
  const nights = 7;
  const total = price * nights;

  return (
    <div className="bg-white p-6 border border-gray-200 shadow-md rounded-xl w-full max-w-sm">
      <h3 className="text-2xl font-semibold mb-2">${price}/night</h3>
      <p className="text-gray-500 mb-4">Includes taxes and fees</p>

      {/* Date Inputs */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="text-sm font-medium">Check-in</label>
          <input
            type="date"
            className="border rounded-md p-2 w-full mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
        <div>
          <label className="text-sm font-medium">Check-out</label>
          <input
            type="date"
            className="border rounded-md p-2 w-full mt-1 focus:ring-2 focus:ring-green-500 focus:outline-none"
          />
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between mt-4 text-gray-700">
        <span>Total payment ({nights} nights)</span>
        <strong>${total}</strong>
      </div>

      {/* Reserve Button */}
      <button className="mt-6 bg-green-600 hover:bg-green-700 text-white w-full py-3 rounded-md font-medium transition">
        Reserve now
      </button>
    </div>
  );
};

export default BookingSection;
