





const ctx = document.getElementById('myChart');
const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [{
    label: 'chart-js',
    data: [2, 4, 6, 8, 10, 12],
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: ['red', "blue", "yellow","green", "purple" , "orange"],
  }],
};

const options = {
  animations: {
    tension: {
      duration: 2000,
      easing: 'linear',
      from: 1,
      to: 0,
      loop: true
    }
  },
  plugins: {
    subtitle: {
      display: true,
      text: 'Learn chart.js'
    }
  },
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

let myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

function chartType(type) {
  myChart.destroy();

  myChart = new Chart(ctx, {
    type: type,
    data: data,
    options: options
  });
}















const btns  = document.querySelectorAll('.type-buttons button');

btns.forEach(function(btn) {
  btn.addEventListener('click', function() {
    
    btns.forEach(function(btn) {
      btn.classList.remove("active");
    });
    
    
    btn.classList.add("active");
  });
})



