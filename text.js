let arr = [1,2,3,4,5,6,7,8,9,10]
n = 3
// [[1,2,3],[4,5,6],[7,8,9],10]




      let ans =[];
    for(let i=0;i<arr.length;i=i+n){
        ans.push(arr.slice(i,i+n))
    }



console.log(ans)
