import { Router } from 'express';
import bcrypt from 'bcryptjs';
import config from 'config';
import jwt from 'jsonwebtoken';
import User from '../../models/User';
import auth from '../../middleware/auth';

const JWT_SECRET = config.get('jwtSecret')
const router = Router();

router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  console.log("Request:", req.body)
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) throw Error('User does not exist');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    const token = jwt.sign({ id: user._id,email:user.email,name:user.name }, JWT_SECRET, { expiresIn: 3600 });
    if (!token) throw Error('Couldnt sign the token');

    res.status(200).json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ msg: 'Please enter all fields' });
  }

  try {
    const user = await User.findOne({ email });
    if (user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User({
      name,
      email,
      password: hash
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');
    const token = jwt.sign({ id: savedUser._id, name: savedUser.name, email: savedUser.email }, JWT_SECRET, {
      expiresIn: 3600
    });

    res.status(200).json({
      token,
      user: {
        id: savedUser.id,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
router.get("/user", auth, async (req, res) => {
  let { email } = req.user;
  console.log("User::::::",req.user)
  try {
    const user = await User.findOne({ email });
    // Check for Existense of User
    if (!user) throw Error('User does not exist');
    // Response with only User Data(except password)
    res.status(200).json(
      {
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      })
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});// End of Verify User using Token

export default router;
