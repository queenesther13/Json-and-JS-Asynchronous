function fetchdata(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve("code is successful");
        },6000 );
    });
}
async function handlefetch(){
    const status = document.getElementById("status");
    status.textContent="Fetching data............"
    const result = await fetchdata()
    status.textContent= result;
}
document.getElementById("fetchButton").addEventListener("click",handlefetch);