// script.js

// Function to handle the document selection and redirect
document.getElementById('document-dropdown').addEventListener('change', function() {
    const selectedDocument = this.value; // Get the selected document value
    if (selectedDocument) {
        window.location.href = selectedDocument; // Redirect to the selected document
    }
});
