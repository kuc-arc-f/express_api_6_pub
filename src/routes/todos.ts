const express = require('express');
const router = express.Router();
import LibTodo from '../lib/LibTodo';

/*****************************
todos -index
******************************/
//
//test1
router.post('/test1', async function(req: any, res: any) {
  try {
    const items = await LibTodo.test1(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
router.post('/index', async function(req: any, res: any) {
  try {
    const items = await LibTodo.getItems(req);
//console.log(req);
    res.json(items);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/**
* 
* @param
*
* @return
*/ 
router.post('/get', async function(req: any, res: any) {
  try {
    let resulte = {};
    const body = req.body; 
    if(body){
console.log(body);
      resulte = await LibTodo.getItem(Number(body.id));
    }
    //console.log(resulte);
    res.json(resulte);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/******************************** 
*  todos Show
*********************************/
router.get('/show/:id', async function(req: any, res: any) {
  try {
    console.log(req.params.id  );
    const result = await LibTodo.getItem(Number(req.params.id));
    console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }  
});
/*****************************
todos -add
******************************/
router.post('/add', async function(req: any, res: any) {
  try {
    const result = await LibTodo.addTodo(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
todos - update
******************************/
router.post('/update', async function(req: any, res: any) {
  try {
    const result = await LibTodo.updateTodo(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
/*****************************
todos - updateComplete
******************************/
router.post('/updateComplete', async function(req: any, res: any) {
  try {
    const result = await LibTodo.updateComplete(req);
//console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

/*****************************
todos - delete
******************************/
router.post('/delete', async function(req: any, res: any) {
  try {
    const result = await LibTodo.deleteTodo(req);
console.log(result);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});
export default router;
