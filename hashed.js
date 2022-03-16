// Simple non-crypto hash to convert string to 32-bit integer              
// Would be better to include a hash library such as MD5 or murmur hash
function stringToHash(string) {

    let hash = 0;
        
    if (string.length == 0){
        return hash
    }
    //Loop through the string to acquire char code and move 5 spaces left (i.e. 32 bits)
    for (let i = 0; i < string.length; i++){
        char = string.charCodeAt(i)
        hash = ((hash << 5) - hash) + char
        hash = hash & hash
    }
    
    return hash
}

exports.stringToHash = stringToHash