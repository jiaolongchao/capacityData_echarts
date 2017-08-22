/**
 * Created by Administrator on 2017/8/18 0018.
 */

//概念涨跌幅
//发送ajax，x轴只要替换此数据即可
var data1=['云南国企', '三七', '中医药', '消费', '中药材', '大健康'];
var data2=[
    -0.4, 0.55, 0.35, -0.2, 0.3, -0.54, -0.45, 0.58
];
var myChart = echarts.init(document.getElementById('priceLimit'));
var option = {
    baseOption: {
        tooltip: {
            //这里是提示框，这里保留是为了怕后续需要添加，不用可以直接删除
            show: false,
            trigger: 'axis',
            config: true,
            backgroundColor: "#303754",
            borderColor: "#6171F6",
            borderWidth: 2,
            textStyle: {
                color: "#fff",
                fontSize: 12
            },
            axisPointer: {
                show: false,
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
        //这里可以修改内边距和大小
        grid: {
            top: '14%',
            bottom: '5%',
            left: '2%',
            width: "96%",
            containLabel: true
        },
        legend: {
            show: false,
            data: ['概念涨跌幅']
        },
        title:{
            show:true,
            text:"概念涨跌幅",
            textAlign:"left",
            textStyle:{
                color:"#d1d1d1",
                fontSize:12
            }
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
                    interval:0, //控制显示所有的x轴
                    formatter: '{value}',
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 11
                    },
                    margin:15
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false,
                    interval:0,
                    alignWithLabel: true
                },
                //x轴分割线的控制
                splitLine: {
                    show: false,
                    lineStyle: {
                        width: 1,
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
                name: '',
                nameGap: 10,
                nameTextStyle: {
                    color: "#d1d1d1",
                    fontSize: 12
                },
                min: -0.6,
                max: 0.6,
                interval: 0.2,
                axisLabel: {
//                        interval:1,
                    formatter: '{value}%',
                    //刻度上的文字样式设置
                    textStyle: {
                        color: "#d1d1d1",
                        fontSize: 8
                    },
                    showMaxLabel: true,
                    showMinLabel: true
                },
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                splitLine: { //分割线
                    show: true,
                    lineStyle: {
                        width: 1,
                        color: ["#666"],
                        type: "dashed"
                    }
                }
            }
        ],
        series: [
            {
                name: '概念涨跌幅',
                type: 'bar',
                barWidth: 8,
                barCategoryGap:"5%",
//                    barGap:30%,
                data: data2,
                //柱状图的颜色渐变
                itemStyle: {
                    normal: {
                        color: function (params) {
                            if (params.value >= 0) {
                                return new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#FFB199'},
                                        {offset: 1, color: '#FF0844'}
                                    ]
                                )

                            } else {
                                return new echarts.graphic.LinearGradient(
                                    0, 0, 0, 1,
                                    [
                                        {offset: 0, color: '#A8D65D'},
                                        {offset: 1, color: '#7EEEE5'}
                                    ]
                                )
                            }
                        },
                        barBorderRadius: 8
                    }
                }
            }
        ]
    }
};
myChart.setOption(option);
