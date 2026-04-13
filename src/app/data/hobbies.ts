export interface Hobby {
  titleKey: string;
  descriptionKey: string;
  iconName: 'Music' | 'Gamepad2' | 'Plane' | 'Camera' | 'Book' | 'Dumbbell' | 'UtensilsCrossed';
}

export const hobbies: Hobby[] = [
  {
    titleKey: 'hobbies.gastronomy.title',
    descriptionKey: 'hobbies.gastronomy.description',
    iconName: 'UtensilsCrossed'
  },
  {
    titleKey: 'hobbies.music.title',
    descriptionKey: 'hobbies.music.description',
    iconName: 'Music'
  },
  {
    titleKey: 'hobbies.gaming.title',
    descriptionKey: 'hobbies.gaming.description',
    iconName: 'Gamepad2'
  },
  {
    titleKey: 'hobbies.travel.title',
    descriptionKey: 'hobbies.travel.description',
    iconName: 'Plane'
  },
  {
    titleKey: 'hobbies.reading.title',
    descriptionKey: 'hobbies.reading.description',
    iconName: 'Book'
  },
  {
    titleKey: 'hobbies.fitness.title',
    descriptionKey: 'hobbies.fitness.description',
    iconName: 'Dumbbell'
  }
];

export const interestKeys = [
  'hobbies.interests.ai',
  'hobbies.interests.ml',
  'hobbies.interests.cloud',
  'hobbies.interests.devops',
  'hobbies.interests.blockchain',
  'hobbies.interests.cybersecurity',
  'hobbies.interests.architecture',
  'hobbies.interests.opensource',
  'hobbies.interests.uiux',
  'hobbies.interests.startups',
  'hobbies.interests.automation',
  'hobbies.interests.edge'
];
