let obj=JSON.parse($response.body);
obj.data.topFunctionalArea.splice(5);
$done({body: JSON.stringify(obj)});
// Adding a dummy sgmodule commit(2)
// Adding a dummy plugin commit(1)
