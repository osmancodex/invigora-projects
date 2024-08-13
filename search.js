function searchFun(){
    let filter = document.getElementById('searchID').value.toUpperCase();

    let div = document.getElementById('container');

    let button = div.getElementsByTagName('button');

    for(var i=0; i<button.length; i++){
        let span = button[i].getElementsByTagName('span')[0];

        let textValue = span.textContent || span.innerHTML;

        if(textValue.toUpperCase().indexOf(filter) > -1){
            button[i].style.display = '';
        } else {
            button[i].style.display = 'none';
        }
    }
}