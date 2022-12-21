import user from './user.json';
import data from './data.json';
import { Profile } from './components/Profile/Profile';
import { Statistics } from 'components/Statistic/Statistics';


export const App = () => {
  return (
    <>
      <Profile
        key={user.username}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <>
        <Statistics title="Upload stats" stats={data} />
      </> 
    </>
  );
};
