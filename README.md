# PharmaBase

The concept is to create a web application for medical store owners who would be able to achieve the following:

Login to the application.
On the home page - Type the name of the medicine and get its current count (amount left in store) as well as the rack number on which the medicine is stored for fast access and retrieval of medicine to be sold to the customer.
The user can edit the details related to the medicine.
Medical data files downloaded from the below location: https://www.fda.gov/drugs/drug-approvals-and-databases/drugsfda-data-files


**Configurations:**

1. Front-End: 
      a. Node Version: 14.6.0
      b. npm Version: 6.14.11

2. Backend: Java 8 + Spring Boot 

4. Database: MySQL Database from AWS RDS


**Steps to run the project:**

1. First Run the Jar:
      a. Download the jar attached - pharmaBase.jar
      
      b. Run the jar in command prompt using the below command
          java -jar pharmaBase.jar
      
      c. Do not close this terminal window. Keep it running. The application has started.
      
1. To start the Web-App:
      a. Open your terminal and then type
            $ git clone {the url to the GitHub repo}
         This will clone the repo to your machine.

      b. cd into the new folder and type
            $ npm install
        This installs the required dependencies

      c. To run the React project.
            $ npm start
        

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
            (Currently, no error would be thrown on console for incorrect credentials. However, you can check in the react console that the access was unauthorized)
      
      3. On successful login, you can see the products page. You can either add/display the list of products.
      
      4. Start with "Display All Products"
      
      5. A list of all the products would be displayed. (Please note that since we are connected to RDS, it takes a couple of seconds for the data to be loaded)
      
      6. Here against each product, you can see 2 options - Edit and Delete.
      
      7. When you click on "Edit" Button - You can edit the product details (The edit product page is not pre-populating the details, however, you can check in console that the correct data is transfered between pages). Just enter the fields and click on "Save". New changes would be displayed on the product list.
      
      8. On clicking the "Delete" Button, you can see the product being deleted and changes reflecting immediately on the page.
      
      9. "Go back to Products page" and you will see another option to "Add a product"
      
      10. You can add a new product and check the "Products List" to see your changes.
            

