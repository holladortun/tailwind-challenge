import AddProfile from './components/AddProfile';
import ProfileList from './components/ProfileList';
import { useRecoilValue } from 'recoil';
import { profileNumberState } from './atoms/profilesNumber';

function App() {
  const profileNumber = useRecoilValue(profileNumberState);
  return (
    <>
      <div className='bg-black h-[100vh] flex flex-col  justify-center items-center'>
        {profileNumber !== 0 ? <ProfileList /> : null}
        <AddProfile />
      </div>
    </>
  );
}

export default App;
