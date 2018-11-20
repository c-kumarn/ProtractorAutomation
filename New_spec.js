/*describe('angularjs homepage', function() {
  it('should greet the named user', function() {
    browser.get('https://www.freelancer.in/');

    element(by.model('yourName')).sendKeys('');

    var greeting = element(by.binding('yourName'));

   	browser.sleep('10000');
  });*/

  describe('To Check profile on freelancer', function() {
	 
    var todoList;
	
	beforeEach(function() {
		
		console.log('test case is running');
	});

    it('Open the website' , function() {
	  browser.manage().window().maximize()
		
      browser.get('https://www.freelancer.in');
	  
	 

    });

    it('Open login page', function() {
		//element(by.linkText('Log In')).click();
      browser.get('https://www.freelancer.in/login');
	  
	});

    it('Enter username and password', function() {
      var addId = element(by.model('LoginForm.UserData.user.username'));
	  
	  addId.sendKeys('krnitin64@gmail.com');
	  
	  var addPass = element(by.model('LoginForm.UserData.user.password'));

	  addPass.sendKeys('Nitin@123');
	  browser.sleep(2000);
	  
	  element(by.buttonText('Log In')).click();
		
	  browser.sleep(10000);
      
      //expect(todoList.get(2).getText()).toEqual('write a protractor test');
    });
	
	it('Open freelancer profile And match the Title', function() {
		element(by.className('ImageThumbnail-link')).click();
		
		browser.sleep(5000);
		//var ab = browser.getTitle();

		expect(browser.getTitle()).toEqual('Nitin K. - Java Developer - India | Freelancer');
		console.log('Title Matched');
	  
	}); 
	
	afterEach(function() {
		
		console.log('test case is completed');
	});

});
