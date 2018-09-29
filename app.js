const Hapi = require('hapi');
require('env2')('./.env')
const config = require('./config/index');
const mysqlConfig = require('./config/config');
const routes = require('./routes/index');
// 引入自定义的 hapi-swagger 插件配置
const pluginHapiSwagger = require('./plugins/hapi-swagger');

const server = new Hapi.Server();
// 配置服务器启动host与端口
server.connection({
  port: config.port,
  host: config.host,
});

const init = async () => {
  await server.register([
    // 为系统使用 hapi-swagger
    ...pluginHapiSwagger,
  ]);
  server.route([
    // 创建一个简单的hello hapi接口
    ...routes,
  ]);
  // 启动服务
  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();