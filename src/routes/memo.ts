const express = require('express');
const router = express.Router();
import LibMemo from '../lib/LibMemo';

/*****************************
Memo -index
******************************/
router.post('/index', async function(req: any, res: any) {
  try {
    const items = await LibMemo.getItems(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/******************************** 
*  Memo Show
*********************************/
router.get('/show/:id', async function(req: any, res: any) {
  try {
    console.log(req.params.id  );
    const result = await LibMemo.getItem(Number(req.params.id));
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});
/*****************************
Memo - search
******************************/
router.post('/searchMemos', async function(req: any, res: any) {
  try {
    const items = await LibMemo.searchMemos(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
Memo -add
******************************/
router.post('/add', async function(req: any, res: any) {
  try {
    const result = await LibMemo.addMemo(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
Memo - update
******************************/
router.post('/update', async function(req: any, res: any) {
  try {
    const result = await LibMemo.updateMemo(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
Memo - delete
******************************/
router.post('/delete', async function(req: any, res: any) {
  try {
    const result = await LibMemo.deleteMemo(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
