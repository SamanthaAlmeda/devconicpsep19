document.getElementById("userInfoForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `<h2>Submitted Information:</h2>
                           <p>Name: ${name}</p>
                           <p>Email: ${email}</p>`;

    // Clear the form
    document.getElementById("userInfoForm").reset();
});
