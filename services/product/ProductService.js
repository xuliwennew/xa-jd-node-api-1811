const mongodb = require("../configs/MongodbConfig")
const Schema = mongodb.Schema

const productSchema = new Schema({
    title:{type:String},
    desc: {type:String},
    pics: {type:String},
    price:{type:Number}
})


let ProductModel = mongodb.model("products",productSchema)


module.exports = {

    /**
     * 根据条件查询商品的信息
     * @param where
     * @param cb
     */
    getByWhere(where,cb){
       ProductModel.find(where,cb)
    },
    /**
     * 根据条件查询分页的信息
     * @param where
     * @param pageIndex
     * @param pageSize
     * @param cb
     */
    getPagerByWhere(where,pageIndex=0,pageSize,cb){
       ProductModel.find(where).skip(pageIndex*pageSize).limit(pageSize).exec(cb)
    },

    /**
     *  添加一条商品的信息
     * @param product
     * @param cb
     */
    addData(product,cb){
       let _product = new ProductModel(product)
        _product.save(cb)
    },

    /**
     * 根据条件删除商品
     * @param where
     */
    async deleteDataByWhere(where){
      let data= await ProductModel.deleteOne(where)
      return data;
    }
}
