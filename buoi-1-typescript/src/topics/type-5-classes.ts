class Developer {
    name: string;

    lang: string;

    constructor(name: string, lang: string) {
        this.name = name;
        this.lang = lang;
    }
}

// dùng access modifier để khai báo thuộc tính
class Staff {
    constructor(public name: string, public job: string) {}
}


