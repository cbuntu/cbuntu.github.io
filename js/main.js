var menus = {
	home: '首页',
	html: 'HTML',
	css: 'CSS'
};

var showMenus = menus => {
	return menus.html + ' ' + menus.home;
}

document.write(showMenus(menus));
