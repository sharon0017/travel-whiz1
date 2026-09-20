document.addEventListener('DOMContentLoaded', () => {
    const bookBtns = document.querySelectorAll('.btn-book');
    bookBtns.forEach(btn => {
        btn.addEventListener('click', () => { 
            window.location.href = 'payment.html'; 
        });
    });

    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            let isValid = true;
            const inputs = form.querySelectorAll('input[required], textarea[required]');
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    input.style.borderColor = 'red';
                    isValid = false;
                } else {
                    input.style.borderColor = '#eee';
                }
            });

            if (!isValid) {
                e.preventDefault();
            } else {
                if (form.id === 'signupForm' || form.id === 'loginForm' || form.id === 'payForm') {
                    alert("Action successful! Welcome to Travel Whiz.");
                    window.location.href = 'index.html';
                    e.preventDefault();
                }
            }
        });
    });
});

function copyId() {
    const id = document.getElementById('merchantId').innerText;
    navigator.clipboard.writeText(id);
    alert("Travel Whiz UPI ID Copied!");
}
