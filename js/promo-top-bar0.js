var topbar = 
'<div class="topbar-wrap">'
	+ '<div class="topbar clear">'
	+'<a href="http://www.wan.com/" class="fl" target="_blank" ><img src="images/logogo.png" height="24"/></a>'
	+ '<ul class=" fr">'
	+ '<li class="li01 script ftball"><a href="http://q.wan.com/cover.shtml" title="秦时明月" rel="nofollow" target="_blank"></a></li>'
	+ '<li id="topbar_userinfo" class="li01">';
	if(typeof(Passport) != "undefined" && Passport.isLogin()) {
		topbar += '<a class="a_2" href="http://play.wan.com/user/index" title="个人中心" target="_blank">' + Passport.currentUser() + '</a>&nbsp;|&nbsp;<a class="a_2" href="javascript:void();" title="退出" onclick="Passport.logout();return false;">退出</a></li>';
	} else {
		topbar += '<a class="a_2" href="javascript:void();" title="登录" onclick="Wan.login();return false;" rel="nofollow">登录</a>&nbsp;|&nbsp;<a class="a_2" href="javascript:void();" title="注册" onclick="Wan.reg();return false;" rel="nofollow">注册</a></li>';
	}
	topbar +='<li class="li01 script"><a href="http://play.wan.com/pay/index" title="充值" rel="nofollow" target="_blank">充值</a></li>'
	+ '<li class="li02 script"><a title="收藏本站" onclick="addFav()" rel="nofollow" target="_blank" style="cursor:pointer;">收藏本站</a></li>'
	+ '<li class="li03 script"><a title="设为首页" onclick="setHome(this, window.location)" rel="nofollow" target="_blank" style="cursor:pointer;">设为首页</a></li>'
	+ '<li class="li04 script"><a href="http://play.wan.com/shortcut.jsp" title="保存到桌面" rel="nofollow" target="_blank">保存到桌面</a></li>'
	+ '<li class="li05" id="allGames">'
    + '     <a href="http://www.wan.com/search.shtml" title="全部游戏" target="_blank">全部游戏</a>'
    + '      <div id="dropBox">'
    + '         <ol>'
    + '           <li><a href="http://q.wan.com/" target="_blank" title="秦时明月" class="hot_g">秦时明月<em class="hot_icon"></em></a></li>'
    + '           <li><a href="http://sq.wan.com/" target="_blank" title="神曲2" class="hot_g">神曲2<em class="hot_icon"></em></a></li>'
    + '           <li><a href="http://fyws.wan.com/" target="_blank" title="风云无双" class="hot_g">风云无双<em class="hot_icon"></em></a></li>' 
    + '           <li><a href="http://kdxy.wan.com/" target="_blank" title="快打西游" class="new_g">快打西游<em class="new_icon"></em></a></li>'  
    + '           <li><a href="http://hg.wan.com/" target="_blank" title="黑暗之光" class="hot_g">黑暗之光<em class="hot_icon"></em></a></li>'
    + '           <li><a href="http://jy.wan.com/" target="_blank" title="剑影" class="hot_g">剑影<em class="hot_icon"></em></a></li>'
    + '          <li><a href="http://zwx.wan.com/" target="_blank" title="醉武侠" class="new_g">醉武侠<em class="new_icon"></em></a></li>'
    + '          <li><a href="http://xyds.wan.com/" target="_blank" title="西游斗神" class="new_g">西游斗神<em class="new_icon"></em></a></li>'
    + '          <li><a href="http://dbtx.wan.com/" target="_blank" title="独步天下">独步天下</a></li>'
    + '          <li><a href="http://wolong.wan.com/" target="_blank" title="卧龙OL">卧龙OL</a></li>'
    + '          <li><a href="http://ddt.wan.com/" target="_blank" title="弹弹堂3">弹弹堂3</a></li>'
    + '          <li><a href="http://dntg.wan.com/" target="_blank" title="大闹天宫">大闹天宫</a></li>'
    + '         <li><a href="http://qsls.wan.com/" target="_blank" title="倾世洛神">倾世洛神</a></li>'    
    + '          <li><a href="http://mlj.wan.com/" target="_blank" title="魔龙诀">魔龙诀</a></li>'
    + '          <li><a href="http://jzyf.wan.com/" target="_blank" title="精忠岳飞">精忠岳飞</a></li>'
    + '          <li><a href="http://smzg.wan.com/" target="_blank" title="圣魔战歌">圣魔战歌</a></li>'
    + '          <li><a href="http://lwzy.wan.com/" target="_blank" title="龙纹战域">龙纹战域</a></li>'
    + '         <li><a href="http://xhs.wan.com/" target="_blank" title="新海神">新海神</a></li>'
    + '         <li><a href="http://sctx.wan.com/" target="_blank" title="神创天下">神创天下</a></li>'
    + '         <li><a href="http://ybyy.wan.com/" target="_blank" title="硬霸英雄">硬霸英雄</a></li>'
    + '        <li class="moreWrap"><a href="http://www.wan.com/search.shtml" target="_blank" class="moreBtn">更多游戏</a></li>'
    + '       </ol>'
    + '       <em class="triangle"></em>'
    + '   </div>'
     + '  </li>'
	+ '</ul></div></div>';
document.write(topbar);
function addFav() {
	var url=window.location.href;
	var title = window.document.title;
	try {
		window.external.AddFavorite(url, title);
	} catch (e) {
		try {
			window.sidebar.addPanel(title, url, "");
        } catch (e) {
        	alert("浏览器不支持该操作，尝试快捷键 Ctrl + D !");
        }
	}	
}
function setHome(obj, vrl){
	var isChrome = navigator.userAgent.toLowerCase().match(/chrome/) != null;
	if(isChrome){
		alert("浏览器不支持当前操作。（请手动“设为首页”）");
	}else{
		try {
			obj.style.behavior = 'url(#default#homepage)';
			obj.setHomePage(vrl);
		} catch (e) {
			if (window.netscape) {
				try {
					netscape.security.PrivilegeManager.enablePrivilege("UniversalXPConnect");
				} catch (e) {
					alert("浏览器不支持当前操作。（请手动“设为首页”）");
				}
				var prefs = Components.classes['@mozilla.org/preferences-service;1'].getService(Components.interfaces.nsIPrefBranch);
				prefs.setCharPref('browser.startup.homepage', vrl);
			}
		}
	}
}
function topbar_setLogin() {
	$("#topbar_userinfo").html('<a class="a_2" href="http://play.wan.com/user/index" title="个人中心" target="_blank">' + Passport.currentUser() + '</a>&nbsp;|&nbsp;<a class="a_2" href="javascript:void();" title="退出" onclick="Passport.logout();return false;">退出</a>');
}
$(function(){
	$("#allGames").hover(function(){
		$("#dropBox").css('display','block');

	},function(){
		$("#dropBox").css('display','none');
	});
	$("#close").click(function(){
		$(".popBox").hide();
	})
})