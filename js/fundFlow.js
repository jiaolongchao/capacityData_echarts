/**
 * Created by Administrator on 2017/8/18 0018.
 */

//资金流向
var colorList = ['#107468', '#207E4D', '#5EE561', "#03E01A", '#AD3F52', '#C14164', '#FD3F3E', '#BE1E2D'];
var data = [300, 400, 270, 400, 600, 681, 345, 845];
var arr = [];
data.forEach(function (item, index) {
    arr.push({
        value: item,
        itemStyle: {
            normal: {
                borderColor: colorList[index]
            }
        }
    })
});
//console.log(arr)
var i = 0;
var myCharts = echarts.init(document.getElementById("fundFlow"));
var option = {
    title: {
        show: false
    },
    tooltip: {
        show: false
    },
    legend: {
        show: false,
        data: ["资金流入图", 'aaa']
    },
    grid: {
        width:"98%",
        height:"98%",
        right:"5%",
        bottom:"-3%",
        containLabel: true
    },
    xAxis: {
        show: true,
        type: "value",
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#44565F",
                width: 4
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        show: true,
        axisLabel: {
            show: false
        },
        axisLine: {
            show: false,
            lineStyle: {
                color: "#44565F",
                width: 4
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        },
        nameLocation: "end",
        type: "category",
        data: ["雷超1", "雷超2", "雷超3", "雷超4", "雷超5", "雷超6", "雷超7", "雷超8"]
    },
    series: [
        {
            name: '2012年',
            type: 'bar',
            stack: '总量',
            barCategoryGap:"10%",
            barWidth: 8,
            itemStyle: {
                normal: {
                    color: function (params) {
                        var colorList = ['#107468', '#207E4D', '#5EE561', "#03E01A", '#AD3F52', '#C14164', '#FD3F3E', '#BE1E2D'];
                        return colorList[params.dataIndex];
                    },
                    barBorderRadius: 8,
                },
                emphasis: {
                    shadowBlur: 5,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            },
            data: data
        },
        {
            name: 'aaa',
            type: 'line',
            data:  arr,
            showAllSymbol: true,
            symbol: "circle",
            smooth: true,
            symbolSize: 15,
            lineStyle: {   //折线线性渐变的颜色
                normal: {
                    color: "rgba(0,0,0,0)",
                    opacity: 0
                }
            },
            itemStyle: { //折线圆点的颜色
                normal: {
                    color: "#fff",
                    borderColor: function (params) {
                        var i = 2;//
                        var colorList = ['#107468', '#207E4D', '#5EE561', "#03E01A", '#AD3F52', '#C14164', '#FD3F3E', '#BE1E2D'];
                        return colorList[i++];
                    },
                    borderWidth: 4
                }
            },

        }]
};
myCharts.setOption(option);