import Profile from './Profile';
import profiles from '../utils/profilesData';
import { useRecoilValue } from 'recoil';
import { profileNumberState } from '../atoms/profilesNumber';


const ProfileList = () => {
  const profileNumber = useRecoilValue(profileNumberState);

  return (
    <div className=' w-[35%] h-[70%] rounded-full flex justify-center items-center gap-8 relative'>
      {profiles.slice(0, profileNumber).map((profile) => (
        <Profile profile={profile} key={profile.id} />
      ))}
    </div>
  );
};

export default ProfileList;
