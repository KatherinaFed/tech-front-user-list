import './UserCard.scss';
import noAvatar from '../../assets/no_user_avatar.png'
import notLiked from '../../assets/icon_heart_empty.png';
import Liked from '../../assets/icon_heart_filled.png';
import { useState } from 'react';

function UserCard() {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const likedIcon = isLiked ? Liked : notLiked;

  return (
    <div className="user_card_container">
      <div className="user_avatar">
        <img
          src={noAvatar}
          alt="user_avatar"
        />
      </div>
      <div className="user_name">
        <h2>User Name</h2>
      </div>
      <div className="user_like">
        <span>
          <img
            src={likedIcon}
            alt="like_icon"
            onClick={() => setIsLiked(!isLiked)}
          />
        </span>
      </div>
    </div>
  );
}

export default UserCard;
