function searchSimplePrimo() {
  var form = document.forms["searchFormPrimoNUI"];
  /* in case the event was triggered on an internal input */
  while (form.nodeName !== "FORM") form = form.parentElement;

  /* grab the value from queryTemp, and modify it to put in query */
  var temp_query_input = form.querySelector('input[name="queryTemp"]');
  var real_query_input = form.querySelector('input[name="query"]');

  real_query_input.value =
    "any,contains," + temp_query_input.value.replace(/[,]/g, " ");

  form.submit();
}

jq(function () {
  jq("#searchFormPrimoNUI").submit(function () {
    searchSimplePrimo();
  });
  // onsubmit
});

function searchSimplePrimo2() {
  var form = document.forms["searchFormPrimoNUI"];
  /* in case the event was triggered on an internal input */
  while (form.nodeName !== "FORM") form = form.parentElement;

  /* grab the value from queryTemp, and modify it to put in query */
  var temp_query_input = form.querySelector('input[name="queryTemp"]');
  var real_query_input = form.querySelector('input[name="query"]');

  real_query_input.value =
    "any,contains," + temp_query_input.value.replace(/[,]/g, " ");

  form.submit();
}

jq(function () {
  jq("#searchFormPrimoNUI2").submit(function () {
    searchSimplePrimo();
  });
  // onsubmit
});
