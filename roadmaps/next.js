function createTable(info) {
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;

    const data = info.split(",").map(topic => topic.trim());
    data.forEach(topic => {
        tableHTML += `
            <tr>
                <td style="background-color:black; color:white;">${topic}</td>
                <td style="background-color:black; color:white;"><a href="#" target="_blank">${topic} link</a></td>
                <td style="background-color:black; color:white;"><input type="checkbox" /></td>
            </tr>`;
    });

    tableHTML += `</table>`;
    return tableHTML;
}


function createtable1(info,link){
    const data=info.split(",");
    const linkarr=link.split(",");
    const index=0;
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;
    
    const size = linkarr.length;
    for (let i = 0; i < size; i++) {
        tableHTML += `
        <tr>
            <td style="background-color:black; color:white;">${data[i]}</td>
            <td style="background-color:black; color:white;"><a href="${linkarr[i]}" target="_blank">${data[i]} link</a></td>
            <td style="background-color:black; color:white;"><input type="checkbox" /></td>
        </tr>`;
    }
    tableHTML+=`</table>`
    return tableHTML;
}
function createtable2(info,link){
    const data=info.split(",");
    const linkarr=link.split(",");
    const index=0;
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;
    
    const size = linkarr.length;
    for (let i = 0; i < size; i++) {
        tableHTML += `
        <tr>
            <td style="background-color:black; color:white;">${data[i]}</td>
            <td style="background-color:black; color:white;"><a href="${linkarr[i]}" target="_blank">${data[i]} link</a></td>
            <td style="background-color:black; color:white;"><input type="checkbox" /></td>
        </tr>`;
    }
    tableHTML+=`</table>`
    return tableHTML;
}
function createtable3(info,link){
    const data=info.split(",");
    const linkarr=link.split(",");
    const index=0;
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;
    
    const size = linkarr.length;
    for (let i = 0; i < size; i++) {
        tableHTML += `
        <tr>
            <td style="background-color:black; color:white;">${data[i]}</td>
            <td style="background-color:black; color:white;"><a href="${linkarr[i]}" target="_blank">${data[i]} link</a></td>
            <td style="background-color:black; color:white;"><input type="checkbox" /></td>
        </tr>`;
    }
    tableHTML+=`</table>`
    return tableHTML;
}
function createtable4(info,link){
    const data=info.split(",");
    const linkarr=link.split(",");
    const index=0;
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;
    
    const size = linkarr.length;
    for (let i = 0; i < size; i++) {
        tableHTML += `
        <tr>
            <td style="background-color:black; color:white;">${data[i]}</td>
            <td style="background-color:black; color:white;"><a href="${linkarr[i]}" target="_blank">${data[i]} link</a></td>
            <td style="background-color:black; color:white;"><input type="checkbox" /></td>
        </tr>`;
    }
    tableHTML+=`</table>`
    return tableHTML;
}
function createtable5(info,link){
    const data=info.split(",");
    const linkarr=link.split(",");
    const index=0;
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;
    
    const size = linkarr.length;
    for (let i = 0; i < size; i++) {
        tableHTML += `
        <tr>
            <td style="background-color:black; color:white;">${data[i]}</td>
            <td style="background-color:black; color:white;"><a href="${linkarr[i]}" target="_blank">${data[i]} link</a></td>
            <td style="background-color:black; color:white;"><input type="checkbox" /></td>
        </tr>`;
    }
    tableHTML+=`</table>`
    return tableHTML;
}
function createtable6(info,link){
    const data=info.split(",");
    const linkarr=link.split(",");
    const index=0;
    let tableHTML = `<table class="table">`;
    tableHTML += `
        <tr>
            <th style="background-color:black; color:white;">Topic</th>
            <th style="background-color:black; color:white;">Link of the Article</th>
            <th style="background-color:black; color:white;">Completed</th>
        </tr>`;
    
    const size = linkarr.length;
    for (let i = 0; i < size; i++) {
        tableHTML += `
        <tr>
            <td style="background-color:black; color:white;">${data[i]}</td>
            <td style="background-color:black; color:white;"><a href="${linkarr[i]}" target="_blank">${data[i]} link</a></td>
            <td style="background-color:black; color:white;"><input type="checkbox" /></td>
        </tr>`;
    }
    tableHTML+=`</table>`
    return tableHTML;
}
