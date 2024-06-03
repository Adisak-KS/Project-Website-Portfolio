// / ================================= typing animation  ==================================

let typed = new Typed(".typing", {
    strings: ["New Graduates", "Web Developer", "PHP Developer", "Backend Developer", "Full-Stack Developer", "Software Engineering"],
    typeSpeed: 100,   // ความเร็วในการพิมพ์ตัวอักษร (มิลลิวินาที)
    backSpeed: 50,    // ความเร็วในการลบตัวอักษร (มิลลิวินาที)
    backDelay: 500,
    loop: true   // ทำซ้ำการพิมพ์
})

// / ================================= Aside  ==================================

const nav = document.querySelector(".nav"),
    navList = nav.querySelectorAll("li"),
    totalNavList = navList.length;

for (let i = 0; i < totalNavList; i++) {
    const a = navList[i].querySelector("a")
    a.addEventListener("click", function () {
        
        for (let j = 0; j < totalNavList; j++) {
            navList[j].querySelector("a").classList.remove("active")
        }
        this.classList.add("active")
    })
}
