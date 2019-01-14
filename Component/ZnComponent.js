/**
 * Created by Administrator on 2018/6/26.
 */
//底部导航
var Index = {
    template: '#index',
    data: function () {
        return {
            title:"",
            left_button:true,
            right_button:true,
            menus: [

                {
                    iconOn: 'iconfont icon-shebeiguanli',
                    iconOff: 'iconfont icon-shebeiguanli',
                    text: '设备管理',
                    path: '/home'
                },
                {
                    iconOn: 'iconfont icon-shujuzhanshi2',
                    iconOff: 'iconfont icon-shujuzhanshi2',
                    text: '数据展示',
                    path: '/data'
                },
                {
                    iconOn: 'iconfont icon-geren',
                    iconOff: 'iconfont icon-geren',
                    text: '个人中心',
                    path: '/sidebar'
                }
            ]
        }
    },
    methods: {
        menuClicked(menuIndex) {
        },
        back(){
            $router.push('/home')
        },
        childByValue(data){
            this.title=data.title;
            this.left_button=data.left_button;
            this.right_button=data.right_button;
        },
        system:function () {
            $router.forward('/system')
        },
        submit(){
            $toast.show('设备添加成功！', 1000)
        }
    },
    beforeDestroy() {
        $tabbar.$emit('hideTabbar')

    }
};
//首页
var Home = {
    template: '#home',
    data: function () {
        return {

        }
    },
    methods: {
        menuClicked(menuIndex) {
            console.log(menuIndex)
        },
        to_add: function (event) {
           $router.push('add')
        },
        to_eid: function (event) {
            $router.push("eid")
        },
        to_replace: function (event) {
            $router.push("replace")
        },
        to_recovery: function (event) {
            $router.push("recovery")
        },
        to_parameter: function (event) {
            $router.push("parameter")
        },
        to_local: function (event) {
            $router.push("local")
        },
        to_fault: function (event) {
            $router.push("fault")
        },
        onTabClick(index) {
            this.tabIndex = index
        },
        onChange(value) {
            this.value = value
        },

    },
    mounted(){
        this.$emit('childByValue', {title:'监控',left_button:false, right_button:true})
    },

};
//添加设备
var Add = {
    template: '#add',
    data: function () {
        return {
            indoor: "是否采集室内温度",
            indoor_bool: true,
            supply:'是否采集供水温度',
            supply_bool: true,
            backwater_temperature: "是否采集回水温度",
            backwater_temperature_bool: true,
            backwater_difference: "是否采集供回水压差",
            backwater_difference_bool: true
        }
    },
    methods: {
        onChange(value) {
            this.value = value
        },
        submit(){
            $toast.show('设备添加成功！', 1000)
        }
    },
    mounted(){
        this.$emit('childByValue', {title:'添加设备',left_button:true, right_button:true})
    },

};
//设备选择
var System = {
    template: '#system',
    data: function () {
        return {
            fields: [
                "省", "区/县", "小区","楼栋","单元","室"
            ],
            fields_data: [
                ['黑龙江省', '哈尔滨市', '锦绣华城','5栋','2单元','301室']
            ],
            systems: [
                "供热系统"
            ],
            systems_data: [
                ['供热系统1'],
                ['供热系统2'],
                ['供热系统3']
            ],
            fields_value:[],
            systems_value:['供热系统1'],
        }
    },
    methods: {
        onChange(value) {
            this.value = value
        },
        submit(){
            $toast.show('设备选择成功！', 1000);
            $router.go(-1)
        }
    },
    mounted(){
        this.$emit('childByValue', {title:'设备选择',left_button:true, right_button:false});
         
    },

};
//修改设备
var Eid = {
    template: '#eid',
    data: function () {
        return {
            energy:['节能类型'],
            energy_data:[
                ['节能'],['非节能']
            ],
            heating:['供暖类型'],
            heating_data:[
                ['地热'],['挂暖']
            ],
            resident:['居民类型'],
            resident_data:[
                ['居民'],['公共']
            ],
            resident_value:['居民'],
            energy_value:['节能'],
            heating_value:['地热'],
            indoor: "是否采集室内温度",
            indoor_bool: true,
            supply:'是否采集供水温度',
            supply_bool: true,
            backwater_temperature: "是否采集回水温度",
            backwater_temperature_bool: true,
            backwater_difference: "是否采集供回水压差",
            backwater_difference_bool: true
        }
    },
    methods: {
        onChange(value) {
            this.value = value
            console.log(this.value)
        },
        submit(){
            $toast.show('设备修改成功！', 1000)
        }
    },
    mounted(){
        this.$emit('childByValue', {title:'修改设备',left_button:true, right_button:true})
    },
};
//更换设备
var Replace = {
    template: '#replace',
    data: function () {
        return {

        }
    },
    methods: {
        onChange(value) {
            this.value = value
        },
        submit(){
            $toast.show('设备更换成功！', 1000)
        }
    } ,mounted(){
        this.$emit('childByValue', {title:'更换设备',left_button:true, right_button:true})
    },

};
//恢复出厂设置
var Recovery = {
    template: '#recovery',
    data: function () {
        return {
            indoor_bool: true,
            for_bool: true,
            back:true,
            difference:true,
            state:true
        }
    },
    methods: {
        onChange(value) {
            this.value = value
            console.log(this.value)
        },
        submit(){
            $toast.show('恢复出厂设置成功！', 1000)
        }
    }
    ,mounted(){
        this.$emit('childByValue', {title:'恢复出厂设置',left_button:true, right_button:true})
    },
};
//参数设置
var Parameter = {
    template: '#parameter',
    data: function () {
        return {
            indoor: "是否采集室内温度",
            indoor_bool: true,
            supply:'是否采集供水温度',
            supply_bool: true,
            backwater_temperature: "是否采集回水温度",
            backwater_temperature_bool: true,
            backwater_difference: "是否采集供回水压差",
            backwater_difference_bool: true
        }
    },
    methods: {
        onChange(value) {
            this.value = value
            console.log(this.value)
        },
        submit(){
            $toast.show('参数成功！', 1000)
        }
    }
    ,mounted(){
        this.$emit('childByValue', {title:'参数设置',left_button:true, right_button:true})
    },

};
//本地操作
var Local = {
    template: '#local',
    data: function () {
        return {
            state: "就地",
            state_bool: true,
            tabs: [
                "阀门开度",
                "设备自检"
            ],
            tabIndex: 0,
            volume: 20,
            min: 0,
            max: 100
        }
    },
    methods: {
        onTabClick(index) {
            this.tabIndex = index;
            console.log(this.tabIndex)
        },
        onChange(value) {
            this.value = value
        },
        submit(){
            if(this.state_bool==false){
                return
            }
            $toast.show('修改成功！', 1000)

        },
        submit2(){
            if(this.state_bool==false){
                return
            }
            $toast.show('修改成功！', 1000)
        }
    }
    ,mounted(){
        this.$emit('childByValue', {title:'本地操作',left_button:true, right_button:true})
    },
};
//故障诊断
var Fault = {
    template: '#fault',
    data: function () {
        return {

        }
    },
    methods: {
        onChange(value) {
            this.value = value
            console.log(this.value)
        },
        submit(){
            $toast.show('查询成功！', 1000)
        }

    }
    ,mounted(){
        this.$emit('childByValue', {title:'故障信息',left_button:true, right_button:true})
    },
};
//数据展示
var Data = {
    template: '#data',
    data: function () {
        return {
            tabs: [
                "设备信息",
                "历史数据"
            ],
            tabIndex: 0,
            volume: 20,
            min: 0,
            max: 100
        }
    },
    methods: {
        onTabClick(index) {
            this.tabIndex = index;
            if(this.tabIndex==1){
                this.$router.push('/data/data_charts')
            }
            if(this.tabIndex==0){
                this.$router.push('/data')
            }
        },
        submit(){
            $toast.show('修改成功！', 1000)
        },
    },
    watch:{
        $route(to,from){
            if(from.path=='/data/data_charts'&&to.path=='/data'){
                this.tabIndex=0;
                this.$router.push('/data');
            }
        }
    },
    mounted(){
        this.$emit('childByValue', {title:'数据展示',left_button:true, right_button:true})
    },
};
//数据图表
var Data_charts = {
    template: '#data_charts',
    data: function () {
        return {

        }
    },
    methods: {


    },
    mounted(){
        let myChart = echarts.init(document.getElementById('myChart'))
        myChart.setOption({
            title: { text: '历史数据' },
            tooltip: {},
            xAxis: {
                data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        });
    }
}
//个人中心
var Sidebar = {
    template: '#sidebar',
    data: function () {
        return {
            tabs: [
                "设备信息",
                "历史数据"
            ],
            tabIndex: 0,
            volume: 20,
            min: 0,
            max: 100
        }
    },
    methods: {
        submit(){
            $toast.show('修改成功！', 1000)
        },
        signout(){
            $router.push("/signin")
        },
        password(){
            $router.push("/password")

        }
    },
    mounted(){
        this.$emit('childByValue', {title:'个人中心',left_button:true, right_button:false})
    },

};
//登陆
var Signin = {
    template: '#signin',
    data: function () {
        return {

        }
    },
    methods: {
        submit(){
            $toast.show('修改成功！', 1000)
        },
        signin(){
            $router.push("/")
        }
    },
    mounted(){
        this.$emit('childByValue', {title:'监控',left_button:false, right_button:true})
    },

};
//修改密码
var Password = {
    template: '#password',
    data: function () {
        return {

        }
    },
    methods: {
        eidPassword(){
            $toast.show('修改成功！', 1000)
        }

    }

};
//设备选择
Vue.component('Device', {
    template: '#device',
    data(){
        return{
            device:'设备02'
        }
    },
    methods:{
        selection_device(){
            $router.forward('/system')
        }
    }
})