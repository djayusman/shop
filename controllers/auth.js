exports.getLogin = (req, res, next) => {
  const isLoggedIn = req.get("Cookie");
  isLoggedIn.split(";")[1];
  isLoggedIn.trim();
  isLoggedIn.split("=")[1];
  res.render("auth/login", {
    path: "/login",
    pageTitle: "Login",
    isAuthenticated: isLoggedIn,
  });
};

exports.postLogin = (req, res, next) => {
  req.session.isLoggedIn = true;
  res.redirect("/");
};
