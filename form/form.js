let saveFile = () => {
	
    // Get the data from each element on the form.
    const responsible0 = document.getElementById('responsible0');
    const alternate1 = document.getElementById('alternate1');
    const alternate2 = document.getElementById('alternate2');
    const size = document.getElementById('size');
    const protocol = document.getElementById('protocol');
    const srw = document.getElementById('srw');
    const sro = document.getElementById('sro');
    
    // This variable stores all the data.
    let data = 
        'Responsible;' + 'First alternate;' + 'Second alternate;' + 'Size' + 'Protocol;' + 'Read write permission;' + 'Read only permission' + '\r\n' +
        responsible0.value + ';' + alternate1.value + ';' + alternate2.value + ';' + size.value + ';' + protocol.value + ';' + srw.value + ';' + sro.value;
    
    // Convert the text to BLOB.
    const textToBLOB = new Blob([data], { type: 'text/csv;charset=utf-8;' });
    const sFileName = 'network_service.csv';	   // The file to save the data.

    let newLink = document.createElement("a");
    newLink.download = sFileName;

    if (window.webkitURL != null) {
        newLink.href = window.webkitURL.createObjectURL(textToBLOB);
    }
    else {
        newLink.href = window.URL.createObjectURL(textToBLOB);
        newLink.style.display = "none";
        document.body.appendChild(newLink);
    }
    
    newLink.click(); 
}