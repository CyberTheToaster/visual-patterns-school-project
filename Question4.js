class pattern {
    constructor(constant,increment) {
        this.increment = increment
        this.constant = constant
    }
    printarray(times) {
        for (let n = 1;n <= times;n++) {
            let array = new Array()
            for (let i = 0;i < this.constant; i++) {
                array.push("x")
            }
            for (let i = 0;i < this.increment*n;i++) {
                array.push("z")
            }
            if (n % 2 == 0){
            console.log(array.toString())
            } else {
                continue
            }
        }
        
    }
}
let newpattern = new pattern(2,3)
newpattern.printarray(3)