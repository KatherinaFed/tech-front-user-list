import './UserCard.scss';
import noAvatar from '../../assets/no_user_avatar.png';
import notLiked from '../../assets/icon_heart_empty.png';
import Liked from '../../assets/icon_heart_filled.png';
import { User } from '../../service/usersApi';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../app/hooks';

function UserCard({ user }: { user: User }) {
  const navigate = useNavigate();
  const [active, setActive] = useLocalStorage(`${user.id}`, 'false');

  const likedIcon = active === 'true' ? Liked : notLiked;

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();

    setActive((prevActive) => (prevActive === 'false' ? 'true' : 'false'));
  };

  return (
    <div
      className="user_card_container"
      onClick={() => navigate(`users/${user.id}`)}
    >
      <div className="user_avatar">
        <img src={user ? user.avatar : noAvatar} alt="user_avatar" />
      </div>
      <div className="user_name">
        <h2>
          {user.first_name} {user.last_name}
        </h2>
      </div>
      <div className="user_like">
        <span>
          <img src={likedIcon} alt="like_icon" onClick={handleLike} />
        </span>
      </div>
    </div>
  );
}

export default UserCard;
