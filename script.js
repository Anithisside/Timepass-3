document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yesButton');
    const noButton = document.getElementById('noButton');
    const popup = document.getElementById('popup');
    const finalPopup = document.getElementById('finalPopup');

    // Move 'No' button on hover
    noButton.addEventListener('mouseenter', () => {
        const popupWidth = popup.offsetWidth;
        const popupHeight = popup.offsetHeight;
        const newLeft = Math.random() * (popupWidth - noButton.offsetWidth);
        const newTop = Math.random() * (popupHeight - noButton.offsetHeight);
        noButton.style.position = 'absolute';
        noButton.style.left = `${newLeft}px`;
        noButton.style.top = `${newTop}px`;
    });

    // Show final message when Yes is clicked
    yesButton.addEventListener('click', () => {
        popup.style.display = 'none';
        finalPopup.style.display = 'flex';
    });
});
