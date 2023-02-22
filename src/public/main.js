const boton1 = document.getElementById("b1");
const form2 = document.getElementById("form-update");
const tabla = document.getElementById("tabla")
document.body.onload = () =>{
    getData();
    async function getData(){
        const response = await fetch("/ping");
        const data = await response.json();
        length = data.length;
        let temp = "";
        let j = 0;
        if(data){
            for(let i = 0; i < length; i++){
                j = j+1;
                temp += "<tr>";
                temp += "<th>"+ parseInt(i + 1) +"</th>";
                temp += "<td>"+ data[i].apellidos +"</td>";
                temp += "<td>"+ data[i].nombres +"</td>";
                temp += "<td>"+ data[i].sexo +"</td>";
                temp += "<td>"+ `<a href="/delete/${data[i].id}"><button type="button" class="btn btn-danger">Borrar</button> </a>

                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal2" id="b2">
                Editar</button>
                
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                Ingresar notas</button>  ` +"</td>";
                temp += "</tr>";
            }

            const botonEditar = document.getElementById("b2")
            b2.addEventListener('click', (e)=>{
                form2.action = `/update/${j}`;
            })
        }
        document.getElementById("tabla").innerHTML = temp;
    }
}

boton1.addEventListener('click', (e)=>{
    getData();
    async function getData(){
        const response = await fetch("/ping");
        const data = await response.json();
        length = data.length;
        let temp = "";
        if(data){
            for(let i = 0; i < length; i++){
                temp += "<tr>";
                temp += "<th>"+ parseInt(i + 1) +"</th>";
                temp += "<td>"+ data[i].apellidos +"</td>";
                temp += "<td>"+ data[i].nombres +"</td>";
                temp += "<td>"+ data[i].sexo +"</td>";
                temp += "<td>"+ "aa" +"</td>";
                temp += "</tr>";
            }
        }
        document.getElementById("tabla").innerHTML = temp;
    }
});

