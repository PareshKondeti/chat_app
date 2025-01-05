import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

const protectRoute = async (req, res, next) => {
  try {
    // Get the token from the cookies
    const token = req.cookies.jwt;

    // If no token is found, respond with Unauthorized
    if (!token) {
      return res.status(401).json({ error: "Unauthorized - No Token Provided" });
    }

    // Verify the token using the secret key from the environment
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    // If decoding fails or the token is invalid
    if (!decoded || !decoded.userId) {
      return res.status(401).json({ error: "Unauthorized - Invalid Token" });
    }

    // Fetch the user from the database using the userId from the decoded token
    const user = await User.findById(decoded.userId).select("-password");

    // If the user is not found, return a 404 error
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Attach the user to the request object for the next middleware or route
    req.user = user;

    // Proceed to the next middleware or route handler
    next();
  } catch (error) {
    console.log("Error in protectRoute middleware: ", error.message);
    // If there is any error during the process, respond with a 500 error
    res.status(500).json({ error: "Protected route internal server error" });
  }
};

export default protectRoute;
