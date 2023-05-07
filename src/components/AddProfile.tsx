import { useRecoilState } from 'recoil';
import { profileNumberState } from '../atoms/profilesNumber';

const AddProfile = () => {
  const [profileNumber, setProfileNumber] = useRecoilState(profileNumberState);

  return (
    <div>
    
        <button
          className='bg-white rounded-full p-5 '
          onClick={() => {
            setProfileNumber(profileNumber + 1);
          }}
        >
          {' '}
          Add Profile
        </button>
      
      {/*  <button
        className='bg-white rounded-full p-5 '
        onClick={() => {
          setProfileNumber(profileNumber + 1);
        }}
      >
        Add Profile
      </button> */}
    </div>
  );
};

export default AddProfile;
