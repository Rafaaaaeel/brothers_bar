var selectedFile 

document.getElementById("fileUpload").addEventListener("change", (event)=>{
    selectedFile = event.target.files[0]
})

document.getElementById("uploadeExcel").addEventListener("click", ()=>{
    if(selectedFile){
        var fileRender = new FileReander()

        fileRender.onload = (event) =>{
            var data = event.target.result

            var workbook = XLSX.read(data, {
                type: "binary"
            })

            workbook.SheetNames.forEach( sheet => {
                let rowObject = XLSX.utils.sheet_to_row_object_array(
                    workbook.Sheet[sheet]
                )

                let jsonObject = JSON.stringify(rowObject)
                document.getElementsById("jsonData").innerHTML = jsonObject
            });
        }

        fileRender.readAsBinaryString(selectedFile)
    }
})