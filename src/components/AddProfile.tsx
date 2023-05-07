import { useRecoilState } from 'recoil';
import { profileNumberState } from '../atoms/profilesNumber';

const AddProfile = () => {
  const [profileNumber, setProfileNumber] = useRecoilState(profileNumberState);

  return (
    <div>
      <button
        className='bg-white rounded-full p-5 absolute bottom-0 left-0 right-0 mx-auto'
        onClick={() => {
          setProfileNumber(profileNumber + 1);
        }}
      >
        Add Profile
      </button>
    </div>
  );
};

export default AddProfile;
