function isValid(start,end){
    if(start<=end&&start>0&&end<1000)
        return true;
    else return false;
}
function createReport(start,end){
    let report="";
    for(let i=start;i<=end;i++){
        for(let j=start;j<=i;j++){
            report+=j+"*"+i+"="+i*j+(j==i?"\n":"\t");
        }
    }
    return report;
}
function createMultiplyTable(start,end){
}
module.exports = {
    isValid,createMultiplyTable,createReport
}