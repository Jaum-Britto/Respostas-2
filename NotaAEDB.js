function calc(){
    var txtnda = document.getElementById('txtnda')
    var txtav1 = document.getElementById('txtav1').value
    var txtav2 = document.getElementById('txtav2').value
    var txtav3 = document.getElementById('txtav3').value
    outresultado = document.getelementbyid('outresultado')

    if((txtav1 + txtav2)/2 >4){
         outresultado.textcontent = 'Parabéns, você está aprovado'

}