### Deplpyment Steps

# Docker

1- Install docker

2- Go to the project root folder and run
```sh
docker build -t tajr:v1 .
```
3- To ensure the images were built , run  ```docker images```, you should see a list of images

4- Run the image in detach mode
```sh 
docker run -d -p 8080:4000 tajr:v1
```
5- Check if the container is running by executing 
```sh 
docker ps -a
```
6- Open the browser and go to
 ```
 http://localhost:8080/
 ```  


**NOTE: **

When restarting the build, Make sure the containers are stopped first then remove the containers by running:

To view the containers:

```sh 
docker ps -a
```
Then remove  a container by running:

```sh 
docker container rm "*CONTAINER ID*"
```

To remove Images run:

```sh 
docker image rm "*IMAGE ID*"
```

# TajrWebsiteAngular
### Tech used for this project
    + Bootstrap 4.3.1
    + HTML
    + Angular CLI 11.1.1
    + Typescript 4.1.3
    + Angular/material: 11.1.1
    + Ngx-bootstrap: 5.2.8  // instead bootstrap js
    + ngx-toastr: 11.2.1  // show bootstrap toastr notification
    + Cors:2.8.5
    + Swiper: 6.5.0   // show multiple carousel items and touch slider with hardware devide
### Dev Installation procedure
    + git clone
    + cd tajr-website-angular
    + npm install 
    + sudo npm install -g @angular/cli@11.1.1
    + npm run dev:ssr
    + go to http://localhost:4200/
    
### Running unit tests
    + ng test: to execute the unit tests via [Karma].

### Running end-to-end tests
    + ng e2e: to execute the end-to-end tests via [Protractor].

### The architecture of components
    app ->
        views ->
            dashboard-default ->
                dashboard-default.component.css
                dashboard-default.component.html
                dashboard-default.component.spects
                dashboard-default.component.ts
            dashboard-marketplace ->
                dashboard-marketplace.component.css
                dashboard-marketplace.component.html
                dashboard-marketplace.component.spects
                dashboard-marketplace.component.ts
            dashboard-notfoundpage ->
                dashboard-notfoundpage.component.css
                dashboard-notfoundpage.component.html
                dashboard-notfoundpage.component.spects
                dashboard-notfoundpage.component.ts
            membership-area ->
                dashboard-login ->
                    dashboard-login.component.css
                    dashboard-login.component.html
                    dashboard-login.component.spects
                    dashboard-login.component.ts
                dashboard-register ->
                    dashboard-register.component.css
                    dashboard-register.component.html
                    dashboard-register.component.spects
                    dashboard-register.component.ts
        components ->
                header->
                        header.component.css
                        header.component.html
                        dheader.component.spects
                        header.component.ts
                default-listing-gallery->
                        default-listing-gallery.component.css
                        default-listing-gallery.component.html
                        default-listing-gallery.component.spects
                        default-listing-gallery.component.ts
                ***
                ***
    + Component in directory [views] will collect all components contains in directory [components] appear in a link.

###  Form validation
    +Use formBuilder to manage form input validation and show error.
    public [formName]: FormGroup; 
      constructor(public formBuilder: FormBuilder) {   
        this.[formName] = this.formBuilder.group({     
          [inputName]: new FormControl({ value: "", disabled: false }, Validators.compose([
            [require_1],[require_2],[require_3]]))  
        });
    }

### valid input value
    Use angular regex (regular expression) to check. Almost check two case: required input and regex format.
    List of regex input used:
    - Login:
        + mobile_number: /^[0]\d{9}$/       require format: 0*********
        + password: /^[*]*/                 require format: *
    - Register details:
        + password: /^.{6,128}$/            must be between 6 and 128 characters 
        + verify Code: /^\d*$/;             require format: 1234
        + username: /^.{1,15}$/;            must be between 1 and 15 characters
        + first_name: /^.{1,50}$/;          must be between 1 and 50 characters
        + last_name: /^.{1,50}$/;           must be between 1 and 50 characters
### Tajr project config
    - environment.ts :
        + baseUrl :'https://api.tajr.sa',
        + environmentName: 'DEV',
        + enableDebug: false   // <-- Set [true] use to debug purposes only
### Tajr default page
    - Method show item on carousel:
        + When this component init : 
            1. Get "filterBy" from father template call it. Ex: "<app-default-listing-gallery [filterBy]="latest"></app-default-a00007>"
            2. Send request get all listing "https://***/v1/listings".
            3. Loop from response data and repair for each listing id a position available array name "carouselList".
            4. Send request get each listing details  by id "https://***/v1/listings/:listing_id"
            5. With each response : find response data by listing id and past information to array "carouselList" containt it's postion.
        + Show item on template:
            1. On template available "*ngFor" use to loop in "carouselList" to show information.
            2. Image will be embed by bootstrap attribute "embed-responsive-4by3",and 4 by 3 is the frame contains of image too.
            3. Content on medium, large, extra large will be embed by attribute "embed-responsive-4by3".
            4. Content on small screen size will be embed by attribute "embed-responsive-16by9".
            5. Content on extra small screen size will be embed by attribute "embed-responsive-21by9".
            6. Card footer is under and out side of card content.
            7. After carousel render,"ngDoCheck()" will add class "d-none" to hide carousel control, make it can not go to left and right.
            *. Attribute "embed-responsive-4by3,16by9,21by9" already check with title make length 65 and subtitle max length 80.
    - Login modal:
        + Login modal open in header different from login modal open in footer although those template same same.
        Because open modal from other component in angular using ngx-bootrap different from the way bootstrap open modal.
        This will be change later when there is new solution.
