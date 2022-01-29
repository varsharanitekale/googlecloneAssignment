const searchinput=document.querySelector("#search-input");
 searchinput.addEventListener("keydown", function(event){
     if(event.code==="Enter"){
         search();

     }

 });
function search(){
    const input=searchinput.value;
    window.location.href="https://www.google.com/search?q="+input+"&sxsrf=APq-WBsEiRF0cJLCcMj4SJMyvR3sTnVnng%3A1643456385911&source=hp&ei=gSf1YenoNImHoASC2IDwBg&iflsig=AHkkrS4AAAAAYfU1kS-7nDtWfpsjDuFt3Gh1rEXF3srE&oq=&gs_lcp=Cgdnd3Mtd2l6EAEYADIHCCMQ6gIQJzIHCCMQ6gIQJzINCC4QxwEQowIQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzIHCCMQ6gIQJzoECCMQJzoECC4QQzoECAAQQzoFCAAQgAQ6CwguEIAEELEDEIMBUIUFWNcJYN8baAJwAHgAgAG2AYgBtgGSAQMwLjGYAQCgAQGwAQo&sclient=gws-wiz"
}