const config = {
    target: '#docute',
    //导航狼
    nav: [{
        title: '首页',
        link: '/'
    }, {
        title: 'GitHub',
        link: '/'
    }],
    //侧边栏
    sidebar: [
        /**{
                title: '游戏牌统计',
                link: '/docs/gamecard',
            },*/
        {
            title: '专题',
            children: [{
                title: '专题一：然而“锁定技”并没有什么卵用',
                link: '/'
            }, {
                title: '专题二：技能与效果的分类',
                link: '/'
            }]
        },
        {
            title: '游戏规则',
            children: [{
                title: '本章摘要',
                link: '/docs/2/',
            }, {
                title: '结算的原则',
                link: '/docs/2/Principle'
            }, {
                title: '技能的要素',
                link: '/docs/2/Skill'
            }]
        },
        {
            title: '游戏用语',
            children: [{
                title: '本章摘要',
                link: '/docs/3/',
            }, {
                title: '与牌相关的用语',
                link: '/docs/3/Card'
            }, {
                title: '与牌面信息相关的用语',
                link: '/docs/3/CardInfo'
            }, {
                title: '与区域相关的用语',
                link: '/docs/3/Region'
            }, {
                title: '与数值相关的用语',
                link: '/docs/3/Number'
            }, {
                title: '与牌面描述相关的用语',
                link: '/docs/3/Describe'
            }, {
                title: '与游戏流程相关的用语',
                link: '/docs/3/Round'
            }, {
                title: '与事件结算相关的用语',
                link: '/docs/3/Event'
            }]
        }
    ],
}