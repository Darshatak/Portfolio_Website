<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Gather form data
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $query = $_POST["query"];

    // Create a database connection
    $servername = "127.0.0.1";
    $username = "root";
    $password = "";
    $dbname = "darsh";

    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    } else {

        // Use prepared statement to insert data
        $stmt = $conn->prepare("INSERT INTO contact_submissions (firstname, lastname, email, query) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssss", $firstname, $lastname, $email, $query);

        if ($stmt->execute()) {
            echo "Submission successful!";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement and connection
        $stmt->close();
        $conn->close();
    }
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta content="2">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Darshatak Vyas</title>


    <link rel="stylesheet" href="css/index.css">
    <link rel="shortcut icon" href="Asset/favicon.png">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
    <div class="background"></div>
    <nav class="navbar">
        <ul class="nav-list">
            <div class="logo"><img src="Asset/portfolio_943026.png" alt="logo"></div>
            <li><a href="index.html"> Home</a></li>
            <li><a href="#header"> Myself</a></li>
            <li><a href="#project"> Project</a></li>
            <li><a href="#social"> Contact</a></li>
        </ul>
        <!-- <div class="rightNav">
                <input type="text" name="search" id="search">
                <button class="btn btn-sm">
                    Search
                </button>
            </div> -->
    </nav>

    <section class="firstSection">
        <div class="firstHalf">
            <div class="top">
                <h1>NAMASTE
                    <i style="color: salmon;" class=" fa-solid fa-hands-praying fa-bounce">
                    </i>
                </h1>
            </div>
            <div class="bottom">
                <div class="social">
                    <ul>
                        <div class="social-icon">
                            <a href="https://github.com/Darshatak" target="_blank" style="text-decoration: none;">
                                <li>
                                    <i class="fab fa-github fa-2x" style="color: rgb(81, 80, 81);"></i>
                                    <p>Github</p>
                                </li>
                            </a>
                        </div>
                        <div class="social-icon">
                            <a href="https://www.instagram.com/darshatak/" target="_blank" style="text-decoration: none;">
                                <li>
                                    <i class="fab fa-instagram fa-2x" style="color: rgb(204, 41, 163);"></i>
                                    <p>Instagram</p>
                                </li>
                            </a>

                        </div>
                        <div class="social-icon">
                            <a href="https://www.facebook.com/darshatakvyas" target="_blank" style="text-decoration: none;">
                                <li>
                                    <i class="fab fa-facebook fa-2x" style="color: rgb(7, 84, 136);"></i>
                                    <p>Facebook</p>
                                </li>
                            </a>
                        </div>
                    </ul>
                </div>
                <div class="button">
                    <a href="#header">
                        <button class="btn">Know About ME</button></a>
                    <a href="https://drive.google.com/file/d/1llMnNEVPC_ZhV0UMZvJMExUpey03aohq/view?usp=sharing" target="_blank"><button class="btn" id="resume">Get Resume</button></a>
                </div>
            </div>

        </div>


        <div class="secondHalf img">
            <img src="Asset/darsh.png" alt="tent image">
        </div>



    </section>

    <section class="secRight" id="header">
        <div class="paras">
            <p class=" text-big">About <span style="color: blueviolet;">Me</span></p><br><br>
            <p class="text-small">As a highly skilled Android Developer with one year of hands-on experience in
                Android Studio, I
                possess extensive expertise in utilizing cutting-edge technologies such as MongoDB, PhpMyAdmin,
                Java, Python, and
                Web Development.<br><br> My capabilities in the areas of SDLC and software testing are top-notch,
                and I have a
                proven track record of delivering exceptional results in college. <br><br>With a passion for
                exploring emerging
                technologies and gadgets, I am a quick learner who possesses excellent attention to detail.<br><br>
                My exceptional
                computer skills enable me to work autonomously or as part of a team to achieve organizational goals.
            </p>


        </div>


        <div class="thumbnail">
            <img src="Asset/teamwork.png" alt="about Us">
        </div>
    </section>

    <section class="project" id="project">

        <section class="ag-courses_box">
            <div class="ag-courses_item">
                <a href="https://github.com/Darshatak/Chrome-Home-Page" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Chrome Home Page<br>(Html,Css,JS)
                    </div>

                    <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.01.2023
                        </span>
                    </div>
                </a>
            </div>
            <div class="ag-courses_item">
                <a href="https://github.com/Darshatak/Portfolio" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Portfolio<br>(Html,Css,JS)
                    </div>

                    <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.01.2023
                        </span>
                    </div>
                </a>
            </div>
            <div class="ag-courses_item">
                <a href="https://github.com/Darshatak/Rent-Tronics" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Rent-Electronics<br>(Mern Basic)
                    </div>

                    <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.01.2023
                        </span>
                    </div>
                </a>
            </div>


            <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Util-Box<br>(Android-JAVA)
                    </div>

                    <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                    </div>
                </a>
            </div>

            <div class="ag-courses_item">
                <a href="#" class="ag-courses-item_link">
                    <div class="ag-courses-item_bg"></div>

                    <div class="ag-courses-item_title">
                        Secret Sms Service<br>(Android-JAVA)
                    </div>

                    <div class="ag-courses-item_date-box">
                        Start:
                        <span class="ag-courses-item_date">
                            04.11.2022
                        </span>
                    </div>
                </a>
            </div>



        </section>
        <div>
            <button class="btn" id="backButton">Prev</button>
            <button class="btn" id="nextButton">Next</button>
        </div>
    </section>


    <div class="contact" id="social">
        <div class="paras">
            <h1 class="text-big">Contact <span style="color: blueviolet;">Us</span> </h1><br>
            <h3 class="text-small">Feel Free to <span style="color: blueviolet;">connect</span> with me</h3>
            <div class="form">
                <form action="" method="POST ">

                    <input type="text" id="firstname" name="firstname" placeholder="First Name " required /><br>
                    <input type="text" id="lastname" name="lastname" placeholder="Last Name " required><br>
                    <input type="email" id="email" name="email" placeholder="Email ID " required><br>
                    <textarea id="query" name="query" placeholder="Write About Suggestions Or Issue " style="height:200px" required></textarea><br>
                    <input type="submit" class="btn" value="Submit" style="border-radius: 40px; ">
                </form>

            </div>
        </div>
    </div>

    <footer>
        <h3>Designed and Developed by <span style="color: blueviolet;">Darshatak</span> Vyas</h3>
    </footer>

</body>
<script src="js/index.js"></script>

</html>