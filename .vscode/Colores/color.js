function generarColor() {
    const letras = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letras[Math.floor(Math.random() * 16)];
    }
    return color;
  } 


    document.getElementById('btn-generator').addEventListener('click', function() {
        const color = generarColor();
        document.body.style.backgroundColor = color;
      });
        document.getElementById('btn-generator').addEventListener('click', function() {


        const color = generarColor();
        document.getElementById('color-name').textContent = color;
      })
