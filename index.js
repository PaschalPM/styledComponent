import styled from "./modules/styledComponent.mjs";
const root = document.getElementById("root")
let color = "red"
let fontSize = "30px"
const myDiv = styled.div`
    color:${color};
    font-size:${fontSize};
    background-color: brown;
    height: calc(100vh - 100px);

`
myDiv.append("Hello World")
root.append(myDiv)


