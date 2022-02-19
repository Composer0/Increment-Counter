const counters = document.querySelectorAll('.counter')

counters.forEach(counter => {
    counter.innerText = '0'
    const updateCounter = () => {
        const target = +counter.getAttribute('data-target')
        const c = +counter.innerText
        const increment = target / 200

        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`
            setTimeout(updateCounter, 1)
                // this allows you to update the counter over time rather than all at once if you simply ran the updateCounter()
        } else {
            counter.innerText = target
        }
    }
    updateCounter()
        // This text is necessary in order to use thise forEach function.
})