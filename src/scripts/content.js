


console.log('start')

let last_link='';



function remove_p() {
    let list=Array.from(document.querySelectorAll('.reactable-data tr'))
    list.forEach((data)=>{
     console.log(data)
        if(data.querySelector('td:nth-child(3) .fa-lock')){
         data.style="display:none"
      
      }
      })

  



}

function init() {
    const link = window.location.href;

   if (link.includes('https://leetcode.com/')) {

   if(last_link!=link){
       last_link=link;
       remove_p()
    }
}
  

}


chrome.extension.onMessage.addListener(function (msg, sender, sendResponse) {
    if (msg.action == 'toggle_box') {
        console.log('click')
        // ToggleBox();
        init();
    }
});

setInterval(()=>{
    init();
},2000)

