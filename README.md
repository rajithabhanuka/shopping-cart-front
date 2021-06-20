##Technical assessment - Development

###Spring Boot (Backend)

**Steps**

1. Install Java 8 or above
2. Install MySQL
3. Get the backend from [here](https://github.com/rajithabhanuka/shopping-cart-back.git)
4. Import project to IntelliJ
5. Run the Application
6. Once you run you have to create an account use below curl running on Postman,
```
  curl --location --request POST 'http://localhost:8080/app/users' \
  --header 'Content-Type: application/json' \
  --data-raw '{
  "email":"rajithabhanuka1@gmail.com",
  "name": "Rajitha Bhanuka",
  "password": "PPassword@123" ,
  "role_id":"1"
  }'
```

7. Other curl requests

```
curl --location --request POST 'http://localhost:8080/authenticate' \
--header 'Content-Type: application/json' \
--data-raw '{
    "username":"rajithabhanuka1@gmail.com",
    "password": "PPassword@123"
}'
```
```
curl --location --request GET 'http://localhost:8080/api/products?page=0&size=100' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWppdGhhYmhhbnVrYTFAZ21haWwuY29tIiwiZXhwIjoxNjI0MDgzNTE1LCJpYXQiOjE2MjQwODE3MTV9.yvakN2nEr7_PResn5zSwZdJpnK670PU-Nx_0Z-s9nli_3N522PuiOgYrvQcrfLDI8qEylEzGwPmxF5jxn_jQbQ'
```

```
curl --location --request GET 'http://localhost:8080/api/carts?userId=1' \
--header 'Authorization: Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJyYWppdGhhYmhhbnVrYTFAZ21haWwuY29tIiwiZXhwIjoxNjI0MDgzNTE1LCJpYXQiOjE2MjQwODE3MTV9.yvakN2nEr7_PResn5zSwZdJpnK670PU-Nx_0Z-s9nli_3N522PuiOgYrvQcrfLDI8qEylEzGwPmxF5jxn_jQbQ'
```

###Angular (Frontend)

**Steps**

1. Install Node & Angular
2. Get the frontend from [here](https://github.com/rajithabhanuka/shopping-cart-front.git)
3. Import project to IntelliJ
4. Run this command ```npm i```
5. Go to the browser and ```type http://localhost:4200```
6. Use the credentials which used to create an account above

###Navigation Of the Application

1. 
![Optional Text](../assets/images/1.png)

2. 
![Optional Text](../assets/images/2.png)

3. 
![Optional Text](../assets/images/3.png)

4. 
![Optional Text](../assets/images/4.png)

5. 
![Optional Text](../assets/images/5.png)

6. 
![Optional Text](../assets/images/6.png)

7. 
![Optional Text](../assets/images/7.png)

8.
![Optional Text](../assets/images/8.png)

9. 
![Optional Text](../assets/images/9.png)

10. 
![Optional Text](../assets/images/10.png) 
