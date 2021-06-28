function menuMicroondas (tempo, comida){
    switch (comida){
        //Macarão e brigadeiro
        case 'macarrao':
        case 'brigadeiro':
            if(tempo<8){
                console.log('Tempo Insuficiente');
            }
            else if(tempo>=24){
                console.log ('Kabum');
            }
            else if (tempo>=16){
                console.log ('A comida queimou')
            }
            else {
                console.log ('Comida Pronta')
            }
            break;
        //Pipoca    
        case 'pipoca':
            if(tempo<10){
                console.log('Tempo Insuficiente');
            }
            else if(tempo>=30){
                console.log ('Kabum');
            }
            else if (tempo>=20){
                console.log ('A comida queimou')
            }
            else {
                console.log ('Comida Pronta')
            }
            break;
                    
        case 'pipoca':
            if(tempo<10){
                console.log('Tempo Insuficiente');
            }
            else if(tempo>=30){
                console.log ('Kabum');
            }
            else if (tempo>=20){
                console.log ('A comida queimou')
            }
            else {
                console.log ('Comida Pronta')
            }
            break;
        
        //Feijão
        case 'feijao':
            if(tempo<12){
                 console.log('Tempo Insuficiente');
            }
            else if(tempo>=36){
                console.log ('Kabum');
                }
            else if (tempo>=24){
                console.log ('A comida queimou')
            }
            else {
                console.log ('Comida Pronta')
            }
            break;

        //Carne    
        case 'Carne':
            if(tempo<15){
                console.log('Tempo Insuficiente');
            }
            else if(tempo>=45){
                console.log ('Kabum');
            }
            else if (tempo>=30){
                console.log ('A comida queimou')
            }
            else {
                console.log ('Comida Pronta')
            }
            break;
        default:
            console.log('Prato Inexistente');
            break;
            
        }
}
menuMicroondas (8, 'brigadeiro')
menuMicroondas (8, 'macarrao')
menuMicroondas (7, 'brigadeiro')
menuMicroondas (16, 'macarrao')
menuMicroondas (25, 'brigadeiro')
menuMicroondas (11, 'pipoca')
menuMicroondas (25, 'feijao')
menuMicroondas (16, 'carne')
menuMicroondas (8, 'sopa')
