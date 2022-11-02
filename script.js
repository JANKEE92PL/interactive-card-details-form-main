let form = document.forms[0],
    cardholderName = form.elements.namedItem("cardholderName"),
    cardNumber = form.elements.namedItem("cardNumber"),
    expDateMonth = form.querySelector("#expDateMonth"),
    expDateYear = form.querySelector("#expDateYear"),
    cvc = form.querySelector("#cvc"),
    submit = form.querySelector("#submit")


console.log(submit)