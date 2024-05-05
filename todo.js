function checkValid(txt)
{
    if(txt == ""){
        alert("Todo is empty Please enter something!");
        return false;
    }
    return true;
}

function showData()
{
    let alltodos;
    if(localStorage.getItem("alltodos") == null)
    {
        alltodos = [];
        
    }
    else{
        alltodos = JSON.parse(localStorage.getItem("alltodos"));
    }

    let html = "";

    alltodos.map((ele, indx) => {
        html += `<div class="todo-div">
                <ul class="data-con">${ele}</ul>
                    <button onclick="deleteTodo(${indx})" 
                        class= "button">
                        Delete
                    </button>
                </div>`
    });
    document.getElementById("data-con").innerHTML = html;

    if(html == "")
    document.getElementById("data-con").innerHTML = `<ul>Enter your ToDos.....</ul>`
}
document.onload = showData();

function retrivedata()
{
    let txt = document.getElementById("input-text").value;

    if(checkValid(txt) == true)
    {
        let alltodos;
        if(localStorage.getItem("alltodos") == null)
        {
            alltodos = [];
        }
        else{
            alltodos = JSON.parse(localStorage.getItem("alltodos"));
        }

        alltodos.push(txt);

        localStorage.setItem("alltodos", JSON.stringify(alltodos));
        showData();

        document.getElementById("input-text").value = "";
    }
    
}

function deleteTodo(index)
{
    console.log("clicked");
    let alltodos;
    if(localStorage.getItem("alltodos") == null)
    {
        alltodos = [];
        
    }
    else{
        alltodos = JSON.parse(localStorage.getItem("alltodos"));
    }

    alltodos.splice(index, 1);
    localStorage.setItem("alltodos", JSON.stringify(alltodos));

    showData();
}