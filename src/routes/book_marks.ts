const express = require('express');
const router = express.Router();
import LibBookMarks from '../lib/LibBookMarks';

/*****************************
bookMark -index
******************************/
router.post('/index', async function(req: any, res: any) {
  try {
    const items = await LibBookMarks.getItems(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/******************************** 
*  bookMark Show
*********************************/
router.get('/show/:id', async function(req: any, res: any) {
  try {
    console.log(req.params.id  );
    const result = await LibBookMarks.getItem(Number(req.params.id));
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});
/*****************************
bookMark -categoryBookMarks
******************************/
router.post('/categoryBookMarks', async function(req: any, res: any) {
  try {
    const items = await LibBookMarks.categoryBookMarks(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
bookMark -searchBookMarks
******************************/
router.post('/searchBookMarks', async function(req: any, res: any) {
  try {
    const items = await LibBookMarks.searchBookMarks(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/*****************************
bookMark -add
******************************/
router.post('/add', async function(req: any, res: any) {
  try {
    const result = await LibBookMarks.addBookMark(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
bookMark - update
******************************/
router.post('/update', async function(req: any, res: any) {
  try {
    const result = await LibBookMarks.updateBookMark(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
bookMark - delete
******************************/
router.post('/delete', async function(req: any, res: any) {
  try {
    const result = await LibBookMarks.deleteBookMark(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;