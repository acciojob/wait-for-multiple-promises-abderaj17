//your JS code here. If required.
function createPromise(index) {
  let time = Math.random()*(2000-1000)+1000;
	return new Promise((resolve, reject)=>{
		setTimeout(()=>{
			resolve([index, time/ 1000]);
		}, time);
	})
}
let promises = [createPromise(1), createPromise(2), createPromise(3)];

Promise.all(promises).then((values) => {
    console.log(values); // This will log array of results

    let table = document.getElementById('output');

    // Remove the 'Loading...' row
    document.getElementById('loading').remove();
 
    let totalTime = 0;

    // Add a row for each promise
    for(let i = 0; i < values.length; i++) {
        let row = table.insertRow();
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = "Promise " + values[i][0];
        cell2.innerHTML = values[i][1];
        totalTime += values[i][1];
    }

    // Add a row for total time
    let row = table.insertRow();
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    cell1.innerHTML = "Total";
    cell2.innerHTML = totalTime;
});