document.addEventListener("DOMContentLoaded", function () {
    const longUrlInput = document.getElementById("long-url");
    const shortenButton = document.getElementById("shorten-button");
    const shortUrlDisplay = document.getElementById("short-url");

    shortenButton.addEventListener("click", function () {
        const longUrl = longUrlInput.value;
        if (isValidUrl(longUrl)) {
            
            const shortUrl = "http://short.url/abc123";
            shortUrlDisplay.textContent = `Shortened URL: ${shortUrl}`;
            longUrlInput.value = "";
        } else {
            alert("Invalid URL. Please enter a valid URL.");
        }
    });

    function isValidUrl(url) {
        
        const urlPattern = /^https?:\/\/.+/i;
        return urlPattern.test(url);
    }
});
