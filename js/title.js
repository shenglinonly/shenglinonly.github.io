<link rel="stylesheet" class="aplayer-secondary-style-marker" href="/assets/css/APlayer.min.css"><script src="/assets/js/APlayer.min.js" class="aplayer-secondary-script-marker"></script>//动态标题
var OriginTitile = document.title;
var titleTime;
document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
        //离开当前页面时标签显示内容
        document.title = '又岂在朝朝暮暮';
        clearTimeout(titleTime);
    } else {
        //返回当前页面时标签显示内容
        document.title = '还晓得回来';
        //两秒后变回正常标题
        titleTime = setTimeout(function () {
            document.title = OriginTitile;
        }, 2000);
    }
});