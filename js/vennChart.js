/**
 * Created by Administrator on 2017/8/19 0019.
 */

var arr = [0,5,85];
function getSetIntersections(arr) {
    var arr2 = [];
    var count  = eval(arr.join('+'));
    for(var i=0;i<arr.length;i++){ //数组中的值最小不能小于10
        arr2.push(arr[i]<10?10:arr[i])
    }
    var data = [
        {sets:['A'],label : Math.floor(arr[0]/count*100)+ '%',size:arr2[0]},
        {sets:['B'],label : Math.floor(arr[1]/count*100)+ '%',size:arr2[1]},
        {sets:['C'],label : Math.floor(arr[2]/count*100)+ '%',size:arr2[2]},
        {sets:['A','B'],size:1},
        {sets:['A','C'],size:1},
        {sets:['B','C'],size:1},
        {sets:['A','B','C'],size:1}
    ]
    return data;
}
// draw the initial set
var chart = venn.VennDiagram()
    .width(360)
    .height(250);
d3.select("#venn").datum(getSetIntersections(arr)).call(chart);
// tweak style
var colours = ['yellow','red','blue'];
d3.selectAll("#venn .venn-circle path")
    .style("fill-opacity", 0)
    .style("stroke-opacity", 1)
    .style('fill',function(d,i) {return colours[i];})
    .attr('id',function(d,i){return 'svg' + colours[i]});

d3.selectAll("#venn .venn-circle text")  //设置文字
    .style("fill", 'rgba(255,255,255,0)')
    .style("font-size", "18px")
    .style("font-weight", "50");

var getpost = getPosition(colours);
function getPosition(colours){//获取path位置信息
    var arr = [];
    if(colours){
        for(var i=0;i<colours.length;i++){
            arr.push(document.getElementById('svg'+colours[i]).getBoundingClientRect())
        }
    }
    return arr;
}
function drawArc(colours,arr){ //画圆
    var oFragmeng = document.createDocumentFragment();
    for(var i=0;i<colours.length;i++){
        var odiv = document.createElement('div');
        odiv.style.width =  getpost[i].width + 'px';
        odiv.style.height =  getpost[i].width + 'px';
        odiv.style.left =  getpost[i].left - document.getElementById('venn').offsetLeft + 'px';
        odiv.style.top =  getpost[i].top - document.getElementById('venn').offsetTop + 'px';
        odiv.style.right =  getpost[i].right + 'px';
        odiv.style.lineHeight =  getpost[i].width + 'px';
        odiv.innerHTML = getSetIntersections(arr)[i].label;
        odiv.setAttribute('class','svgDiv bounceIn animated');
        odiv.setAttribute('id','svg'+colours[i]);
        oFragmeng.appendChild(odiv);
    }
    document.getElementById('venn').appendChild(oFragmeng)  //添加到画布中
}
drawArc(colours,arr)
document.getElementById('venn').removeChild(document.getElementById('venn').firstElementChild)  //删除svg
setTimeout(function(){$('.svgDiv').removeClass('bounceIn animated')},1000)
