import bcrypt from 'bcrypt';

import KcAdminClient from '@keycloak/keycloak-admin-client';

// Create a new Keycloak admin client instance
const kcAdminClient = new KcAdminClient({
  baseUrl: 'http://127.0.0.1:8080',
  realmName: process.env.KEYCLOAK_REALM

});

// Middleware to authenticate the admin client
await kcAdminClient.auth({
  username: process.env.USER_NAME ,
  password: process.env.PASSWORD,
  grantType: 'password', 
  realmName: process.env.KEYCLOAK_REALM,
  clientId: process.env.KEYCLOAK_CLIENT
});

export const addUser =async (req,res) =>{

  console.log("hello admin");

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
