import { ProfileStructure } from '../utils/profilesData';
import { useState } from 'react';

interface ProfileProps {
  profile: ProfileStructure;
}

const Profile = ({ profile }: ProfileProps) => {
  const { name, imageUrl, className } = profile;
  return (
    <div className={` ${className} gap-4`}>
      <img
        src={imageUrl}
        alt=''
        className='rounded-full w-[180px] h-[180px] object-cover object-top'
      />
      <h5 className='text-white font-bold'>{name}</h5>
      {/*  {id > 1 ? <button className='bg-white rounded-full p-5 '> Add Profile</button> : null} */}
    </div>
  );
};

export default Profile;
