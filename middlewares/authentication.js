const jwt = require('jsonwebtoken');
const { Unauthorized } = require('http-errors');

const { SECRET_KEY } = process.env;

const { User } = require('../models');

/*
1. Извлекает заголовок authorization.
2. Превращает строку в массив по пробелу.
3. Проверяем, является ли первое слово "Bearer".
4. Проверяет токен на валидность (мы ли его выдали).

5. Находим в базе пользователя по id из токена.
6. Прикрепляем его к запросу (объект req).
7. Передаем обработку запроса дальше.
*/

const auth = async (req, res, next) => {
  // const [bearer, token] = req.headers.authorization.split(' ');
  // if (bearer !== 'Bearer') {
  //   throw new Unauthorized();
  // }
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    next(new Unauthorized());
  }
  try {
    const { id } = jwt.verify(token, SECRET_KEY);
    // const user = await User.findById(id, 'id email subscription');
    const user = await User.findById(id);
    if (!user) {
      throw new Unauthorized();
    }
    req.user = user;
    // console.log(user);
    // console.log(user.id);
    next();
  } catch (e) {
    await User.findOneAndUpdate({ token }, { token: null });
    next(e);
  }
};

module.exports = auth;
