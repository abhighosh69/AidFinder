import session from "express-session";

const sessionMiddleware = session({
  secret: "secret",
  resave: false,
  saveUninitialized: true,
});

export default sessionMiddleware;
