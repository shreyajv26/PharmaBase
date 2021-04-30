**# PharmaBase**

The concept is to create a web application for medical store owners who would be able to achieve the following:

1. Login to the application.
2. On the home page - Type the name of the medicine and get its current count (amount left in store) as well as the rack number on which the medicine is stored for fast access and retrieval of medicine to be sold to the customer.
3. The store owner can edit the details related to the medicine.


**Configurations:**

1. Front-End: 
      a. Node Version: 14.6.0
      b. npm Version: 6.14.11

2. Backend: Java 8 + Spring Boot 

4. Database: MySQL Database from AWS RDS


**Steps to run the project:**

Pre-Requisites:

1. Java 8 is installed.
2. Node js is installed.
3. No process is running on Port 8080 and 3000.

Steps:

1. First Run the Jar:

      a. Download the jar "pharmaBase.jar".
      
      b. Open command prompt and go to the folder where you saved the jar. Type the below command to run the jar.
                                     java -jar pharmaBase.jar
      
      c. Do not close this terminal window. Keep it running. The application has started.
      
2. To start the Web-App:

      a. Download the project and unzip it (recommended) or clone the git repository using the below command.
                              $ git clone {the url to the GitHub repo}
         

      b. In command prompt, cd into the new folder "pharmabase-app" and type
                               $ npm install
        This will install all the required dependencies for the project. 

      c. Once all the dependencies are downloaded, from the same folder "pharmabase-app" in command prompt, type the below command to run the React project.
            $ npm start
      
      d. The website will be triggered and you can test the application. (I have added a walkthrough video for this project. You can refer to it in case you face any issues while starting the application)
        

**Implementation Details:**
      
      1. Create a user and login with valid credentials (Saved in "Users" table in MySQL)
      
      2. Add a product to the list (saved in "Products_data" table in MySQL)
      
      3. Edit a product from the list (edited changes updated to "Products_data" table in MySQL)
      
      4. Delete a product from the list (deleted from "Products_data" table in MySQL)


**Tests Covered:**
     
      1. Unit Test covered for Add a product Functionality (all other tests can be written in similar way)
      
      2. Integration Tests Covered for all the above mentioned functionalities.

**Functionalities Covered:**
      
      1. Start with Signing Up with your details.
      
      2. Login to the app with valid credentials. You will not be able to get through if the credentials are incorrect. 
            (Currently, no error would be thrown on web app for incorrect credentials. However, you can check in the react console that the error is displayed - access was unauthorized)
      
      3. On successful login, you can see the products page. You can either add/display the list of products.
      
      4. Start with "Display All Products"
      
      5. A list of all the products would be displayed. (Please note that since we are connected to RDS, it takes a couple of seconds for the data to be loaded)
      
      6. Here against each product, you can see 2 options - Edit and Delete.
      
      7. When you click on "Edit" Button - You can edit the product details (The edit product page is not pre-populating the details, however, you can check in console that the correct data is transfered between pages). Just enter the fields and click on "Save". New changes would be displayed on the product list.
      
      8. On clicking the "Delete" Button, you can see the product being deleted and changes reflecting immediately on the page. (Ideally the changes reflect immediately without the need to refresh the page. Just in case the row doesnt get removed, reload the page and check).
      
      9. "Go back to Products page" and you will see another option to "Add a product"
      
      10. You can add a new product and check the "Products List" to see your changes.
            

**Future Scope:**

      1. Adding the error messages on UI (for e.g. Login)
      2. Populating the "Edit Product" page.
      3. Logout functionality
      4. More Unit Test writing - For rest of the methods.

**Disclaimer:**

        I have observed that the pages take longer  to load since I am using Free Tier of AWS RDS. Please have patience for the page to load.
        Sometimes the RDS instance just crashes, in which case the application won’t work without DB connectivity. Please reach out to me in case that issue occurs.

      
**My details:**

      Shreya Pampattiwar
      +1 (716)-292-8585
       https://www.linkedin.com/in/shreya-pampattiwar
      github.com/shreyajv26
