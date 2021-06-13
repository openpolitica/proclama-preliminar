import withSession from 'lib/session';

const UPDATE_PWD = process.env.UPDATE_PWD || 'pass';

export default withSession(async (req, res) => {
  const { password } = await req.body;

  if (password === UPDATE_PWD) {
    const user = { isLoggedIn: true };
    req.session.set('user', user);
    await req.session.save();
    res.json(user);
  } else {
    res.status(403).json({ message: 'Contraseña incorrecta' });
  }
});
