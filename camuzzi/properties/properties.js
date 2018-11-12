module.exports = {
	
	//URLs
	CamuzziComprasURL: 'http://camuzzicompras-dev.azurewebsites.net/login', 
		
	//************************************************************************************************************************************************************
	// LOCATORS
	//************************************************************************************************************************************************************
	
	//Locators - Login Page
	nameUser: 'nickname',
	namePassword: 'password',
	xpathErrorLogin: '//*[@id="m_login"]/div/div/div[2]/form/div[1]/span',
	xpathCabeceraListaConcursos: '/html/body/div[2]/div/div[2]/div/buyer-dashboard/div/div/div/div/div[1]/div[1]/div/h3',
	
	//Locators - CreacionConcurso
	xpathUserIcon: '//*[@id="m_header_topbar"]/div/ul/li[4]/a/span[1]/img',
	xpathLogoutButtonComprador: '//*[@id="m_header_topbar"]/div/ul/li[4]/div/div/div[2]/div/ul/li[3]/a',
	xpathLogoutButtonProveedor: '//*[@id="m_header_topbar"]/div/ul/li[4]/div/div/div[2]/div/ul/li[4]/a',
	
	//************************************************************************************************************************************************************
	// STATIC PARAMETERS
	//************************************************************************************************************************************************************
	
	//LoginOK-parameters
	dataUser: 'leonelmiro',
	dataPassword: 'test1234',

};
