const boton1 = document.getElementById("b1"); 
const tabla = document.getElementById("tabla")
document.body.onload = () =>{
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