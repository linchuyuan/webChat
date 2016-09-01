define(function(){
    function addTableRow(f){
        return  "<tr>"+f+"</tr>"
    }
    function addTableData(f,tagClass,backgroundColor){
        if (typeof f == "number"){f = Number(Math.ceil(f)).toLocaleString('en')}
        return"<td class='"+tagClass+"' default='"+f+"'style='white-space:pre;background-color:"+backgroundColor+"'>"+f+"</td>"
    }
    return {
        addTableRow: addTableRow,
        addTableData: addTableData
    }
})