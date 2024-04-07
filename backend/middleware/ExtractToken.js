import jwt from "jsonwebtoken";
import jwtmod from "jsonwebtoken";

const authenticateToken = async (req, res, next) => {

  console.log("token is comming :",req.headers.authorization);
  console.log("token is comming :",req.body);

  try {
    // Decode access token
    // const bearerToken = req.headers.authorization; 
    // bearerToken would return "Bearer <access_token>"
    const authorizationHeader = req.headers.authorization;
    
    if (!authorizationHeader) {
      return res.status(401).json({ message: "Authorization header is missing" });
    }

    const token = authorizationHeader.split(" ");
    console.log("token for decode", token);
    // token would return ["Bearer", "<access_token>"]

    const public_key = `-----BEGIN PUBLIC KEY-----\n${process.env.PUBLICKEY}\n-----END PUBLIC KEY-----`;

    console.log("publickey: ",public_key);
    const decodedToken = jwtmod.verify(token[1], public_key, {
      algorithms: ["RS256"],
    });

    console.log("decoded is :",decodedToken);
    // tokenData would return user's data
    const { email } = decodedToken;

    console.log("user is: ",email);
    // Store decoded token data in request
    req.tokenData = decodedToken;

    next();
  } catch (error) {
    next(error);
  }
}

export default authenticateToken;
