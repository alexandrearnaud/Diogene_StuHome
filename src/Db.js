import { db } from './firebase';
export const doCreateUser = (id, username, email, city, address, password) =>
  db.ref(`users/${id}`).set({
    username,
    email,
    city,
    address,
    password
  });