export interface ProfileStructure {
  id: number;
  name: string;
  imageUrl: string;
  className: string;
  isShown?: boolean;
}

const profiles: ProfileStructure[] = [
  {
    id: 1,
    name: 'Oladotun',
    imageUrl: 'https://res.cloudinary.com/dmd47saqa/image/upload/v1683491254/profile3_rmqoeb.jpg',
    className: 'profile1',
    isShown: false,
  },
  {
    id: 2,
    name: 'Olayemi',
    imageUrl: 'https://res.cloudinary.com/dmd47saqa/image/upload/v1683491254/profie2_ughwfd.jpg',
    className: 'profile2',
    isShown: false,
  },
  {
    id: 3,
    name: 'Starboy',
    imageUrl: 'https://res.cloudinary.com/dmd47saqa/image/upload/v1683491254/profile1_mosede.jpg',
    className: 'profile3',
    isShown: false,
  },
  {
    id: 4,
    name: 'Idolo',
    imageUrl: 'https://res.cloudinary.com/dmd47saqa/image/upload/v1683491255/profile4_ohqnfr.jpg',
    className: 'profile4',
    isShown: false,
  },
  {
    id: 5,
    name: 'Idan',
    imageUrl: 'https://res.cloudinary.com/dmd47saqa/image/upload/v1683491255/profile5_iiylyp.png',
    className: 'profile5',
    isShown: false,
  },
  /*  {
    id: 6,
    name: 'Idan',
    imageUrl: '/src/assets/profile5.png',
    className: 'profile5',
  },
  {
    id: 7,
    name: 'Idan',
    imageUrl: '/src/assets/profile5.png',
    className: 'profile5',
  }, */
];

export default profiles;
