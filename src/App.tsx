import AddProfile from './components/AddProfile';
import ProfileList from './components/ProfileList';
import { useRecoilValue } from 'recoil';
import { profileNumberState } from './atoms/profilesNumber';

function App() {
  return (
    <>
      <div className='bg-black h-[100vh] flex flex-col justify-center items-center'>
        <ProfileList />
        <AddProfile />
      </div>
    </>
  );
}

export default App;
