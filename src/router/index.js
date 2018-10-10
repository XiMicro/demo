import Vue from 'vue'
import Router from 'vue-router'
import Chose from '@/components/Chose'
import HelloWorld from '@/components/HelloWorld'
import Main from '@/components/Main'
import Art from '@/components/Art'
import Message from '@/components/Message'
import News from '@/components/News'
import ArtMain from '@/components/ArtDetails/ArtMain'
import ArtDetails from '@/components/ArtDetails/ArtDetails'
import ZpDetails from '@/components/ArtDetails/ZpDetails'
import ArtZuopin from '@/components/ArtDetails/ArtZuopin'
import ArtJx from '@/components/ArtDetails/ArtJx'
import ArtJs from '@/components/ArtDetails/ArtJs'
import ArtHd from '@/components/ArtDetails/ArtHd'
import ArtRy from '@/components/ArtDetails/ArtRy'
import ArtRyq from '@/components/ArtDetails/ArtRyq'
import Artgg from '@/components/ArtDetails/Artgg'
import ArtLc from '@/components/ArtDetails/ArtLc'
import Text1 from '@/components/ArtDetails/Text1'
import Text2 from '@/components/ArtDetails/Text2'
import Text3 from '@/components/ArtDetails/Text3'
import Text4 from '@/components/ArtDetails/Text4'

import HelloWorld2 from '@/components/HelloWorld2'
import Main2 from '@/components/Main2'
import more from '@/components/more'
import ArtDetails2 from '@/components/ArtDetails2/ArtDetails2'
import ArtHd2 from '@/components/ArtDetails2/ArtHd2'
import ArtJx2 from '@/components/ArtDetails2/ArtJx2'
import ArtZuopin2 from '@/components/ArtDetails2/ArtZuopin2'
import ZpDetails2 from '@/components/ArtDetails2/ZpDetails2'
import Artgg2 from '@/components/ArtDetails2/Artgg2'
import ArtFc2 from '@/components/ArtDetails2/ArtFc2'
import ArtR2 from '@/components/ArtDetails2/ArtR2'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Chose',
      component: Chose
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [
        {
          path: '/',
          name: 'Main',
          component: Main
        },
        {
          path: '/main',
          name: 'Main',
          component: Main
        },
        {
          path: '/art',
          name: 'Art',
          component: Art
        },
        {
          path: '/news',
          name: 'News',
          component: News
        },
        {
          path: '/message',
          name: 'Message',
          component: Message
        }
      ]
    },
    {
      path: '/Artmain',
      name: 'ArtMain',
      component: ArtMain,
      children: [
        {
          path: '/',
          name: 'ArtDetails',
          component: ArtDetails
        },
        {
          path: '/artdetails',
          name: 'ArtDetails',
          component: ArtDetails
        },
        {
          path: '/artzuopin',
          name: 'ArtZuopin',
          component: ArtZuopin
        },
        {
          path: '/text1',
          name: 'Text1',
          component: Text1
        },
        {
          path: '/text2',
          name: 'Text2',
          component: Text2
        },
        {
          path: '/text3',
          name: 'Text3',
          component: Text3
        },
        {
          path: '/text4',
          name: 'Text4',
          component: Text4
        }
      ]
    },
    {
      path: '/zpDetails',
      name: 'ZpDetails',
      component: ZpDetails,
    },
    {
      path: '/arthd',
      name: 'ArtHd',
      component: ArtHd
    },
    {
      path: '/artjx',
      name: 'ArtJx',
      component: ArtJx
    },
    {
      path: '/artjs',
      name: 'ArtJs',
      component: ArtJs
    },
    {
      path: '/artryq',
      name: 'ArtRyq',
      component: ArtRyq
    },
    {
      path: '/artry',
      name: 'ArtRy',
      component: ArtRy
    },
    {
      path: '/artlc',
      name: 'ArtLc',
      component: ArtLc
    },
    {
      path: '/artgg',
      name: 'Artgg',
      component: Artgg
    },














    {
      path: '/HelloWorld2',
      name: 'HelloWorld2',
      component: HelloWorld2,
      children: [
        {
          path: '/',
          name: 'Main2',
          component: Main2,
        },
        {
          path: '/main2',
          name: 'Main2',
          component: Main2,
        },
        {
          path: '/more',
          name: 'more',
          component: more,
        }
      ]
    },
    {
      path: '/arthd2',
      name: 'ArtHd2',
      component: ArtHd2
    },
    {
      path: '/artjx2',
      name: 'ArtJx2',
      component: ArtJx2
    },
    {
      path: '/artzuopin2',
      name: 'ArtZuopin2',
      component: ArtZuopin2
    },
    {
      path: '/zpdetails2',
      name: 'ZpDetails2',
      component: ZpDetails2
    },
    {
      path: '/artgg2',
      name: 'Artgg2',
      component: Artgg2
    },
    {
      path: '/artdetails2',
      name: 'ArtDetails2',
      component: ArtDetails2
    },
    {
      path: '/artfc2',
      name: 'ArtFc2',
      component: ArtFc2
    },
    {
      path: '/artr',
      name: 'ArtR2',
      component: ArtR2
    }
  ]
})
