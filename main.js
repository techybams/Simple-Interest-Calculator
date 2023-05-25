function calc()
{
        P = document.getElementById("principal").value;
        R = document.getElementById("time").value;
        T = document.getElementById("rate").value;

        total = P * R * T;
        si = total/ 100;
        document.getElementById("demo").innerHTML = "Simple Interest: #"+ si;
}

function start(){
    document.getElementById("ref").innerHTML = window.location.assign("index.html");
}
