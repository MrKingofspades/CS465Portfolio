# CS465Portfolio

Architecture
Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).

JavaScript is a language that I've worked with before, as well as HTML, but when I worked with the two it was very un-structured. Having the structure in place here allowed for a more concentrated and a more precise attention to detail on how each of the two components communicate. While the Express side of things was a lot more easy to understand, as far as MVC routing and such goes. I think the SPA was a little more confusing to learn. I think the biggest part of the SPA was understanding how the application would communicate with the database and how things would become populated. However, after working with both, I can see the major benefits in both. I think the Express webpages we built are a lot more flexible and allow for a multi-layered website, while the SPA seems more precisely focused on performing less tasks and at a higher proficiency. Overall, the biggest takeaway for me when comparing the two is the different applications you can build with either architype. 

Why did the backend use a NoSQL MongoDB database?

The NoSQL database was used to easily perform tasks that pull from an 'offshore' database that can communicate with the webservice and populate data. This is done through the various methods, such as creating data, reading data, updating, and deleting data (CRUD). The two biggest advantages to the use of the MongoDB is that it can be setup to help provide ease of use with proper methods and also allows for security to be implemented, as the data is harder to access. 

Functionality
How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

While JavaScript is a coding language, JSON acts more as a data format/syntax focused on serializing data. Through the use of JSON and storing JSON data within our database, our servers were able to communicate with the database and run the JavaScript that can print the data to our website. 

Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Throughout the development of the web application, there were many times were I, and my classmates, would communicate on the discussion boards to solve multiple issues that proped up in the code provided to us. The most recent example, for me,  was having to change the bootstrap scripts provided by the guide to the one's on the website to handle an error that wouldn't allow the server to launch. There have been other times throughout, where I've had to refactor code to ensure that the program was communicating with the MongoDB servers. Without this, the application wouldn't have produced data at all.
A major benefit of reusable UI components is interchangability. Being able to take components that are already built and customize them to fit your needs make focusing on your vision for the UI much more feasable.

Testing
Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

Authentication is key when talking about security. Making sure that the logged in user has the authority to access areas of the application, through the use of hashing and tokens as well as many other security avenues, is important in ensuring that the user's data is protected, as well as the data being used by the developers. While developing this application, I saw how you could take each step towards the API endpoints and build an authentication service throughout. With the CRUD methods being of utmost importance to determine user eligibility, it was a fluid motion to ensure that the user was authorized to access each of the request methods and to perform those operations on the server.

Reflection
How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

Rehashing the last answer, I think the biggest benefit I've taken from this course is how a structure like this can provide a secure user/admin experience. Understanding how each route taken on the web application is being checked with security measures helped a lot in understanding how to build a secure service. I think that will be the biggest takeaway from this course, for me. 
