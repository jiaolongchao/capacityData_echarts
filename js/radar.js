/**
 * Created by Administrator on 2017/8/21 0021.
 */

var myChart = echarts.init(document.getElementById('radar'));
var data = [300, 300, 800];
option = {
    title: {
        text: '',
        show:false
    },
    tooltip: {
        show:true
        /*formatter: function (params) {
            return '<div>' + params.value[1] +'</div>'
        }*/
    },
    legend: {
        data: [''],
        show:false
    },
    textStyle : {
        color : 'rgba(0,0,0,0)'
    },
    radar: {
        indicator: [
            { name: '观望', max: 1000},
            { name: '风险', max: 1000},
            { name: '机会', max: 1000}
        ],
        center: ['50%', '65%'],
        radius : 120,
        splitNumber:1,
        splitLine: {
            lineStyle: {
                color: ['rgba(0,0,0,0)']  //外框线的颜色
            }
        },
        splitArea:{
            areaStyle : {
                color :  ['rgba(250,250,250,0)']
            }
        },
        axisLine: {
            lineStyle: {
                color: 'rgba(50,62,69,0.67)' //网格线的颜色
            }
        }
    },
    series: [{
        name: '',
        type: 'radar',
        symbol : 'circle',
        symbolSize : '10',
        itemStyle : {
            normal :{
                color:'#F06A2F',
                borderColor :  'rgba(240,106,47,0.3)',
                borderWidth:'5',
                areaStyle: { color:'rgba(50,62,69,0.67)' }
            }
        },
        data : [
            {
                value : data,
                name : '',
                lineStyle: {
                    normal: {
                        color : 'rgba(50,62,69,0.67)'
                    }
                }
            }
        ]
    }]
};
myChart.setOption(option);