var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre'],
        datasets: [{
            label: 'Consommation électrique',
            data: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
            backgroundColor: 'rgba(26, 188, 156, 0.2)',
            borderColor: 'rgba(26, 188, 156, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
