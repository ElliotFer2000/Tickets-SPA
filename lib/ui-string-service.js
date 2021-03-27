function stringUIService(){
    return Object.freeze({
        truncateString,
        testString
    });

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

    function testString(inputValue, regex) {
        const result = regex.exec(inputValue)
        if (result) {
            return 1
        }
        return 0
    }

    
    
}

export default stringUIService