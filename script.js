alert("ยินดีต้อนรับสู่เว็บไซต์ การหาค่าดัชนีมวลกาย (Body Mass Index : BMI)");
const bmiText = document.getElementById("bmi");
const descText = document.getElementById("desc");
const desc2Text = document.getElementById("desc2");
const form = document.querySelector("form");

form.addEventListener("submit", onFormSubmit);
form.addEventListener("reset", onFormReset);

function onFormReset() {
bmiText.textContent = 0;
bmiText.className = "";
descText.textContent = "N/A";
desc2Text.textContent = "N/A";
}

function onFormSubmit(e) {
e.preventDefault();

const weight = parseFloat(form.weight.value);
const height = parseFloat(form.height.value);

if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("กรุณา ใส่น้ำหนักตัว และส่วนสูงของท่านให้ครบถ้วนก่อนค่ะ !");
    return;
}

const heightInMeters = height / 100; // cm -> m
const bmi = weight / Math.pow(heightInMeters, 2);
const desc = interpretBMI(bmi);
const desc2 = interpretBMI2(bmi);

bmiText.textContent = bmi.toFixed(2);
bmiText.className = desc;
bmiText.className = desc2;
descText.innerHTML = `คุณอยู่ในเกณฑ์ <strong>${desc}</strong>`;
desc2Text.innerHTML = `คุณมีภาวะเสี่ยงต่อโรค <strong>${desc2}</strong>`;
}

function interpretBMI(bmi) {
if (bmi < 18.5) {
    return "ผอม";
} else if (bmi < 22.90) {
    return "ปกติ";
} else if (bmi < 24.90) {
    return "ท้วม";
} else if (bmi < 29.90) {
    return "อ้วน";
} else {
    return "โคตรอ้วน";
}
}

function interpretBMI2(bmi) {
if (bmi < 18.5) {
    return "มากกว่าคนปกติ";
} else if (bmi < 22.90) {
    return "เท่าคนปกติ";
} else if (bmi < 24.90) {
    return "อันตรายระดับ 1";
} else if (bmi < 29.90) {
    return "อันตรายระดับ 2";
} else {
    return "อันตรายระดับ 3";
}
}