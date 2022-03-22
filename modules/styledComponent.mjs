export default class styled{
    static reduceStrsAndValues(strs,values)
    {
        return values.reduce((pv,cv,i,a)=>{
            return `${pv} ${cv} ${strs[i+1]}`
        },strs[0])
    }
    static convertToCamelCase(str)
    {
        let arr = str.split("")
            
            for(let x = 0; x<arr.length;x++)
            {
                if(arr[x]=="-"&&arr[x-1]!=" "&&arr[x+1]!=" ")
                {
                    arr[x] = ""
                    arr[x+1] = arr[x+1].toUpperCase()
                }
                
            }
            str = arr.join("")
            return(str)
    }
    static processParsedCSS(parsedCssStr)
    {
        let cssStrArr = parsedCssStr.split(";")
            cssStrArr = cssStrArr.map(e=>{
                return e.trim()
            })
        return cssStrArr
    }
    static createCSSMap(cssStrArr)
    {
        console.log(cssStrArr)
        let masterMap = new Map()
        cssStrArr = cssStrArr.forEach(e=>{
            masterMap.set(e.split(":")[0],e.split(":")[1])
        })
        console.log(masterMap)
        return masterMap
    }
    static handleStyle(strs,values)
    {
        let SC = styled
        let cssStr = SC.reduceStrsAndValues(strs,values)
        let parsedCssStr = SC.convertToCamelCase(cssStr)     
        let cssStrArr = SC.processParsedCSS(parsedCssStr)
        let masterMap = SC.createCSSMap(cssStrArr)
        return masterMap
    }
    static styler(elem,cssMap){
        cssMap.forEach((cssPpty,cssKey)=>{
                elem.style[cssKey] = cssPpty
            })
    }
    static div(strs,...values)
    {  
        let SC = styled
        let divElement = document.createElement("div") 
        let cssMap = SC.handleStyle(strs,values)
        SC.styler(divElement,cssMap)
        
        return(divElement)
    }
    static button(strs,...values)
    {  
        let SC = styled
        let buttonElement = document.createElement("button") 
        let cssMap = SC.handleStyle(strs,values)
        SC.styler(buttonElement,cssMap)
        
        return(buttonElement)
    }
}