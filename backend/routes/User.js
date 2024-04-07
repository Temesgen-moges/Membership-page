import express from "express";
import { addUser, getUser, signup } from "../controller/User.js";
import { checkRole } from "../middleware/CheckRoles.js";
import authenticateToken from "../middleware/ExtractToken.js";




const userRoute=express.Router();

// // Create a new Keycloak admin client instance
// const keycloakAdminClient = new KcAdminClient();

// // Middleware to authenticate the admin client
// const authenticateAdminClient = async (req, res, next) => {
//     try {
//         // Authenticate the admin client
//         await keycloakAdminClient.auth({
//             username: 'wandi',
//             password: 'password',
//             grantType: 'password',
//             clientId: 'admin-cli',
//         });
//         next();
//     } catch (error) {
//         console.error('Failed to authenticate as admin:', error);
//         res.status(500).send('Failed to authenticate as admin');
//     }
// };

// const authenticateAsAdmin = async (req, res, next) => {
//     try {
//         await KeycloakAdminClient.auth({
//             username: 'wandi',
//             password: 'password',
//             grantType: 'password',
//             clientId: 'admin-cli',
//         });
//         next();
//     } catch (error) {
//         console.error('Failed to authenticate as admin:', error);
//         res.status(500).send('Failed to authenticate as admin');
//     }
// };


userRoute.get("/hello", (req, res) => {
    res.send("Hello there from the route");
});

// userRoute.post("/user",[keycloak.protect(), authenticateToken, checkRole("ADMIN")],addUser);
userRoute.get("/user",[authenticateToken, checkRole("USER")],getUser);
userRoute.get("/admin",[ authenticateToken, checkRole("ADMIN")],addUser);

userRoute.post("/signup",signup);

export default userRoute;