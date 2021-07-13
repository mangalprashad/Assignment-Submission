s = "madam is walking on the road"
b = s.split(" ")
k = ""
for(t of b){
    k = k + t
    //console.log(k)
    rev = k.split("").reverse().join("")
    //console.log(rev)
    if(rev == k)
    {
        console.log(rev)
    }
    k = ""
}