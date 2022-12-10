function chet()
{
    var K = document.getElementById("K").value;
    var N = document.getElementById("N").value;
    var Res = document.getElementById("Res");
    var massR = [];
    console.log(K);
    var reg = /-?[.\d]+/g;
    var Regexp = K.match(reg);
    console.log(Regexp);
    
    
    for(var i = 0; i < Regexp.length;i++)
    {
        Result = Regexp[i] % N;
        massR[i] = Result;
        
       
    }
    Res.innerHTML = "Результат:" + massR;
}
function chet2()
{
    var K = document.getElementById("K").value;
    var N = document.getElementById("N").value;
    var Res = document.getElementById("Res");
    var massR = [];
    var A = 0.618033;
    console.log(K);
    var reg = /-?[.\d]+/g;
    var Regexp = K.match(reg);
    console.log(Regexp);
    
    
    for(var i = 0; i < Regexp.length;i++)
    {
        
        var Im = (Regexp[i] * A);
        Im = (Im.toString().split('.')[1]);
        Im = '0.'+ Im;
        console.log(Im);
        Result = (N * Im);
        console.log(Result);
        Result = Math.trunc(Result);
        massR[i] = Result;
    }
    Res.innerHTML = "Результат:" + massR;
}
