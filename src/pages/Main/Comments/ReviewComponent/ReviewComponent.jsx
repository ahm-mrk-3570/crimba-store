import dayjs from "dayjs";

import "./ReviewComponent.css";

import AuthContext from "../../../../context/AuthContext";

const ReviewComponent = ({ item }) => {
  const diff = dayjs(item.created_at).fromNow();

  return (
    <div key={item.id} className="card-container-comments">
      <div className="top-stars">
        <img src={`main-images/stars/${item.rating * 10}.svg`} alt="stars" />
        <p>{diff}</p>
      </div>
      <div className="middle-content-comment">
        <p>{item.review}</p>
      </div>
      <div className="profile-comments">
        <div className="profile-image">
          <img src={item.avatar} alt="profile" />
        </div>
        <div className="contact-info">
          <h5>{item.name}</h5>
        </div>
      </div>
    </div>
  );
};

export default ReviewComponent;
