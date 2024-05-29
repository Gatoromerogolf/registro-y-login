// selecciona el formulario

document.getElementById('form-register').addEventListener("submit", async (e) => {
    e.preventDefault();
    console.log(e.target.children.password.value)
    const res = await fetch("http://localhost:3000/api/register",{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json'},
        body: JSON.stringify({
            user: e.target.children.user.value,
            email: e.target.children.email.value,
            email: e.target.children.password.value
        })
    })
})