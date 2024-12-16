Api Endpoints:
Production:
https://backend-for-occ-individual-capstone.onrender.com/
https://backend-for-occ-individual-capstone.onrender.com/api/auth/login
https://backend-for-occ-individual-capstone.onrender.com/api/auth/register
https://backend-for-occ-individual-capstone.onrender.com/api/users/admin
https://backend-for-occ-individual-capstone.onrender.com/api/users/seller
https://backend-for-occ-individual-capstone.onrender.com/api/users/buyer



Development
Register User:
Post Method
http://localhost:1234/api/auth/register
    Register Payload Data(JSON):
    {
        "username": "CLint",
        "password": "11234",
        "role": "admin"
    }

Login User:
Post Method
http://localhost:1234/api/auth/Login
 Login Payload Data(JSON):
    {
        "username": "CLint",
        "password": "11234",
    }

Protected Routes:
Get Method
Can only be accessed by admin :
http://localhost:1234/api/users/admin

 Can be accessed by admin and seller:
http://localhost:1234/api/users/seller

Can be accessed by admin, seller and buyer:
http://localhost:1234/api/users/buyer

