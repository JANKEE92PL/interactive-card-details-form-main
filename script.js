let form = document.forms[0],
    cardholderName = form.elements.namedItem("cardholderName"),
    cardNumber = form.elements.namedItem("cardNumber"),
    expDateMonth = form.querySelector("#expDateMonth"),
    expDateYear = form.querySelector("#expDateYear"),
    cvc = form.querySelector("#cvc"),
    submit = form.querySelector("#submit"),
    cardFront = document.querySelector("#bg-card-front-logo"),
    cardBack = document.querySelector("#csv-cc")


console.log(submit)

cardholderName.addEventListener("input", (e) => {
    cardFront.querySelector("p").innerText = cardholderName.value.toUpperCase()
});

cardNumber.addEventListener("input", (e) => {
    cardFront.querySelector("h2").innerText = cardNumber.value
});
expDateMonth.addEventListener("input", (e) => {
    cardFront.querySelectorAll("span")[0].innerText = expDateMonth.value
});
expDateYear.addEventListener("input", (e) => {
    cardFront.querySelectorAll("span")[1].innerText = expDateYear.value
})
cvc.addEventListener("input", (e) => {
    cardBack.innerText = cvc.value
})