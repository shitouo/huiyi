/**
 * Created by zhphu on 2017/02/21.
 */

module.exports = {
    env: 'prod',
    name: 'm',
    host: "10.11.161.87",
    domain: '//ss.sohu.com',
    debug: true,
    port: 8090,
    logs_level: "ERROR",
    path: {
        views: 'views/dist',
        routes: 'routes/activity',
        baseUrl: '//d6970e8d4ec69.cdn.sohucs.com/public/dist',
        gulp :{
            build : '/build',
            dist : "/dist"
        }
    },
    redisConfig: [{
        port: 6050,
        host: '10.16.39.36'
    }, {
        port: 6050,
        host: '10.16.39.37'
    },{
        port: 6050,
        host: '10.16.39.168'
    }],
    mysqlConfig: {
        host: 'r.rdc.sae.sina.com.cn',
        user: '1xy545m15w',
        password: 'ik2j4kjy1xzym20iji0l5my4wwzwz203xxw3h2k4'
    },
    pageCount: 20
};