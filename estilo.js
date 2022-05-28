var numeros = [0, 1000, 100000, 30000, 10000];

var mayor = 0;

for (var i=0; i<=100000;i++)
    if (numeros[i]>mayor){
    mayor = numeros [i];
}

document.write ('El número mayor es:'+ mayor)