document.addEventListener('DOMContentLoaded', function() {
    var noButton = document.getElementById('noButton');
    var yesButton = document.getElementById('yesButton');
    var finalPopup = document.getElementById('finalPopup');

    noButton.addEventListener('mouseover', function() {
        // Move the 'No' button randomly within the popup container
        var popup = document.querySelector('.popup');
        var popupRect = popup.getBoundingClientRect();
        var buttonWidth = noButton.offsetWidth;
        var buttonHeight = noButton.offsetHeight;

        var maxX = popupRect.width - buttonWidth;
        var maxY = popupRect.height - buttonHeight;

        var randomX = Math.floor(Math.random() * maxX);
        var randomY = Math.floor(Math.random() * maxY);

        noButton.style.position = 'absolute';
        noButton.style.left = randomX + 'px';
        noButton.style.top = randomY + 'px';
    });

    yesButton.addEventListener('click', function() {
        // Hide the first popup and show the final popup
        document.getElementById('popup').style.display = 'none';
        finalPopup.style.display = 'block';
    });
});
