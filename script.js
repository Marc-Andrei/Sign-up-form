const pass = document.querySelector("#pwd");
const confirmPass = document.querySelector("#confirm");
const mismatch = document.querySelector(".mismatch")

pass.addEventListener("blur", () => {
    if(pass.value !== confirmPass.value) {
        mismatch.classList.add("different");
        pass.classList.add("differentPass")
        confirmPass.classList.add("differentPass")
    }
    else {
        mismatch.classList.remove("different")
        pass.classList.remove("differentPass")
        confirmPass.classList.remove("differentPass")
    }
})

confirmPass.addEventListener("blur", () => {
    if(pass.value !== confirmPass.value) {
        mismatch.classList.add("different");
        pass.classList.add("differentPass")
        confirmPass.classList.add("differentPass")
    }
    else {
        mismatch.classList.remove("different")
        pass.classList.remove("differentPass")
        confirmPass.classList.remove("differentPass")
    }
})

