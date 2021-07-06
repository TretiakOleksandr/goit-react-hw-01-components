import s from "../FriendList/FriendList.module.css";
import PropTypes from "prop-types";
import FriendListItem from "../FriendListItem/FriendListItem";

function FriendList({ friends }) {
  return (
    <div>
      <h2>Friends</h2>
      <ul className={s.friendList}>
        {friends.map((item) => (
          <FriendListItem
            key={item.id}
            name={item.name}
            avatar={item.avatar}
            isOnline={item.isOnline}
          />
        ))}
      </ul>
    </div>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.array,
};

export default FriendList;
