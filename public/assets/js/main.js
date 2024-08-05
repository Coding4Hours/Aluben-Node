document.addEventListener("DOMContentLoaded", function (event) {
    const icon = document.getElementById("favicon");
    const name = document.getElementById("title");
    var selectedValue = localStorage.getItem("selectedOption");
    if (selectedValue) {
        switch (selectedValue) {
            case "Google":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/google.png");
                name.textContent = "Google";
                localStorage.setItem("name", "Google");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/google.png");
            case "Drive":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/drive.png");
                name.textContent = "My Drive - Google Drive";
                localStorage.setItem("name", "My Drive - Google Drive");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/drive.png");
            case "Classroom":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/classroom.png");
                name.textContent = "Classes";
                localStorage.setItem("name", "Classes");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/classroom.png");
            case "Schoology":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/schoology.png");
                name.textContent = "Home | Schoology";
                localStorage.setItem("name", "Home | Schoology");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/schoology.png");
            case "Gmail":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/gmail.png");
                name.textContent = "Gmail";
                localStorage.setItem("name", "Gmail");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/gmail.png");
            case "Clever":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/clever.png");
                name.textContent = "Clever | Portal";
                localStorage.setItem("name", "Clever | Portal");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/clever.png");
            case "Khan":
                icon.setAttribute("href", "https://raw.githack.com/Aluben-service/Aluben_icons/main/khan.png");
                name.textContent = "Dashboard | Khan Academy";
                localStorage.setItem("name", "Dashboard | Khan Academy");
                localStorage.setItem("icon", "https://raw.githack.com/Aluben-service/Aluben_icons/main/khan.png");
                break;
            default:
                break;
        }
    }
    switch (theme) {
        case "N/A":
            break;
        case null:
            break;
        case "Dark":
            document.body.style.backgroundColor = "#000000";
            document.body.style.color = "#ffffff";
            document.body.style.backgroundImage = "none";
            break;
        case "Light":
            document.body.style.color = "#000000";
            document.body.style.backgroundColor = "#ffffff";
            document.body.style.backgroundImage = "none";
            break;
        case "Twilight":
            document.body.style.color = "#c658ca";
            document.body.style.backgroundColor = "#26233a";
            document.body.style.backgroundImage = "none";
            break;
        case "Ocean":
            document.body.style.color = "#00ffff";
            document.body.style.backgroundColor = "#00008B";
            document.body.style.backgroundImage = "none";
            break;
        case "McDonald's":
            document.body.style.color = "#e1ff00";
            document.body.style.backgroundColor = "#ff2600";
            document.body.style.backgroundImage = "none";
            break;
        case "UnderGround":
            document.body.style.color = "#b0afb1";
            document.body.style.backgroundColor = "#673b00";
            document.body.style.backgroundImage = "none";
            break;
        case "SunnyDay":
            document.body.style.color = "#f0ff85";
            document.body.style.backgroundColor = "#93e8ff";
            document.body.style.backgroundImage = "none";
            break;
        case "Grassland":
            document.body.style.color = "#f45faf";
            document.body.style.backgroundImage = "url(assets/images/gashopper.jpg)";
            $("#grass").show();
            break;
        case "StormyDay":
            document.body.style.color = "#b0afb1";
            document.body.style.backgroundImage = "url(assets/images/StormyDay.gif)";
            break;
        case "custom":
            var theme = JSON.parse(localStorage.getItem("customTheme"));
            if (theme.style == 1) {
                document.body.style.backgroundColor = theme.backcolor;
                document.body.style.color = theme.textcolor;
                break;
            } else if (theme.style == 2) {
                document.body.style.backgroundImage = `url(${theme.image})`;
            }
    }
});
