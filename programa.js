function numeroMenor2() {
  let numero1 = parseFloat(document.getElementById("numero1").value);
  let numero2 = parseFloat(document.getElementById("numero1").value);
  if (numero1 < numero2) {
    document.getElementById(
      "numMenor"
    ).innerHTML = `El número menor es: ${numero1}`;
  } else {
    document.getElementById(
        "numMenor"
      ).innerHTML = `El número menor es: ${numero2}`;
  }
}

function numeroMayor3() {
  let numero1 = parseFloat(document.getElementById("numeroO").value);
  let numero2 = parseFloat(document.getElementById("numeroT").value);
  let numero3 = parseFloat(document.getElementById("numeroTh").value);
  if (numero1 < numero2) {
    if (numero2 < numero3) {
        document.getElementById(
            "numMayor"
          ).innerHTML = `El número mayor es: ${numero3}`;
    } else {
        document.getElementById(
            "numMayor"
          ).innerHTML = `El número mayor es: ${numero2}`;
    }
  } else {
    if (numero1 < numero3) {
        document.getElementById(
            "numMayor"
          ).innerHTML = `El número mayor es: ${numero3}`;
    } else {
        document.getElementById(
            "numMayor"
          ).innerHTML = `El número mayor es: ${numero1}`;
    }
  }
}

numeroMenor2();
numeroMayor3();
