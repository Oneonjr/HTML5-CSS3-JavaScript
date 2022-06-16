function calcular()
{
    var num1 = document.getElementById("num1")
    var num2 = document.getElementById("num2")
    var res = document.getElementById("res")
    var oper = document.getElementsByName("operacao")
        if (oper[0].checked){
            var Tipo = 'Soma'
            
            res.innerHTML = `A ${Tipo} de ${num1.value} + ${num2.value} é ${Number(num1.value) + Number(num2.value)}`
        }else if (oper[1].checked){
            var Tipo = 'Subtração'
            
            res.innerHTML = `A ${Tipo} de ${num1.value} - ${num2.value} é ${Number(num1.value) - Number(num2.value)}`
        }else if (oper[2].checked){
            var Tipo = 'Multiplicação'
            
            res.innerHTML = `A ${Tipo} de ${num1.value} * ${num2.value} é ${Number(num1.value) * Number(num2.value)}`
        }else if (oper[3].checked){
            var Tipo = 'Divisão'
            
            res.innerHTML = `A ${Tipo} de ${num1.value} / ${num2.value} é ${Number(num1.value) / Number(num2.value)}`
        }else if (oper[03].checked){
            var Tipo = 'Divisão'
            
            res.innerHTML = `A ${Tipo} de ${num1.value} + ${num2.value} é ${Number(num1.value) + Number(num2.value)}`
        }
        
        
    


        
    
    }