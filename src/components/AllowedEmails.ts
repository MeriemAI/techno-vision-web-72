
export const ALLOWED_EMAILS = [
  'mji098om@gmail.com',
  'zaidi.youcef2009@gmail.com',
  'youcefdjebli6032@gmail.com',
  'khalil.benarab@gmail.com',
  'amanirezine@gmail.com',
  'damrani893@gmail.com',
  'taoubaben94@gmail.com',
  'rymbouchibi88@gmail.com',
  'lamara.inf@gmail.com',
  'hlouai03@gmail.com',
  'alouaboulaa@gmail.com',
  'abdallahbensaad2012@gmail.com',
  'meriemai2009@gmail.com',
  'ikhlassehr@gmail.com'
];

export const isEmailAllowed = (email: string): boolean => {
  return ALLOWED_EMAILS.includes(email.toLowerCase());
};
