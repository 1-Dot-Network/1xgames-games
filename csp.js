fetch("https://raw.githubusercontent.com/1-Dot-Network/backend-stuff/main/Domain.js")
    .then(response => response.text())
    .then(data => {
        var allowedDomains = data.split("\n");
        var csp = "Content-Security-Policy: frame-ancestors 'self' " + allowedDomains.join(" ");
        document.querySelector("meta[http-equiv='Content-Security-Policy']").content = csp;
    });
