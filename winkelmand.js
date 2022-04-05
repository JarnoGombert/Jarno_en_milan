let product = 0;

$('#divResult').text(product);

$('div').on('click', function(){
    product += 1;
        $('#divResult').text(product);
})