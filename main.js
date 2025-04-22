document.addEventListener('DOMContentLoaded', () => {
    const result = document.getElementById('result');

    document.getElementById('kids').addEventListener('click', () => {
        const kids = Math.floor(Math.random() * 21);
        result.textContent = `You will have ${kids} kids.`;
    });

    document.getElementById('death').addEventListener('click', () => {
        const deathAge = Math.floor(Math.random() * (120 - 60 + 1)) + 60;
        result.textContent = `You will die at ${deathAge} years old.`;
    });

    document.getElementById('married').addEventListener('click', () => {
        const marriedAge = Math.floor(Math.random() * (95-18 + 1)) + 18;
        result.textContent = `You will get married when you are ${marriedAge} years old.`;
    });

    document.getElementById('dinner').addEventListener('click', () => {
        const dinnerOptipwons = ['Lobster', 'Veal', 'Steak', 'Brisket'];
        const dinner = dinnerOptions[Math.floor(Math.random() * dinnerOptions.length)];
        result.textContent = `You will have ${dinner} for dinner next Wednesday.`;
    });

    document.getElementById('car').addEventListener('click', () => {
        const carOptions = ['Hoopty'];
        const car = carOptions[Math.floor(Math.random() * carOptions.length)];
        result.textContent = `You will drive a ${car}.`;
    });
});