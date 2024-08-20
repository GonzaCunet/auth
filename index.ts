import * as express from "express";
import { sequelize } from "./db";
import { User } from "./db/users";
import { Auth } from "./db/auth";

sequelize.sync({ force: true }).then((res) => {
  console.log(res);
});

const app = express();
const port = 3000;
app.use(express.json());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

//signup
app.post("/auth", async (req, res) => {
  try {
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: {
        email: req.body.email,
        name: req.body.name,
        birthdate: req.body.birthdate,
      },
    });
    console.log({ created, user });
    res.json(user);
  } catch (error) {
    console.log(error);
    res.json("hubo error al crear al auth");
  }

  // let user = await User.findOne({ where: { email: req.body.email } });
  // if (!user) {
  //   user = await User.create({
  //     email: req.body.email,
  //     name: req.body.name,
  //     birthdate: req.body.birthdate,
  //   });
  // }
  // res.json(user);
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
