import { Router } from 'express';
import auth from '../../middleware/auth';
// Item Model
import Item from '../../models/Item';

const router = Router();

router.get('/', async (req, res) => {
  const { pageNo, itemCount } = req.query;
  try {
    const items = await Item.find();
    if (!items) throw Error('No items');

    res.status(200).json({
      products: items.slice((pageNo - 1) * itemCount, pageNo * itemCount),
      total: items.length
    });
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.post('/',async (req, res) => {
  const newItem = new Item({
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    price: req.body.price
  });
  try {
    const item = await newItem.save();
    if (!item) throw Error('Something went wrong saving the item');

    res.status(200).json(item);
  } catch (e) {
    res.status(400).json({ msg: e.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) throw Error('No item found');

    const removed = await item.remove();
    if (!removed)
      throw Error('Something went wrong while trying to delete the item');

    res.status(200).json({ success: true });
  } catch (e) {
    res.status(400).json({ msg: e.message, success: false });
  }
});

export default router;
