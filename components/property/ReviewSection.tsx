import { FaStar } from "react-icons/fa";

const ReviewSection: React.FC<{ reviews: any[] }> = ({ reviews }) => {
  return (
    <div className="mt-12 border-t pt-8">
      <h3 className="text-2xl font-semibold mb-6">Reviews</h3>

      {reviews.map((review, index) => (
        <div key={index} className="flex gap-4 mb-8">
          {/* Avatar */}
          <img
            src={review.avatar}
            alt={review.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          {/* Review Content */}
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-semibold">{review.name}</p>
              <div className="flex items-center text-yellow-500 text-sm">
                <FaStar className="w-4 h-4 mr-1" />
                <span className="text-gray-700 font-medium">{review.rating}</span>
              </div>
            </div>
            <p className="text-gray-700 leading-relaxed">{review.comment}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReviewSection;
