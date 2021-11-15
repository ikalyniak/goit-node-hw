const { User } = require('../../models');
const errorsHelper = require('../../helpers/auth/errors');
const successHelper = require('../../helpers/auth/success');

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  errorsHelper.conflict(user, email);

  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10)); //простой вариант, шаг1
  // const newUser = await User.create({ email, password: hashPassword }); //простой вариант, шаг2
  const newUser = new User({ email }); // создаем новый объект через прототип, у которого есть методы полученные через mongooseSchemaUsers - setPassword()
  newUser.setPassword(password); // вызываем setPassword(), прокидываем пароль для хэширования, метод добавляет свойство password с уже хэшированным паролем
  await newUser.save(); // сохраняем
  successHelper.successfulSignUp(res);
};

module.exports = signUp;
