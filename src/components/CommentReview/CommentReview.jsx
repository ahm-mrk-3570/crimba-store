import dayjs from 'dayjs';
import './CommentReview.css';

export default function CommentReview({ review }) {
  return (
    <div className='main-comment-review-p'>
      <div className="top-comment-review">
        <img src={review.avatar} width={65} height={65} alt="profile" />
        <div>
          <p>{review.name}</p>
          <img src={`main-images/stars/${review.rating * 10}.svg`} height={24} alt="rating" />
        </div>
      </div>
      <div className="middle-comment-review">
        <p>
          {review.review}
        </p>
      </div>
      <div className="bottom-comment-review">
        <p>Review by <span>{review.name}</span> Posted On <span>{dayjs(review.created_at).format("MMM DD, YYYY")}</span></p>
      </div>
    </div>
  )
}
