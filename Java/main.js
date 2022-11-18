const chart = document.querySelector("#chart").getContext('2d');

// criando uma nova intancia para o chart 

new Chart(chart, {
    type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],

        datasets: [
            {
                label: 'Nubank',
                data: [29374, 33537, 49631, 59095, 57828, 36684, 33572, 39974, 48847, 48116, 61004],
                borderColor: 'red',
                borderWidth: 2
            },
            {
                label: 'PicPay',
                data: [54198, 19841, 4511, 88745, 65485, 8541, 75267, 4252, 87987, 4525, 524],
                borderColor: 'blue',
                borderWidth: 2
            }
        ]
    },
    options: {
        responsive: true
    }
})

const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const sidebar = document.querySelector('aside');

menuBtn.addEventListener('click', () => {
    sidebar.style.display = 'block';
})

closeBtn.addEventListener('click', () => {
    sidebar.style.display = 'none';
})



const themeBtn = document.querySelector('.theme-btn');

themeBtn.addEventListener('click', () => {
document.body.classList.toggle('dark-theme');

themeBtn.querySelector('span:first-child').classList.toggle('active');
})