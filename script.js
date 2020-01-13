//---------------------------------------Algoritmo pillado en internet
let diasEnUnMes = (mes) => {

    let año = new Date().getFullYear();

    return new Promise((resolve, reject) => {

        if (mes === "") {
            reject(`No ingreso un valor válido`);
        } else {
            if (mes < 1 || mes > 12) {
                reject(`El numero ingresado "${mes}" esta fuera de rango`);
            } else {

                let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
                let cantDias = new Date(año, mes, 0).getDate()
                resolve(`${meses[mes - 1]} tiene ${cantDias} días`);

            }
        }

    });

};
let getNumero = () => {

    let num = document.getElementById("mes").value;

    diasEnUnMes(num)
        .then(mes => document.getElementById("resp").innerHTML = mes)
        .catch(error => document.getElementById("resp").innerHTML = error);

};