document.getElementById("sakusei").addEventListener("click",function (){
    let seed,pnumber,volume,p,q=0,trush;
    seed = document.getElementById("round").value;
    pnumber = document.getElementById("pnumber").value;
    volume = document.getElementById("volume").value;
    const random = new Random(seed);

    p=pnumber*volume;
    var numbers = [volume];
    for(let i=1; i<=p; i++){
        if(i%pnumber == 0){
            numbers[q] = random.nextInt(1,100);
            q++;
        }else{
            trush = random.nextInt(1,100);
        }
    }
    q = 0;
    if(volume ==1 ){
        document.getElementById("number1").value += numbers[q];
    }else if (volume == 2){
        document.getElementById("number1").value += numbers[q];
        document.getElementById("number2").value += numbers[q+1];
    }else {
        document.getElementById("number1").value += numbers[q];
        document.getElementById("number2").value += numbers[q+1];
        document.getElementById("number3").value += numbers[q+2];
    }
})

class Random {
    constructor(seed = document.getElementById("round").value) {
        this.x = 123456789;
        this.y = 362436069;
        this.z = 521288629;
        this.w = seed;
    }
    
    // XorShift
    next() {
        const t = this.x ^ (this.x << 11);
        this.x = this.y;
        this.y = this.z;
        this.z = this.w;
        return this.w = (this.w ^ (this.w >>> 19)) ^ (t ^ (t >>> 8));
    }
    
    // min 以上 max 以下の乱数を生成する
    nextInt(min, max) {
        const r = Math.abs(this.next());
        return min + (r % (max + 1 - min));
    }
}

