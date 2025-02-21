@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;600&family=Playfair+Display:wght@500&display=swap');

body {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #0d0d0d;
    color: #fff;
}

header {
    background-color: #1a1a1a;
    padding: 20px 0;
    text-align: center;
    box-shadow: 0px 4px 10px rgba(255, 105, 180, 0.2);
    border-bottom: 2px solid rgba(255, 105, 180, 0.4);
}

nav {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 40px;
    padding-top: 20px;
}

.nav-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 30px;
}

.nav-links li {
    display: inline;
}

.nav-links a {
    color: #ffc0cb;
    text-decoration: none;
    font-size: 16px;
    font-weight: bold;
    transition: color 0.3s ease, transform 0.2s ease;
}

html{
    scroll-behavior: smooth;
}
.nav-links a:hover {
    color: #fff;
    transform: scale(1.1);
}


.social-icons {
    margin-top: 10px;
}

.social-icons a {
    color: #ffc0cb;
    margin: 0 10px;
    font-size: 18px;
    transition: color 0.3s ease, transform 0.2s ease;
}

.social-icons a:hover {
    color: #ff69b4;
    transform: scale(1.2);
}

.hero {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 80px;
    flex-wrap: wrap;
    gap:  20px;
}

.text-content {
    max-width: 450px;
    text-align: left;
}

h1 {
    font-size: 32px;
    font-weight: 600;
    font-family: 'Playfair Display', serif;
    color: #b47a97;
}

.intro-text {
    font-size: 16px;
    color: #ddd;
    margin-bottom: 20px;
}

.cta-button {
    background: linear-gradient(45deg, #ff69b4, #ff1493);
    color: #fff;
    padding: 12px 30px;
    border: none;
    cursor: pointer;
    font-size: 16px;
    font-weight: 600;
    border-radius: 25px;
    box-shadow: 0px 0px 15px rgba(250, 218, 235, 0.8);
    transition: background 0.3s ease, box-shadow 0.3s ease, transform 0.2s ease;
}

.cta-button:hover {
    background: linear-gradient(45deg, #ff1493, #ff69b4);
    box-shadow: 0px 0px 25px rgba(255, 20, 147, 1);
    transform: scale(1.05);
}

.profile-pic img {
    width: 275px;
    height: 285px;
    border-radius: 50%;
    margin-left: 60px;
    border: 5px solid rgba(250, 209, 230, 0.6);
    box-shadow: 0px 0px 20px rgba(255, 105, 180, 0.5);
}
footer {
    text-align: center;
    padding: 20px;
    background-color: rgba(0, 0, 0, 0.8);
    color: #fff;
    font-size: 14px;
    margin-top: 50px;
}

.social-links {
    margin-bottom: 10px;
}

.social-links a {
    color: #ff66b2; 
    font-size: 20px;
    margin: 0 10px;
    transition: 0.3s ease-in-out;
}

.social-links a:hover {
    color: #ff99cc; 
}
.icon {
    display: none;
    font-size: 24px;
    cursor: pointer;
}
@media (max-width: 768px) {
    .nav-links {
        flex-direction: column;
        display: none; 
        background: #1a1a1a; 
        position: absolute;
        top: 70px;
        left: 0;
        width: 100%;
        padding: 10px 0;
        border-top: 2px solid rgba(255, 105, 180, 0.4); 
        box-shadow: 0px 4px 10px rgba(255, 105, 180, 0.2);
    }

    .nav-links.responsive {
        display: flex;
    }

    .nav-links li {
        text-align: center;
        padding: 15px 0;
        border-bottom: 1px solid rgba(255, 105, 180, 0.2);
    }

    .nav-links a {
        color: #ffc0cb;
        font-size: 18px;
        font-weight: bold;
        text-decoration: none;
        display: block;
        transition: color 0.3s ease-in-out;
    }

    .nav-links a:hover {
        color: #fff;
        background: rgba(255, 105, 180, 0.1);
        padding: 10px;
    }

    .icon {
        display: block;
        font-size: 28px;
        color: #ffc0cb;
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
    }
    .hero {
        flex-direction: column; 
        text-align: center; 
        padding: 40px; 

    .profile-pic img {
        margin-left: 0; 
        width: 200px; 
        height: auto;
    }
}
}
