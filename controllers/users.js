import { v4 as uuidv4 } from 'uuid';

let usersA = [];

export const createUser = (req, res) => {
  console.log("Message sent");
  const userWithId = { ...req.body, id: uuidv4() };
  usersA.push(userWithId);
  res.send(`Message sent to database ${req.body.firstName}`);
};

export const getAllUser = (req, res) => {
  console.log(usersA);
  res.send(usersA);
};

export const getParticularUser = (req, res) => {
  const { id } = req.params;
  let foundUSer = usersA.find((user) => {
    if (user.id == id) {
      return user;
    }
  });
  res.send(foundUSer);
};

export const deleteUser = (req, res) => {
  const { id } = req.params;
  usersA = usersA.filter((user) => {
    if (user.id != id) {
      return user;
    }
  });
  res.send(`Deleted ${id}`);
};

export const updateUser = (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  let userToBeUpdated = usersA.find((user) => {
    if (user.id == id) {
      return user;
    }
  });

  if (firstName) {
    userToBeUpdated.firstName = firstName;
  }
  if (lastName) {
    userToBeUpdated.lastName = lastName;
  }
  if (age) {
    userToBeUpdated.age = age;
  }
  
  res.send(`Updated ${id}` );
};
