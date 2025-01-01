const dialog = document.getElementById('translationDialog');
function showTranslationDialog(){
    if(dialog){
        dialog.showModal();
    }
}
dialog.addEventListener('close', () => {
 const choice = dialog.returnValue;  // "yes" or "no"
    if (choice === 'yes') {
        //"Our online shop offers a variety of different products for every taste!"
    // Perform the translation or redirect to a translated page
    alert('Translating the page...');
    // Add your translation code here
    } else {
    // Close dialog without translating
    alert('Page will remain in the current language.');
    }
});
    window.addEventListener('load', () => {
    setTimeout(showTranslationDialog, 1000);  // Show dialog after 1 second
    });

