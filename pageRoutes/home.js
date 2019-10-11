const routes = require('next-routes')();
routes.add('login','/login','/ui/web/login/index')
    .add('home','/home','/ui/web/home/index')
    .add('example','/example','/c')
;
module.exports=routes;
