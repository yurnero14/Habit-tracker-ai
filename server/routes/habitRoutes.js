import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  console.log('habits route was hit');
  res.send('Habit route working');
});

export default router;