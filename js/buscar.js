var botaoBuscar = document.querySelector("#buscar");

botaoBuscar.addEventListener("click", function() {
    var xhr = new XMLHttpRequest();

    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacienteslll");

    xhr.addEventListener("load", function() {
        var erroAjax = document.querySelector("#erroBuscar");
        if(xhr.status == 200) {
            erroAjax.classList.add("hide")
            var resposta = xhr.responseText;
            var pacientes = JSON.parse(resposta);
            pacientes.forEach(function(paciente) {
                adicionaPaciente(paciente);
            })
        } else {
            console.log(xhr.status);
            console.log(xhr.responseText);
            erroAjax.classList.remove("hide")
        }
    })

    xhr.send();
})