/**
 * Created by Administrator on 2017/8/18 0018.
 */
var myChart = echarts.init(document.getElementById('repayAbility'));
var xData = ['2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13', '2016-12-13'];
var yData = [];
var data=[
    20, 18, 23, 32, 20, 18, 16, 19
];
var colors = ['#5793f3', '#d14a61', '#675bba'];
var option = {
    baseOption: {
        title: {
            show: false,
            text: "股东人数",
            textStyle: {
                color: "#d1d1d1",
                fontSize: 12
            },
            left: "3%",
            padding: [2, -10]
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: function (params) {
                return '<div class="box">' +
                    '<div class="date">' + params[0].axisValue + '</div>'
                    + '<div class="val">' + params[0].seriesName + ':  ' + params[0].value + '万' + '</div>'
                    + '</div>'
//                    console.log(params);
            },
            config: true,
            backgroundColor: "#303754",
            borderColor: "#6171F6",
            borderWidth: 1,
            textStyle: {
                color: "#fff",
                fontSize: 12
            },
            axisPointer: {
                type: "line",
                lineStyle: {
                    color: new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [
                            {offset: 0, color: '#ADD3F1'},
                            {offset: 1, color: '#5460F9'}
                        ]
                    ),
                    width: 1,
                },
                label: {
                    show: false
                }
            },
        },
        grid: {
            right: '5%',
            bottom: '2%',
            left: "3%",
            width: "94%",
            height:"90%",
            containLabel: true
        },
        legend: {
            show: false,
            data: ['股东人数']
        },
        xAxis: [
            {
                type: 'category',
                data: xData,
                axisPointer: {
                    type: 'line'
                },
//                坐标轴刻度标签的相关设置。
                axisLabel: {
                    interval: 1,
                    formatter: '{value}',
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 10
                    },
                    margin: 24
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    alignWithLabel: true
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        width: 2,
                        color: ["#eee"],
                        type: "dashed"
                    },
                    interval: function (index) {
                        if (typeof index === 'undefined') {
                            return false;
                        }
                        return true;
                    }
                }
            }
        ],
        yAxis: [
            {
                /*每股收益的y轴有刻度，但是没有轴线*/
                type: 'value',
                min: 15,
                max: 40,
                interval: 5,
                axisLabel: {
                    formatter: '{value}万',
                    //刻度上的文字样式设置
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 8
                    },
                    showMaxLabel: true,
                    showMinLabel: false
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
//                        interval: 1
                },
                splitLine: { //分割线
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ["#666"],
                        type: "dotted"
                    }
                }
            }
        ],
        series: [
            {
                name: '股东人数',
                type: 'bar',
                barWidth: 10,
                barGap: "15%",
                boundaryGap: true,
                data: data,
                itemStyle: {
                    normal: {
                        color: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ADD3F1'},
                                {offset: 1, color: '#5460F9'}
                            ]
                        ),
                        barBorderRadius: 5
                    }
                }
            },
            {
                name: '股东人数',
                type: 'line',
                symbol: "circle",
                symbolSize: 6,
//                    tooltop:{
//                        formatter: '{b0}: {c0}<br />{b1}: {c1}'
//                    },
                lineStyle: {   //折线线性渐变的颜色
                    normal: {
                        color: "transparent",
                        width: 0,
                        opacity: 0
                    }
                },
                itemStyle: { //折线圆点的颜色
                    normal: {
                        borderWidth: 4,
                        color: 'transparent'
                    },
                    emphasis: {
                        color: "#fff",
                        borderWidth: 4,
                        borderColor: new echarts.graphic.LinearGradient(
                            0, 0, 0, 1,
                            [
                                {offset: 0, color: '#ADD3F1'},
                                {offset: 1, color: '#5460F9'}
                            ]
                        )
                    }
                },
                data:data
            }
        ]
    }

};
myChart.setOption(option);