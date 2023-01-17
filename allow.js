fetch("https://raw.githubusercontent.com/1-Dot-Network/backend-stuff/main/Domain.js")
    .then(response => response.text())
    .then(data => {
        var allowedDomains = data.split("\n");
        var currentDomain = document.referrer;
        if (allowedDomains.indexOf(currentDomain) !== -1) {
            // Allow embedding
        } else {
            // Prevent embedding
        }
    });
