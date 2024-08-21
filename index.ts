import * as express from "express";
import { sequelize } from "./db";
import { User } from "./db/users";
import { Auth } from "./db/auth";

// sequelize.sync({ force: true }).then((res) => {
//   console.log(res);
// });

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//signup
app.post("/auth", async (req, res) => {
  const { email, name, birthdate, password } = req.body;
  let user = await User.findOne({ where: { email } });
  if (!user) {
    user = await User.create({
      email,
      name,
      birthdate,
    });
  }
  // // const [user, created] = await User.findOrCreate({
  // //   where: { email: req.body.email },
  // //   defaults: {
  // //     email: req.body.email,
  // //     name: req.body.name,
  // //     birthdate: req.body.birthdate,
  // //   },
  // });
  // console.log({ created, user });
  let auth = await Auth.findOne({ where: { email: req.body.email } });
  if (!auth) {
    auth = await Auth.create({
      email,
      name,
      password,
      user_id: user.get("id"),
    });
  }
  res.json(auth);
});

app.post("/test", async (req, res) => {
  User.create(req.body).then(() => {
    res.json("creado");
  });
});
app.get("/test", async (req, res) => {
  User.findAll().then((snap) => {
    res.json(snap);
  });
});
