document.addEventListener('DOMContentLoaded', () => {
    document.body.style.visibility = 'visible';
    document.body.style.opacity = 1;
    const darkModeToggle = document.querySelector("#darkmode-toggle")
    const body = document.querySelector('body')

    if(localStorage.getItem('dark')) {
        const checked = localStorage.getItem('dark')
        if (checked === '1') {
            darkModeToggle.checked = true
            body.classList.add('dark')
        } else {
            body.classList.remove('dark')
        }
    }
    darkModeToggle.addEventListener('click', (e) => {
        body.style.transition = '.3s'
        const resume = document.querySelector('.resume');
        resume.style.transition = '.3s'
        const checked = e.target.checked
        if (checked) {
            body.classList.add('dark')
            localStorage.setItem('dark', 1)
        } else {
            body.classList.remove('dark')
            localStorage.setItem('dark', 0)
        }
    })

})

