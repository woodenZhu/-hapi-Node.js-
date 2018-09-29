const inert = require('inert');
const vision = require('vision');
const package = require('package');
const hapiSwagger = require('hapi-swagger');

module.exports = [
  inert,
  vision,
  {
    register: hapiSwagger,
    options: {
      info: {
        title: '接口文档',
        version: package.version,
      },
      // 定义接口以 tags 属性定义为分组
      grouping: 'tags',
      tags: [
        { name: 'orders', description: '订单相关' },
        // { name: 'orders', description: '支付某条订单' },
        { name: 'shops', description: '店铺、商品相关' },
        // { name: 'shops', description: '获取店铺的商品列表' }
      ]
    }
  }
]