import "./App.css";
import user from "./user.json";
import UserProfile from "./components/Profile/Profile";

function App() {
  return (
    <UserProfile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
  );
}

export default App;
