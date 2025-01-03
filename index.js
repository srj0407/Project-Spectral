'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let htmlTop = `
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="style.css">
    <link href="https://fonts.googleapis.com/css2?family=Catamaran&family=Shadows+Into+Lights&display=swap"
    rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap"
    rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Spectral</title>
</head>
<body>

    <div class="header">
        <div class="container">
            <div class="navbar">
                <div class="logo">
                    <a href="./Home.html"><img src="./Assets/images/image01.png" width="125px"></a>
                </div>
                <nav>
                    <ul id="MenuItems">
                        <li><a href="./index.html">Home</a></li>
                        <li><a href="./products.html">Products</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="./account.html">Account</a></li>
                    </ul>
                </nav>
                <a href="./cart.html"><img src="Assets/images/cart.webp" width="30px" height="30px"></a>
                <img src="Assets/images/menu.png" class="menu-icon" onclick="menutoggle()">
            </div>
            <div class="row">
                <div class="col-2">
                    <h1>Place Holder <br>Header</h1>
                    <p>Lorem Ipsum blah blah blah blah blah <br>blah blah blah</p>
                    <a href="" class="btn">Explore Now &#8594;</a>
                </div>
                <div class="col-2">
                    <img src="Assets/images/banner.png">
                </div>
            </div>
        </div>
    </div>
    <!--Testimonial-->
    <div class="testimonial">
        <div class="small-container">
            <div class="row">
            </div>
        </div>
    </div>
`;

let htmlBottom = `
    <!---Footer-->
    <div class="footer">
        <div class="container">
            <div class="row">
                <div class="footer-col-1">
                    <h3>Please Leave a Review!</h3>
                    <p>Please Tell me how to improve my site or products!</p>
                </div>
                <div class="footer-col-2">
                    <img src="Assets/images/logo.png">
                    <p>I need help through college please.</p>
                </div>
                <div class="footer-col-3">
                    <h3>Useful Links</h3>
                    <ul>
                        <li>Coupons/Discounts</li>
                        <li>Blog Post</li>
                        <li>Return Policy</li>
                        <li>Affiliate Link</li>
                    </ul>
                </div>
                <div class="footer-col-4">
                    <h3>Follow Me!</h3>
                    <ul>
                        <li>Facebook</li>
                        <li>Twitter</li>
                        <li>Instagram</li>
                        <li>Etsy</li>
                    </ul>
                </div>
            </div>
            <hr>
            <p class="copyright">Copyright 2024 - Samuel Jamieson</p>
        </div>
    </div>

    <!---Script for Toggle Menu-->
    <script src="Assets/js/main.js"></script>
</body>
<footer>
</footer>
</html>
`;

app.post('/submit-form', (req, res) => {
   const { name, message, color, email, phone, referrer, contactMethod } = req.body;

   let htmlContent = `
       <h2>Hello, ${name}.</h2>
       <p>You left us the following message: <strong>${message}</strong>.</p>
       <p>Your favorite color is: <strong>${color}</strong>.</p>
       <p>We will contact you via: <strong>${contactMethod}</strong>.</p>
       <p>We will use this email: <strong>${email}</strong> or phone: <strong>${phone}</strong>.</p>
       <p>You heard about us through: <strong>${referrer}</strong>.</p>
   `;

   res.send(`${htmlTop}${htmlContent}${htmlBottom}`);
});

app.listen(PORT, () => {
   console.log(`Server is running on http://localhost:${PORT}`);
});
