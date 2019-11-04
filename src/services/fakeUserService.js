export const users = [
  { _id: "9f462e73-47f2-41fc-b671-2043fb30e90c", fname: "Sachin", lname: "Tyagi", message: "Hi I am Sachin and This is my first message 11111111111111." },
  { _id: "c05b0931-0e79-4e29-aff2-25b70d1d83fb", fname: "Gaurav", lname: "Chopra", message: "Hi I am Gaurav and This is my first message 2222222222222." },
  { _id: "fcd2e3ec-e695-4abc-b6ad-d69b872c0768", fname: "Rohit", lname: "Sharma", message: "Hi I am Rohit and This is my first message 33333333333." }
];

export function getAllUsers() {
  return users.filter(g => g);
}

export function getUser(id) {
  return users.filter(g => g._id === id);
}

export function deleteUser(id) {
  let userInDb = users.find(u => u._id === id);
  users.splice(users.indexOf(userInDb), 1);
  return userInDb;
}

export function saveUser(userObj) {
  const userCompleteObj = { "_id": uuidv4(), ...userObj }
  users.push(userCompleteObj)
}

export function editUser(data) {
  console.log("Edit user function", data._id)
  const users = getUser(data._id);

  users[0].fname = data.fname;
  users[0].lname = data.lname;
  users[0].message = data.message;
  console.log(users[0]);

}

function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
