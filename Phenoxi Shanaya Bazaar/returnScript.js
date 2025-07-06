
document.addEventListener('DOMContentLoaded', function () {
    // Get order number and product code from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const orderNumber = urlParams.get('orderNumber');
    const productCode = urlParams.get('productCode');

    // Set the values in the form and display
    document.getElementById('orderNumber').value = orderNumber;
    document.getElementById('productCode').value = productCode;
    document.getElementById('displayOrderNumber').textContent = orderNumber;
    document.getElementById('displayProductCode').textContent = productCode;

    // Apply bounce animation to order info box
    const orderInfoBox = document.querySelector('.order-info');
    setTimeout(() => {
        orderInfoBox.classList.add('bounce-element');
    }, 300);

    // File upload preview
    document.getElementById('productPhoto').addEventListener('change', function (e) {
        const file = e.target.files[0];
        if (file) {
            document.getElementById('file-name').textContent = file.name;

            const reader = new FileReader();
            reader.onload = function (event) {
                const preview = document.getElementById('image-preview');
                preview.src = event.target.result;
                const previewContainer = document.getElementById('preview-container');
                previewContainer.style.display = 'block';

                // Apply bounce animation to preview
                previewContainer.classList.add('bounce-element');
            }
            reader.readAsDataURL(file);
        }
    });

    // Form submission
    document.getElementById('returnForm').addEventListener('submit', function (e) {
        e.preventDefault();

        const submitBtn = document.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.textContent = 'Processing...';

        const formData = new FormData(this);

        fetch('process_return.php', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                if (data.success) {
                    // Apply bounce animation to success state
                    submitBtn.textContent = 'Success!';
                    submitBtn.classList.add('bounce-element');

                    // Redirect after delay
                    setTimeout(() => {
                        if (data.redirect) {
                            window.location.href = data.redirect;
                        } else {
                            window.location.href = 'need.php?return_success=1&orderNumber=' + encodeURIComponent(orderNumber);
                        }
                    }, 1500);
                } else {
                    submitBtn.disabled = false;
                    submitBtn.textContent = 'Submit Return Request';
                    alert('Error: ' + data.message);
                }
            })
            .catch(error => {
                console.error('Error:', error);
                submitBtn.disabled = false;
                submitBtn.textContent = 'Submit Return Request';
                alert('An error occurred while submitting the return request.');
            });
    });

    // Apply bounce animation to radio options when selected
    const radioOptions = document.querySelectorAll('.radio-option input');
    radioOptions.forEach(option => {
        option.addEventListener('change', function () {
            if (this.checked) {
                this.parentElement.classList.add('bounce-element');
                // Remove animation class after it completes
                setTimeout(() => {
                    this.parentElement.classList.remove('bounce-element');
                }, 1000);
            }
        });
    });
});

