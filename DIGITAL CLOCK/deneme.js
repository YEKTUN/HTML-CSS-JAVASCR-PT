function clock() {
    const date=new Date();
    let hour=date.getHours();
    const meridiem=hour >=12? "PM":"AM"
    hour=hour%12 || 12
    hour=date.getHours().toString().padStart(2,"0");

    const minute=date.getMinutes().toString().padStart(2,'0');
    const second=date.getSeconds().toString().padStart(2,'0');
    const time=`${hour}:${minute}:${second} ${meridiem}`
    document.getElementById('clock').textContent=time


}
clock()
setInterval(clock,1000)