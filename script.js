// FOOTER YEAR

const currentYear = new Date().getFullYear()
const yearSpan = document.getElementById('year')
yearSpan.innerText = currentYear

// RADIO BEHAVIOR

const radioContainer = document.getElementById("radio-btns");
const radios = radioContainer.getElementsByTagName("input");
const labels = radioContainer.getElementsByTagName("label");

for (let i = 0; i < radios.length; i++) {
    radios[i].addEventListener("click", function () {
        if (radios[0].checked) {
            labels[0].classList.add("radio-selected");
            if (labels[1].classList.contains("radio-selected")) {
                labels[1].classList.remove("radio-selected");
            }
        } else if (radios[1].checked) {
            labels[1].classList.add("radio-selected");
            if (labels[0].classList.contains("radio-selected")) {
                labels[0].classList.remove("radio-selected");
            }
        }
    });
}