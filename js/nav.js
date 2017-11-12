var config = {
	'webPath':			'file:///home/ipad/code/git/demo/',
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
};


function  showNav(menus, lang, path) {
	var nav = "<nav class='navbar navbar-default navbar-fixed-top'>";
		nav += "<div class='container'>";
		nav += "<ul class='nav nav-pills'>";
	for (key in menus) {
		if (menus[key]['id'] == currentHome) {
		nav += "<li role='presentation' class='active'><a href='" + path + menus[key]['id'] + "/index.html'>" + menus[key][lang] + "</a></li>";
		} else {
		nav += "<li role='presentation'><a href='" + path + menus[key]['id'] + "/index.html'>" + menus[key][lang] + "</a></li>";
		}
	}
	return nav += "</ul></div></nav>";
}

document.write(showNav(config.menus, config.lang, config.webPath));
