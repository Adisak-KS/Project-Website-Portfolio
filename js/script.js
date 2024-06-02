// / ================================= typing animation  ==================================

let typed = new Typed(".typing", {
    strings: ["New Graduates", "Web Developer", "PHP Developer", "Backend Developer", "Full-Stack Developer", "Software Engineering"],
    typeSpeed: 100,   // ความเร็วในการพิมพ์ตัวอักษร (มิลลิวินาที)
    backSpeed: 50,    // ความเร็วในการลบตัวอักษร (มิลลิวินาที)
    backDelay: 500,
    loop: true   // ทำซ้ำการพิมพ์
})