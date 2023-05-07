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
    imageUrl: '/src/assets/profile1.jpg',
    className: 'profile1',
    isShown: false,
  },
  {
    id: 2,
    name: 'Olayemi',
    imageUrl: '/src/assets/profie2.jpg',
    className: 'profile2',
    isShown: false,
  },
  {
    id: 3,
    name: 'Starboy',
    imageUrl: '/src/assets/profile3.jpg',
    className: 'profile3',
    isShown: false,
  },
  {
    id: 4,
    name: 'Idolo',
    imageUrl: '/src/assets/profile4.jpg',
    className: 'profile4',
    isShown: false,
  },
  {
    id: 5,
    name: 'Idan',
    imageUrl: '/src/assets/profile5.png',
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
