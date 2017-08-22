/**
 * Created by Administrator on 2017/8/22 0022.
 */

var myChart = echarts.init(document.getElementById('gaugeCharts'));
var xData = [];
var yData = [];
var option = {
    baseOption: {
        tooltip : {
            formatter: "{a} <br/>{b} : {c}%"
        },
        grid:{
            show:false,
            top:"1%",
            left:"1%",
            containLabel: true
        },
        toolbox: {
            show:false,  //不显示刷新和下载
            feature: {
                restore: {},
                saveAsImage: {}
            }
        },
        series: [
            {
                name: '业务指标',
                type: 'gauge',
                detail: {formatter:'{value}%'},
                data: [{value: 50, name: '完成率'}],
                radius:"90%",
                splitNumber:7,
                title:{
                    show:false
                },
                //仪表盘轴线相关设置
                axisLine:{
                    show:true,
                    lineStyle:{
                        color:[[1,
                            new echarts.graphic.LinearGradient(0, 0, 0, 1, [// 0% 处的颜色
                                    {offset: 0, color: '#68E0CF'},
                                    {offset: 1, color: '#209CFF'}],
                                false)
                        ]],
                        width:35,
                        opacity:0.8,
                        shadowColor:"#839DF4"
                    }
                },
                //分割线样式
                splitLine:{
                    show:true,
                    length:"100%",
                    lineStyle:{
                        //这里的颜色可以是渐变色
                        color:"rgba(32,36,39,0.1)",
                        width:1
                    }
                },
                //分割线中的刻度线的相关设置
                axisTick:{
                    show:true,
                    splitNumber:6,
                    length:6,
                    lineStyle:{
                        color:"rgba(255,255,255,0.5)"
                    }
                },
                //刻度数据的显示与否
                axisLabel:{
                    show:false
                },
                pointer:{ //指针
                    show:false,
                    length:"120%",
                    width:18
                },
                itemStyle : {
                    normal : {
                        color : {
                            image: document.getElementById('gaugePointer'), // 支持为 HTMLImageElement, HTMLCanvasElement，不支持路径字符串
                            repeat: 'repeat' // 是否平铺, 可以是 'repeat-x', 'repeat-y', 'no-repeat'
                        }
                       /* color : {
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'red' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'blue' // 100% 处的颜色
                            }],
                            globalCoord: false // 缺省为 false
                        }*/
                    }
                }
            }
        ]
    }
};
myChart.setOption(option);
