function truncateString(string,length){
    if(string.length > length){
        const charArray = []
        for(let i=0; i<length; i++){
            charArray.push(string[0])
        }
        return charArray.toString().replaceAll(",","")
    }
    return string
}


export default truncateString