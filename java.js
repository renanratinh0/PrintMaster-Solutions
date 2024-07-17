    var result;

    var contarValorP = 0;
    var PEB =0;
    var PPEB = "";
    var valorP = 1.5;

    var contarValorC = 0;
    var Colorido =0;
    var Pcolorido = "";
    var valorC = 2.5; 

    var contarValorS = 0;
    var Scan =0;
    var PScan = "";
    var valorS = 1.0;

    var contarValorF = 0;
    var Foto =0;
    var Pfoto = "";
    var valorF = 5.0;

    var Espaçamento1 = ",+" ;
    var Espaçamento2= ",+";
    var Espaçamento3 = ",+";
    var Espaçamento4= "e+";


    function PEBMais(){
        
        ResuldadoPEB(++contarValorP*valorP);
        QuatidadePEB(++PEB);
        Resuldado()

        if(PEB==1){    
            PPEB = "impressão em preto e branco";

    }else{
        PPEB = "impressões em preto e branco";

    }

        
    }
    function PEBMenos(){
        ResuldadoPEB(--contarValorP*valorP);
        QuatidadePEB(--PEB);
        if(PEB==1){    
            PPEB = "impressão em preto e branco";

    }else{
        PPEB = "impressões em preto e branco";

    }
        if(contarValorP <= 0){
            document.getElementById("R$Pretobranco").innerHTML = "R$"+ 0 ;
            document.getElementById("QuatidadeP").innerHTML =  0 ;
            contarValorP = 0;
            PEB = 0;
    

        }
        
        Resuldado()

        

    }
    function QuatidadePEB(val) {
        
        document.getElementById("QuatidadeP").innerHTML = val ;
    }
    function ResuldadoPEB(val) {
        
        document.getElementById("R$Pretobranco").innerHTML = "R$"+ val ;
    }

    function ColoridoMais(){
        
        ResuldadoC(++contarValorC*valorC);
        QuatidadeC(++Colorido);
        Resuldado()

        if(Colorido==1){    
            Pcolorido = "impressão colorida";

    }else{
        Pcolorido = "impressões colorida";

    }

        
    }
    function ColoridoMenos(){
        ResuldadoC(--contarValorC*valorC);
        QuatidadeC(--Colorido);
        if(Colorido==1){    
            Pcolorido = "impressão colorida";

    }else{
        Pcolorido = "impressões colorida";

    }
        if(contarValorC <= 0){
            document.getElementById("R$Colorido").innerHTML = "R$"+ 0 ;
            document.getElementById("QuatidadeC").innerHTML =  0 ;
            Pcolorido = undefined;
            contarValorC = 0;
            Colorido = 0;
        

        }
        
        Resuldado()

        

    }
    function QuatidadeC(val) {
        
        document.getElementById("QuatidadeC").innerHTML = val ;
    }
    function ResuldadoC(val) {
        
        document.getElementById("R$Colorido").innerHTML = "R$"+ val ;
    }
    //
    function SMais(){
        
        ResuldadoS(++contarValorS*valorS);
        QuatidadeS(++Scan);
        Resuldado()

        if(Scan==1){    
            PScan = "scaner";

    }else{
        PScan = "scanners";

    }

        
    }
    function SMenos(){
        ResuldadoS(--contarValorS*valorS);
        QuatidadeS(--Scan);
        if(Scan==1){    
            PScan = "scaner";

    }else{
        PScan = "scanners)";

    }
        if(contarValorS <= 0){
            document.getElementById("R$Scan").innerHTML = "R$"+ 0 ;
            document.getElementById("QuatidadeS").innerHTML =  0 ;
            contarValorS = 0;
            Scan = 0;
            

        }
        
        Resuldado()

        

    }
    function QuatidadeS(val) {
        
        document.getElementById("QuatidadeS").innerHTML = val ;
    }
    function ResuldadoS(val) {
        
        document.getElementById("R$Scan").innerHTML = "R$"+ val ;
    }

    function FMais(){
        
        ResuldadoF(++contarValorF*valorF);
        QuatidadeF(++Foto);
        Resuldado()

        if(Foto==1){    
            Pfoto = "impressão fotografica";

    }else{
        Pfoto = "impressões fotografica";

    }

        
    }
    function FMenos(){
        ResuldadoF(--contarValorF*valorF);
        QuatidadeF(--Foto);
        if(Foto==1){    
            Pfoto = "impressão fotografica";

    }else{
        Pfoto = "impressões fotografica";

    }
        if(contarValorF <= 0){
            document.getElementById("R$Foto").innerHTML = "R$"+ 0 ;
            document.getElementById("QuatidadeF").innerHTML =  0 ;
            Pfoto = undefined;
            contarValorF = 0;
            Foto = 0;

        }
        
        Resuldado()

        

    }
    function QuatidadeF(val) {
        
        document.getElementById("QuatidadeF").innerHTML = val ;
    }
    function ResuldadoF(val) {
        
        document.getElementById("R$Foto").innerHTML = "R$"+ val ;
    }
    //
    function Resuldado() {
        result = 0;
        if (PEB > 0) {
            result += PEB*valorP    ;
        }
        if (Colorido > 0) {
            result += Colorido*valorC;
        }
        if (Scan > 0) {
            result += Scan*valorS;
        }
        if (Foto > 0) {
            result += Foto*valorF;
        }
    document.getElementById("R$").innerHTML = "R$"+  result  ;
    return result    
        

    }
    function ApagaTxt(){
        if (PEB  == 0){
            PEB ="";
            PPEB = "";
            Espaçamento1 = "";

        }
        if (Colorido  == 0){
            Colorido ="";
            Pcolorido = "";
            Espaçamento2 = "";
        }
        if (Scan  == 0){
            Scan ="";
            PScan = "";
            Espaçamento3 = "";

        }
        if (Foto  == 0){
            Foto ="";
            Pfoto = "";
            Espaçamento4 = "";
        }
    }

    function whatsapp(){
        ApagaTxt()
        pedido = "https://wa.me/5511967486171?text=Ol%C3%A1%21+Gostaria+de+fazer+um+pedido,+";
        if (Colorido  == 0  && PEB ==0 && Scan ==0 && Foto ==0){
            document.getElementById("R$").innerHTML = "Por favor primero selecione as Impressões desejadas" ;
        }
        else{
            openInNewTab(pedido + PEB + PPEB + Espaçamento1 + Colorido + Pcolorido + Espaçamento2 + Scan + PScan + Espaçamento3 + Foto + Pfoto + " e no total" +  " R$"+result )
            console.log(pedido + PEB + PPEB + Espaçamento1 + Colorido + Pcolorido + Espaçamento2 + Scan + PScan + Espaçamento3 + Foto + Pfoto)
        }
    }
    function openInNewTab(url) {
        var win = window.open(url, '_blank');
        win.focus();
    }