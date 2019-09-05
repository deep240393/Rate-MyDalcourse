# Assignment-4 branch details:

- Shrey Amin (B00822245)
- Chintan Patel (B00826089)
- Harsh Pamnani (B00802614)
- Deep Shah (B00796368)

## Framework

-   MEAN Stack
    
    -   MongoDb (Database)
        
        -   This is the database used to store all of our data.
    -   Express (Back-end)
        
        -   This is used to retrieve data from the database and return them in a usable format.
    -   Angular
        
        -   This framework is used for running our web application.
    -   Node.js
        
        -   This is used to run Express and download any dependencies.

## [](#feature)Features

 1. Registration
2. Login
3. Profile management
4. Search course
5. Rate course
6. Create a post
7. Display overall rating
8. Mark post as helpful


    

## [](#w3c-compliance-check)W3C Compliance Check

I only worked on the Event Details' component HTML. The header and footer are similar for all pages and are compliant. The Event Details's component HTML will throw errors on "*ngIf" ,"*ngFor", and service variables:{{eventdetails[0].firstname}} in terms of compliance. Any other HTML within the component is compliant. The css file is compliant.

## [](#setup-instructions)Setup Instructions

1.  Clone Repo from [here](https://git.cs.dal.ca/jelliott/daleventsproject) within command prompt: **git clone [git@github.com:deep240393/Rate-MyDalcourse.git](https://git.cs.dal.ca/jelliott/daleventsproject.git)**
   
    
3.  Make sure that you have the latest code : **git pull**
    
4.  Install all dependencies from the root folder: **npm install**
    
5.  Install Angular : **npm install -g @angular/cli**
    

**Connecting to Back-end Server**

6.  Go into the back-end folder : **cd backend**
    
7.  Install all dependencies from the back-end folder: **npm install**
    
8.  Within the back-end folder, run the server : **node server.js**
    

**Running the Front-end**

9.  Open a New File Explorer to the root of the project.
    
10.  The back-end server should be running from step 7; now you can run the application, from the root of the project.
    
11.  Open a command prompt from the root of the project and type: **ng serve -o**
    
12.  The browser should open up to `http://localhost:4200/`
    
13.  On the Nav bar, click on `Event Details`
    
14.  Congratulations, you have reached the feature for this assignment : `http://localhost:4200/event-details`
    

## [](#references)References

[1]"Afrofuturism: a panel discussion", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/18/afrofuturism](https://www.dal.ca/news/events/2019/03/18/afrofuturism)__a_panel_discussion.html. [Accessed: 21- Mar- 2019]

[2]"University of King’s College Spring Open House", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html](https://www.dal.ca/news/events/2019/03/22/university_of_king_s_college_spring_open_house.html). [Accessed: 21- Mar- 2019]

[3]"One World Symposium", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html](https://www.dal.ca/news/events/2019/03/23/one_world_symposium.html). [Accessed: 21- Mar- 2019]

[5]"Ask an Astronaut", _Dalhousie University_, 2019. [Online]. Available: [https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html](https://www.dal.ca/news/events/2019/03/04/ask_an_astronaut.html). [Accessed: 21- Mar- 2019]

[6]"Angular", _Angular.io_, 2019. [Online]. Available: [https://angular.io/guide/quickstart](https://angular.io/guide/quickstart). [Accessed: 20- Mar- 2019]

[7]"Welcome to the mean stack", _mean_, 2019. [Online]. Available: [http://mean.io/](http://mean.io/). [Accessed: 20- Mar- 2019]

**Angular Information after this. Not My Information past this point**

# [](#dalevents)Rate MyDalcourse

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.5.

## [](#development-server)Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## [](#code-scaffolding)Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## [](#build)Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## [](#running-unit-tests)Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## [](#running-end-to-end-tests)Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## [](#further-help)Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
