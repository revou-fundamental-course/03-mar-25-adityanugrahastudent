<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Kanai Training School</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

     <!-- Navigation Bar -->
    <header>
        <div class="logo">
            <img src="./Revou-alasan.original.png" alt="Company Logo">
        </div>
        <button class="menu-toggle">&#9776;</button> <!-- Mobile Menu Button -->
        <nav>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#vision-mission">Vision & Mission</a></li>
                <li><a href="#team">Our Team</a></li>
                <li><a href="#achievements">Achievements</a></li>
                <li><a href="#contact">Contact Us</a></li>
            </ul>
        </nav>
    </header>

    <!-- About Your School Section -->
    <section id="about">
        <h2>About Our School</h2>
        <p>Welcome to <strong>Kanai Training School</strong>, a place where learning meets excellence. Our mission is to provide a high-quality education that nurtures creativity, critical thinking, and leadership skills.</p>
    </section>

    <!-- Vision & Mission Section -->
    <section id="vision-mission">
        <h2>Vision & Mission</h2>
        <h3>Our Vision</h3>
        <p>To be a leading institution that fosters academic excellence, innovation, and character development in students.</p>

        <h3>Our Mission</h3>
        <ul>
            <li>Provide a high-quality, holistic education.</li>
            <li>Empower students with critical thinking and problem-solving skills.</li>
            <li>Promote ethical values, leadership, and social responsibility.</li>
            <li>Encourage creativity and lifelong learning.</li>
        </ul>
    </section>


    <!-- Welcome Section -->
    <section class="welcome">
        <h2>Hi Harfi, Welcome To Website</h2>
        <p>This website contains button pointers</p>
        <img class="image-placeholder" src="./banner.png" alt="Welcome Image">
    </section>

    <!-- Our Facilitation Section -->
    <section class="facilitation">
        <h2>Our Facilitation</h2>
        <div class="facilities">
            <div class="facility">
                <img src="./cafeteria.png" class="icon" alt="Canteen">
                <p>Canteen</p>
            </div>
            <div class="facility">
                <img src="./basketball.png" class="icon" alt="Sport Field">
                <p>Sport Field</p>
            </div>
            <div class="facility">
                <img src="./library.png" class="icon" alt="Classroom">
                <p>Classroom</p>
            </div>
        </div>
    </section>
    

    <!-- Profile Us Section -->
    <section id="profile" class="profile">
        <h2>Profile Us</h2>
        <div class="profile-container">
            <img src="./WhatsApp Image 2025-03-13 at 23.52.36_ab91f947.jpg" alt="Profile Image" class="profile-img">
            <p>We are a team of dedicated professionals committed to providing quality education and facilities for students.</p>
        </div>
    </section>

    <!-- Message Us Section -->
    <section class="message-us">
        <h2>Message Us</h2>
        <form id="contactForm">
            <label for="name">Name:</label>
            <input type="text" id="name" required>
            
            <label for="email">Email:</label>
            <input type="email" id="email" required>
            
            <label for="category">Category:</label>
            <select id="category">
                <option value="question">Question</option>
                <option value="suggestion">Suggestion</option>
                <option value="other">Other</option>
            </select>
            
            <label for="message">Message:</label>
            <textarea id="message" required></textarea>
            
            <button type="submit">Submit</button>
        </form>

        <!-- Info Box -->
        <div class="info-box">
            <p><strong>Current Time:</strong> <span id="time">--:--:--</span></p>
            <p><strong>Last Message:</strong> <span id="lastMessage">No message yet</span></p>
        </div>
    </section>

    <footer>
        <p>Created by Aditya Nugraha</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
