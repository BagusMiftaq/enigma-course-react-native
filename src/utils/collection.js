export const groupingAlphabet = (data, groupBy) => {
    let contactArr=[];
    let aCode = "A".charCodeAt(0);
    for(let i = 0; i < 26; i++){
        let currChar = String.fromCharCode(aCode + i);
        let obj = {
            title : currChar
        };

        let currContacts = data.filter(item=>{
            return item[groupBy][0].toUpperCase()=== currChar;
        })

        if(currContacts.length>0){
            currContacts.sort((a,b)=> a[groupBy].localeCompare(b[groupBy]));
            obj.data = currContacts;
            contactArr.push(obj);
        }
    }
    return contactArr;
}