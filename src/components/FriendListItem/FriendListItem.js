import s from "../FriendListItem/FriendListItem.module.css";
import PropTypes from "prop-types";

function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={s.userItem}>
      <span
        className={s.status}
        style={{ backgroundColor: isOnline ? "green" : "red" }}
      ></span>
      <img className="avatar" src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendListItem;
