const user = {};

user.mood = 'happy';

user.hobby = 'skydiving';

user.premium = false;

const keys = Object.keys(user);

for (const key of keys) {
  console.log(`${key}: ${user[key]}`);
}
