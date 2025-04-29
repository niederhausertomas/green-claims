let yesCount = 0;
let answerCount = 0;

// Agregar evento de clic al botón Start now
document.querySelector('.startNow').addEventListener('click', function() {
    const questionsForm = document.getElementById('questionsForm');
    questionsForm.scrollIntoView({ 
        behavior: 'smooth' 
    });
});

function updateYesCount() {
    yesCount = 0; 
    answerCount = 0;

    for (let i = 1; i <= 20; i++) {
        const answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer && answer.value === "yes" ) {
            yesCount++; 
        }
        if (answer){
            answerCount++;
        }
    }

    if (answerCount === 20) {
        document.querySelector('.containerChart').style.display = 'flex'; 
        document.getElementById('questionsForm').style.display = 'none'; 
    } else {
        document.querySelector('.containerChart').style.display = 'none'; 
        document.getElementById('questionsForm').style.display = 'block';
    }

    updateChart(yesCount);
}

for (let i = 1; i <= 20; i++) {
    const yesOption = document.querySelector(`input[name="q${i}"][value="yes"]`);
    const noOption = document.querySelector(`input[name="q${i}"][value="no"]`);
    const naOption = document.querySelector(`input[name="q${i}"][value="na"]`);

    if (yesOption) yesOption.addEventListener('change', updateYesCount);
    if (noOption) noOption.addEventListener('change', updateYesCount);
    if (naOption) naOption.addEventListener('change', updateYesCount);
}

function updateChart(yesCount) {
    const ctx = document.getElementById('scoreChart').getContext('2d');
    const chartData = {
        
        datasets: [{
            label: 'Cantidad de respuestas',
            data: [yesCount, 20 - yesCount],
            backgroundColor: ['#2c95e9', '#CACACA'],
        }]
    };
    
    const centerTextPlugin = {
        id: 'centerText',
        beforeDraw(chart) {
            const { width } = chart;
            const { height } = chart;
            const ctx = chart.ctx;
            ctx.restore();

            const fontSize = (height / 5).toFixed(2);
            ctx.font = `${fontSize}px Arial`;
            ctx.textBaseline = 'middle';
            ctx.fillStyle = '#000000';

            const text = chart.data.datasets[0].data[0].toString();
            const textX = Math.round((width - ctx.measureText(text).width) / 2);
            const textY = height / 2;

            ctx.fillText(text, textX, textY);
            ctx.save();
        }
    };

    if (window.myChart) {
        window.myChart.data = chartData; 
        window.myChart.update(); 
    } else {
        window.myChart = new Chart(ctx, {
            type: 'doughnut',
            data: chartData,
            options: {
                responsive: true,
                cutout: '80%',
                elements: {
                    arc: {
                        borderRadius:  [20, 0]
                    }
                }
            },
            plugins: [centerTextPlugin]
        });
    }
}
