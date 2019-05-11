const express = require('express')
const router = express.Router()
const ProductService = require("../services/product/ProductService")

/**
 * 解决访问的跨域问题
 */
router.all("*",(req,res,next)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
    else  next();
})



/**
 * API 查询产品信息的接口
 * METHOD verb : CURD post|put|delete|get|options
 */
router.get("/api/get",(req,res)=>{
    console.log(req.query.title)
    let where = {}
    if(req.query.title){
        where.title = req.query.title
    }
    ProductService.getByWhere(where,(err,results)=>{
        res.json(results)
    })
})

/**
 *  API 商品添加的API
 */
router.post("/api/post",(req,res)=>{

    let data = req.body || {}
    console.log(data)
    let product ={
        title:"test",
        desc:"test",
        pics:"test",
        price:1
    }
    ProductService.addData(product,(err)=>{
        console.log(err)
        res.json(err)
    })
})

/**
 * API 删除商品的API
 */
router.delete("/api/del",async (req,res)=>{
    console.log(req.body)
    let result = await ProductService.deleteDataByWhere({title:req.body.title})
    res.json(result)
})


/**
 * API 更新商品的API
 */
router.put("/api/update",(req,res)=>{
    res.json({err:"put success"})
})



module.exports = router;
