let req = new XMLHttpRequest();
let res;
req.open(
  "GET",
  "https://raw.githubusercontent.com/Rajavasanthan/jsondata/master/pagenation.json"
);
req.send();

req.onload = function () {
  res = JSON.parse(req.response);
  data_out(res);
};

function data_out(data) {
  console.log(data[0].id);
}
