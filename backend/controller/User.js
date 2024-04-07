import bcrypt from 'bcrypt';

import KcAdminClient from '@keycloak/keycloak-admin-client';

// Create a new Keycloak admin client instance
const kcAdminClient = new KcAdminClient({
  baseUrl: 'http://127.0.0.1:8080',
  realmName: process.env.KEYCLOAK_REALM
  // clientSecret: '8Dw7HchZP2xdS0ZPXCfGDXnO4a99wPqP'

});

// Middleware to authenticate the admin client
await kcAdminClient.auth({
  username: process.env.USER_NAME ,
  password: process.env.PASSWORD,
  grantType: 'password', // Use password grant type for username/password authentication
  realmName: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT
  // username: 'wandi',
  // password: 'wandi',
  // grantType: 'client_credentials',
  // clientId: 'demos',
  // realmName: 'demo',
  //8Dw7HchZP2xdS0ZPXCfGDXnO4a99wPqP
  // totp: '123456', // optional Time-based One-time Password if OTP is required in authentication flow
});

export const addUser =async (req,res) =>{

  console.log("hello admin");

  //   hashPassword(req.body.password)
  // .then(hashedPassword => {
  //   comparePasswords(req.body.password, hashedPassword).then(match =>{

  //       console.log("password match");
  //   }).catch(err =>{
  //       console.log("password does not match");
  //   })
  //   console.log('Hashed Password:', hashedPassword);
  // })
  // .catch(error => {
  //   console.error('Error:', error);
  // });
  //   console.log("we are in");
  //   console.log("the request is : " + req.body);
  //   try {
  //       return match;
  //       const user=await users.create(req.body);
  //       console.log("added user "+user);
  //       return res.status(200).json(user);
  //   } catch (error) {
  //     console.log(error.message);
  //     return res.status(404).json({ message: error.message });
  //   }
}

async function hashPassword(password) {
    try {
      // Generate a salt
      const salt = await bcrypt.genSalt(10);
      // Hash the password using the generated salt
      const hashedPassword = await bcrypt.hash(password, salt);
      return hashedPassword;
    } catch (error) {
      throw error;
    }
  }

  async function comparePasswords(plaintextPassword, hashedPassword) {
    try {
      // Compare the plaintext password with the hashed password
      const match = await bcrypt.compare(plaintextPassword, hashedPassword);
      return match;
    } catch (error) {
      throw error;
    }
  }

export const getUser=() =>{

  console.log("hello user");
}

export const signup = async (req, res, next) => {
  console.log("the requested user is ::" , req.body);
  try {
      // Check if the Keycloak admin client is authenticated
      if (!kcAdminClient.auth) {
          throw new Error('Keycloak admin client is not authenticated');
      }
      // Create a new user
      const newUser = await kcAdminClient.users.create({
          realm: 'demo',
          username: req.body.username,
          email: req.body.email,
          firstName: req.body.username,
          lastName: req.body.username,
          enabled: true,
          credentials: [{ type: 'password', value: req.body.password }],
      });

      // console.log(await kcAdminClient.roles.find());

      // const assignRole= await kcAdminClient.users.addRealmRoleMappings({
      //   id: newUser.id,
      //   roles: ['offline_access'],
      //   realm: 'demo'
      // })

      // const newRole = await kcAdminClient.roles.create({
      //   realm: 'demo',
      //   name: 'wandi'
      // })

      // Assign the newly created role to the newly created user
    //  const assignRole= await kcAdminClient.users.update({
    //     realm: 'demo',
    //     id: newUser.id,
    //     roles: ['USER'], // Array containing the role name
    //   });

      console.log('New user registered successfully:', newUser);
      // console.log('New Role registered successfully:', newRole);
      // console.log('New Role Assigned successfully:', assignRole);

      res.status(201).send(newUser);

      // Continue to the next middleware or route handler
      next();
  } catch (error) {
      console.error('Error registering user:', error);
      res.status(500).send('Error registering user');
  }
  // const users = await kcAdminClient.users.find({ first: 0, max: 10 });
  // console.log(users);
  // res.status(200).send(users);
};
