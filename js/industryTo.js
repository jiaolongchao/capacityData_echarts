/**
 * Created by Administrator on 2017/8/18 0018.
 */

//资金流向
var myChart = echarts.init(document.getElementById('industryTo'));
var data1 = ['2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13',
    '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13'
];
var data3 = [2000, -1000, -3000, 3000, 4500, 3200, -5000, -4000, 5000, -3000, -5000, 5000, 4500, 3400, 3000, -4000,2000, -1000, -3000, 3000];
var data4 = [2000, -1000, -3000, 3000, 4500, 3200, -5000, -4000, 5000, -3000, -5000, 5000, 4500, 3400, 3000, -4000,2000, -1000, -3000, 3000];
var option = {
    baseOption: {
        tooltip: {
            show: false,
            trigger: 'axis'
        },
        grid: {
            left: '4%',
            top: '2%',
            bottom: '2%',
            width: "94%",
            height:"98%",
            backgroundColor:"#0000ff",
            containLabel: true
        },
        legend: {
            show: false,
            data: ['个股资金', '行业资金']
        },
        xAxis: [
            {
                type: 'category',
                data: data1,
                axisPointer: {
                    type: 'line'
                },
//                坐标轴刻度标签的相关设置。
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 12
                    },
                    margin: 22,
                    interval: 5
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: true,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false
                }
            }
        ],
        yAxis: [
            {
                /*每股收益的y轴有刻度，但是没有轴线*/
                type: 'value',
                min: -7500,
                max: 5000,
                interval: 2500,
                axisLabel: {
                    formatter: '{value}',
                    //刻度上的文字样式设置
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 12
                    },
                    showMaxLabel: true,
                    showMinLabel: true
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
//                        interval: 1
                },
                splitLine: { //分割线
                    show: false
                }
            },
            {
                type: 'value',
                min: -7500,
                max: 5000,
                interval: 2500,
                axisLabel: {
                    formatter: '{value}',
                    //刻度上的文字样式设置
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 12
                    },
                    showMaxLabel: true,
                    showMinLabel: true
                },
                splitLine: { //分割线
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ["#666"],
                        type: "dashed"
                    }
                },
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                }
            }
        ],
        series: [
            {
                name: '行内资金',
                type: 'line',
                showAllSymbol: true,
                symbol: "circle",
                smooth: true,
                symbolSize: 6,
                lineStyle: {   //折线线性渐变的颜色
                    normal: {
                        color:new echarts.graphic.LinearGradient(
                            0, 0, 1, 0,
                            [
                                {offset: 0, color: '#FFC75E'},
                                {offset: 1, color: '#F03DA2'}
                            ]
                        ),
//                            color: "#F35298",
                        width: 2
//                            color: function (par) {
//                                console.log(par);
//                                return "#ff0000";
//                            }
                    }
                },
                itemStyle: { //折线圆点的颜色
                    normal: {
                        //'#F35298'
                        color: function (params) {
//                                console.log(params);
                            if (params.dataIndex % 5 === 0) {
                                return '#F35298'
                            } else {
                                return "transparent"
                            }
                        }
                    }
                },
                data: data4
            },
            {
                name: '个股资金',
                type: 'bar',
                barWidth: 6,
                boundaryGap: false,
                data: data3,
//                    barCategoryGap: 5,
                //柱状图的颜色渐变
                itemStyle: {
                    normal: {
                        color: function (params) {
                            if (params.value >= 0) {
                                return new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 1, color: '#5460F9'},
                                        {offset: 0, color: '#ACD2F0'}
                                    ]
                                )

                            } else {
                                return new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#5460F9'},
                                        {offset: 1, color: '#ACD2F0'}
                                    ]
                                )
                            }
                        },
                        barBorderRadius: 3
                    }
                }
            }
        ]
    }

};
myChart.setOption(option);
