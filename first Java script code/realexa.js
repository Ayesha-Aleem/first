function update() {
    console.log("Updating result");
    //the inner html result will be replaced by ur guven input
    var input = document.getElementById("my");
    var output = document.getElementById("output");
    output.innerHTML=input.value;
}