### Registration
    register --> register-confirm --> register-details --> Homepage

### Reset password
    reset-password --> reset-password-confirm --> new-password --> login
  
### Login
    Login from login.html --> Homepage
    Login from modal login --> Show login elements,username and logout button. If login in login, register, and reset page will go to home page.
### Routing guard service
    - canActivate: [AuthguardService]: Prevent user is not login.
        + If user login => can go to that page.
        + If user is not login cam not go to that member page.
        + If user log out in member page will be redirect to login page.
        + If user log in in Login page success will be redirect to previous page or home page.
    - canActivate: [PreventMemberService]: Prevent user aldready login.
        + If user login cam not go to that page.
        + If user is not login cam not go to that member page.
        + If user log out => can go to that page.
        + If user log in in Login page success will be redirect to previous page or home page.
    runGuardsAndResolvers: 'always': Run guards and resolvers on a route when reload current link.
### List-an-item page flow
    *attribute.type === 'string'.
    A.Get value to check :
        -is_required_for_selling: true	
            + Not allow 'null' or empty  '' or multi space '      '
            + maxlength	
            + to string
        -is_required_for_selling: false
            + Allow 'null' or empty  ''
            + Not allow multi space '      '
            + maxlength
            + to string
    B.Set value to send request:
            + null set "" or don't set
            + not null set string value.
    *attribute.type === 'number'.
    A.Get value to check :
        -is_required_for_selling: true	
            + Not allow 'null' or empty  '' or multi space '      '
            + min (lower)
            + max (upper)
            + is number type
        -is_required_for_selling: false
            + Allow 'null' or empty  ''
            + Not allow multi space '      '
            + min (lower)
            + max (upper)
            + is number type
    B.Set value to send request:
            - null (set "" or don't set ) EX: {"importHistory":""}
            - number.to string EX: {"importHistory":"2000"}
    *attribute.type === 'bool'.Get value to check :
    A.Get value to check :
        -True/false/null
    B.Set value to send request:
        -"true"/"false" (text=> lower case)   or "true"/""  
    
    *Focus all case :
    - group_name: 
        + Vehicle Details	
        + Vehicle Features
        + Listing Options
    - options:
        +Has options
        +Don't has option   
    - Input value source from :
        + User input 
            -> Current step page 
            -> Later step pagego to previous step page to edit information
        + Item information => user edit item information
   	
   	ngOnInit (When this page was load):    
    User -> list-an-item  -> From user client will send 2 request :
    + Get all catergories (GET https://api.tajr.sa/v1/categories ) to show categories option value  on input:
    
    	localStorage.setItem(TAJR_ALL_CATEGORIES, JSON.stringify(data.body)) -> Save to local storage to ngDocheck show item after the second time load page       
    
    + Get category details by ID (GET https://api.tajr.sa/v1/category-details/0200 )to show :
    	 localStorage.setItem(TAJR_CATEGORIES_DETAILS, JSON.stringify(data.body));   	    
             this.modelOptions = > modelOptions: variable show option list item in model input
    ngDoCheck (When value of this page input was change ):
    
     if (localStorage.getItem(TAJR_ALL_CATEGORIES) && !this.allMotorsCategories) :
     this.allMotorsCategories => set value for allMotorsCategories to show option on browser vehicleType option input
    
     if (localStorage.getItem(TAJR_CATEGORIES_DETAILS) && !this.categoryAttribute) :
      this.categoryDetailsById =>This variable is an OOP containt category details for other function use and don't show on browser      
    
    * [ categoryId ] option Onchange Send request :
    + Get category details by ID (GET https://api.tajr.sa/v1/category-details/[categoryId value]):
      localStorage.setItem(TAJR_CATEGORIES_DETAILS, JSON.stringify(data.body));
     	this.categoryDetailsById = data.body;        
            this.modelOptions => Show new model option value with current [categoryId]
### Command line use to configure this project
    + ng new tajr-website-angular
    + ng add @angular/material
    + ng add ngx-bootstrap 
    + npm install cors
    + npm install ngx-toastr --save
    + ng add @nguniversal/express-engine
    + npm install localstorage-polyfill --save
    + npm config set scripts-prepend-node-path auto
    + npm install --save @types/webrtc
    + npm install swiper
### Upgrate angular version 8 to 11
+ sudo npm uninstall -g @angular/cli
+ npm cache clean --force 
+ sudo npm install -g @angular/cli@11.1.1
+ ng update @angular/cdk @angular/cli @angular/core @angular/material rxjs --force
+ npm install
### Generate new component
+ cd src/app/views
+ ng g c dashboard-test --module app //  generate page: dashboard-test
+ ng g c test-component --module app // generate component with name: test-component
+ copy select in "test-component" to "dashboard-test.component.html". ex: <app-test-component/>
+ Add new router for page component in "app-routing.module.ts"
