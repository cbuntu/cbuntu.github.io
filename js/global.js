
var config = {
	'currentHome':		'home',
	'lang':				'cName',
	'menus': [
		{
			'id':		'home',
			'eName':	'Home',
			'cName':	'首页',
			'list':	[
				{
					'id':		'info',
					'eName':	'Info',
					'cName':	'简介',
				}
			]
		}, {
			'id':		'html',
			'eName':	'Html',
			'cName':	'超文本标记语言',
		}
	]
}


function  showNav(menus, lang) {
	var nav = "<nav class='navbar navbar-default navbar-fixed-top'>";
		nav += "<div class='container'>";
		nav += "<ul class='nav nav-pills'>";
	for (key in menus) {
		nav += "<li role='presentation'><a href='#'>" + menus[key][lang] + "</a></li>";
	}
	return nav += "</ul></div></nav>";
}

document.write(showNav(config.menus, config.lang));
