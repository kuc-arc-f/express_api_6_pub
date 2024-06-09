const express = require('express');
const router = express.Router();
import LibBmCategory from '../lib/LibBmCategory';

/*****************************
BmCategory -index
******************************/
router.post('/index', async function(req: any, res: any) {
  try {
    const items = await LibBmCategory.getItems(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/******************************** 
*  BmCategory Show
*********************************/
router.get('/show/:id', async function(req: any, res: any) {
  try {
    console.log(req.params.id );
    const result = await LibBmCategory.getItem(Number(req.params.id));
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});
/*****************************
BmCategory -add
******************************/
router.post('/add', async function(req: any, res: any) {
  try {
    const result = await LibBmCategory.addBmCategory(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
BmCategory - update
******************************/
router.post('/update', async function(req: any, res: any) {
  try {
    const result = await LibBmCategory.updateBmCategory(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
BmCategory - delete
******************************/
router.post('/delete', async function(req: any, res: any) {
  try {
    const result = await LibBmCategory.deleteBmCategory(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;