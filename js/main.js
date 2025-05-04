let yesCount = 0;
let answerCount = 0;
let chartColor = "#2c95e9";
let formSubmitted = false;



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

    console.log("anseeeeeee ", answerCount)
    console.log("TTTTTTTTTT ", formSubmitted)

    if ((answerCount == 20) &&  (formSubmitted == true)) {
        document.querySelector('.containerChart').style.display = 'flex'; 
        document.querySelector('.chartTitleSection').style.display = 'flex';
        document.querySelector('.footer').style.backgroundColor = '#CACACA';
        document.querySelector('.footer').style.height = '300px';

        document.querySelector('.footerFormSection').style.display = 'none';
        document.querySelector('.footerFormSection2').style.display = 'block';


        document.getElementById('section1').style.display = 'none'; 
    } else {
        document.querySelector('.containerChart').style.display = 'none'; 
        document.querySelector('.chartTitleSection').style.display = 'none'; 
        document.querySelector('.footer').style.backgroundColor = '#1E2032';
        document.querySelector('.footerFormSection').style.display = 'block';
        document.querySelector('.footerFormSection2').style.display = 'none';

        
        
        document.getElementById('section1').style.display = 'block'; 
         

    }

    updateChart(yesCount);
}

function setFormSubmittedTrue() {
    formSubmitted = true;
    console.log("Formulario enviado correctamente.", formSubmitted);
    updateYesCount()
  }

  window.setFormSubmittedTrue = setFormSubmittedTrue;

for (let i = 1; i <= 20; i++) {
    const yesOption = document.querySelector(`input[name="q${i}"][value="yes"]`);
    const noOption = document.querySelector(`input[name="q${i}"][value="no"]`);
    const naOption = document.querySelector(`input[name="q${i}"][value="na"]`);

    if (yesOption) yesOption.addEventListener('change', updateYesCount);
    if (noOption) noOption.addEventListener('change', updateYesCount);
    if (naOption) naOption.addEventListener('change', updateYesCount);
}

function updateChart(yesCount) {

    if(yesCount > 0) {
        chartColor = "#84434C" 
        document.getElementById('redPractice').style.display = 'block'; 
        document.getElementById('yellowPractice').style.display = 'none'; 
        document.getElementById('greenPractice').style.display = 'none'; 

    }
    
    if(yesCount > 9) {
        chartColor = "#D1A94C"
        document.getElementById('redPractice').style.display = 'none'; 
        document.getElementById('yellowPractice').style.display = 'block'; 
        document.getElementById('greenPractice').style.display = 'none'; 
    }
    
    if(yesCount > 14) {
        chartColor = "#8A978F"
        document.getElementById('redPractice').style.display = 'none'; 
        document.getElementById('yellowPractice').style.display = 'none'; 
        document.getElementById('greenPractice').style.display = 'block'; 
    }

    const ctx = document.getElementById('scoreChart').getContext('2d');
    const chartData = {
        
        datasets: [{
            label: 'Cantidad de respuestas',
            data: [yesCount, 20 - yesCount],
            backgroundColor: [chartColor, '#CACACA'],
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
                        borderRadius:  [20, 20]
                    }
                }
            },
            plugins: [centerTextPlugin]
        });
    }
}

