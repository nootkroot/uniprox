var input = document.querySelector('#url');
//var password = document.getElementById('password');
//var answer = "1112022"
function useProxy() {

      if (!input.value.trim().length) return;
      if(input.value.slice(0, 8)!="https://"&&input.value.slice(0,7)!="http://"){
          input.value="https://"+input.value
      }      
      window.location.assign(`/prox/?url=${btoa(input.value)}`);

}
input.addEventListener('keyup', (key) => {
    if (key.keyCode == 13) { 
        useProxy();
    }
})
document.querySelector("#initiate").addEventListener('click', () => {
    useProxy();
});