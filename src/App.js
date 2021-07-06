import "./App.css";

import user from "./user.json";
import UserProfile from "./components/Profile/Profile";

import statData from "./statistical-data.json";
import Statistics from "./components/Statistics/Statistics";

import FriendList from "./components/FriendList/FriendList";
import friendsData from "./friends.json";

import TransactionHistory from "./components/TransactionsHistory/TransactionsHistory";
import transactionsData from "./transactions.json";

import { div } from "prelude-ls";

function App() {
  return (
    <div>
      <UserProfile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <Statistics title="Upload stats" stats={statData} />

      <FriendList friends={friendsData} />

      <TransactionHistory items={transactionsData} />
    </div>
  );
}

export default App;
