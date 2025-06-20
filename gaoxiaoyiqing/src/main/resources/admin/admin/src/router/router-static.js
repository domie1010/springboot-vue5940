import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'

         import users from '@/views/modules/users/list'
        import caozuorenyuan from '@/views/modules/caozuorenyuan/list'
        import dictionary from '@/views/modules/dictionary/list'
        import laoshi from '@/views/modules/laoshi/list'
        import laoshidaka from '@/views/modules/laoshidaka/list'
        import laoshifanxiao from '@/views/modules/laoshifanxiao/list'
        import laoshijujia from '@/views/modules/laoshijujia/list'
        import laoshiqingjia from '@/views/modules/laoshiqingjia/list'
        import xuesheng from '@/views/modules/xuesheng/list'
        import xueshengdaka from '@/views/modules/xueshengdaka/list'
        import xueshengfanxiao from '@/views/modules/xueshengfanxiao/list'
        import xueshengjujia from '@/views/modules/xueshengjujia/list'
        import xueshengliuyanban from '@/views/modules/xueshengliuyanban/list'
        import xueshengqingjia from '@/views/modules/xueshengqingjia/list'
        import zixun from '@/views/modules/zixun/list'
        import dictionaryGonggao from '@/views/modules/dictionaryGonggao/list'
        import dictionaryJiankang from '@/views/modules/dictionaryJiankang/list'
        import dictionaryJujia from '@/views/modules/dictionaryJujia/list'
        import dictionaryJujiafengxiandengji from '@/views/modules/dictionaryJujiafengxiandengji/list'
        import dictionaryLaoshifanxiaoYesno from '@/views/modules/dictionaryLaoshifanxiaoYesno/list'
        import dictionaryLaoshiqingjiaYesno from '@/views/modules/dictionaryLaoshiqingjiaYesno/list'
        import dictionarySex from '@/views/modules/dictionarySex/list'
        import dictionaryTongzhurenyuan from '@/views/modules/dictionaryTongzhurenyuan/list'
        import dictionaryXueshengfanxiaoYesno from '@/views/modules/dictionaryXueshengfanxiaoYesno/list'
        import dictionaryXueshengliuyanban from '@/views/modules/dictionaryXueshengliuyanban/list'
        import dictionaryXueshengqingjiaYesno from '@/views/modules/dictionaryXueshengqingjiaYesno/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    } ,{
        path: '/users',
        name: '管理信息',
        component: users
      }
    ,{
        path: '/dictionaryGonggao',
        name: '疫情资讯类型名称',
        component: dictionaryGonggao
    }
    ,{
        path: '/dictionaryJiankang',
        name: '是否健康类型名称',
        component: dictionaryJiankang
    }
    ,{
        path: '/dictionaryJujia',
        name: '是否隔离类型名称',
        component: dictionaryJujia
    }
    ,{
        path: '/dictionaryJujiafengxiandengji',
        name: '所在地风险等级类型名称',
        component: dictionaryJujiafengxiandengji
    }
    ,{
        path: '/dictionaryLaoshifanxiaoYesno',
        name: '是否同意类型名称',
        component: dictionaryLaoshifanxiaoYesno
    }
    ,{
        path: '/dictionaryLaoshiqingjiaYesno',
        name: '是否同意类型名称',
        component: dictionaryLaoshiqingjiaYesno
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型名称',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryTongzhurenyuan',
        name: '同住人员身体状况类型名称',
        component: dictionaryTongzhurenyuan
    }
    ,{
        path: '/dictionaryXueshengfanxiaoYesno',
        name: '是否同意类型名称',
        component: dictionaryXueshengfanxiaoYesno
    }
    ,{
        path: '/dictionaryXueshengliuyanban',
        name: '留言类型名称',
        component: dictionaryXueshengliuyanban
    }
    ,{
        path: '/dictionaryXueshengqingjiaYesno',
        name: '是否同意类型名称',
        component: dictionaryXueshengqingjiaYesno
    }


    ,{
        path: '/caozuorenyuan',
        name: '操作人员',
        component: caozuorenyuan
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/laoshi',
        name: '老师',
        component: laoshi
      }
    ,{
        path: '/laoshidaka',
        name: '老师打卡信息',
        component: laoshidaka
      }
    ,{
        path: '/laoshifanxiao',
        name: '老师返校申请',
        component: laoshifanxiao
      }
    ,{
        path: '/laoshijujia',
        name: '老师居家信息',
        component: laoshijujia
      }
    ,{
        path: '/laoshiqingjia',
        name: '老师请假管理',
        component: laoshiqingjia
      }
    ,{
        path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
    ,{
        path: '/xueshengdaka',
        name: '学生打卡信息',
        component: xueshengdaka
      }
    ,{
        path: '/xueshengfanxiao',
        name: '学生返校申请',
        component: xueshengfanxiao
      }
    ,{
        path: '/xueshengjujia',
        name: '学生居家信息',
        component: xueshengjujia
      }
    ,{
        path: '/xueshengliuyanban',
        name: '留言板',
        component: xueshengliuyanban
      }
    ,{
        path: '/xueshengqingjia',
        name: '学生请假管理',
        component: xueshengqingjia
      }
    ,{
        path: '/zixun',
        name: '疫情资讯',
        component: zixun
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
