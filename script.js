let req = new XMLHttpRequest();

req.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);
req.send();

req.onload = function () {
  let res = JSON.parse(req.response);
  processData(res);
};

function processData(data) {
  console.log("Processed Data:", data);
}
