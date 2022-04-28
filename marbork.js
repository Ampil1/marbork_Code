
let arr=
[
    {
        "vehicle": "T-V-001",
        "total_km": 0,
        "total_trips": 0,
        "distance": 3171.5915633510012
    },
    {
        "vehicle": "T-V-002",
        "total_km": 0,
        "total_trips": 0,
        "distance": 3321.7223266992555
    },
    {
        "vehicle": "T-V-003",
        "total_km": 37,
        "total_trips": 6,
        "distance": 5220.795513483339
    },
    {
        "vehicle": "T-V-004",
        "total_km": 38.615,
        "total_trips": 6,
        "distance": 3634.047076451455
    },
    {
        "vehicle": "T-V-005",
        "total_km": 41.441,
        "total_trips": 5,
        "distance": 3029.578419965376
    },
    {
        "vehicle": "T-V-006",
        "total_km": 54,
        "total_trips": 4,
        "distance": 7639.659012335449
    },
    {
        "vehicle": "T-V-007",
        "total_km": 60,
        "total_trips": 6,
        "distance": 7108.833316340898
    },
    {
        "vehicle": "T-V-008",
        "total_km": 73.121,
        "total_trips": 8,
        "distance": 7652.731513921819
    },
    {
        "vehicle": "T-V-009",
        "total_km": 92,
        "total_trips": 6,
        "distance": 4152.404841519411
    },
    {
        "vehicle": "T-V-010",
        "total_km": 159,
        "total_trips": 8,
        "distance": 6066.430123947655
    }
]

/**
 * 1. Calculate total_km
2. Calculate and return total_km & total_trips in a single object.
3. Sort by distance in ascending order.
4. Sort by total_km, total_trips & distance in order Descending Order
 */

// custom function
function totalSumKM(arr){
    if(arr.legth==0) return 'data Not available';
    let km_data=[];
    const mapData= arr.forEach(element => {
        if(element.total_km){
        km_data.push(element.total_km)
        }
    });
    let sum_KM=0;
    for(let x in km_data){
        sum_KM +=km_data[x];
    }
    return sum_KM;
}
console.log("cunstom-function",totalSumKM(arr))


// in below  code uesed inbuilt methode
function total_km(arr){
    const result = arr.map((data)=>data.total_km).reduce((id,sum)=> sum+id);
    console.log(result)
}
total_km(arr)

//2 Task
function total_kmAndtotal_trips(arr){
    const total_km = arr.map((data)=>data.total_km).reduce((id,sum)=> sum+id);
    const total_trips = arr.map((data)=>data.total_trips).reduce((id,sum)=> sum+id);
    const result = {
        total_km:total_km,
        total_trips: total_trips
    }
    return result
}
console.log(total_kmAndtotal_trips(arr))

// //3 task.
function sortByDiestnace(arr){
    if(!arr.legth){
     arr.sort((a,b)=>{
        if(a.distance>b.distance) return 1;
        if(a.distance<b.distance) return -1;
        else return;
     })
     console.log("assedind data",arr);
     return arr
    }
    else return "data empty"
}
console.log(sortByDiestnace(arr))

// 4 Task
//Sort by total_km, total_trips & distance in order Descending Order
function sortingfunction(arr){
    let total_km,total_trips,distance=[];
    if(!arr.legth){

        arr.sort((a,b)=>{
            if(a.total_km>b.total_km) return -1;
            if(a.total_km<b.total_km) return 1;
            else return;
         })
         console.log("console-1",[...arr])
         arr.sort((a,b)=>{
            if(a.total_trips>b.total_trips) return -1;
            if(a.total_trips<b.total_km) return 1;
            else return;
         })
         console.log("console-2",arr)
        arr.sort((a,b)=>{
           if(a.distance>b.distance) return 1;
           if(a.distance<b.distance) return -1;
           else return;
        })
        console.log("console-3",arr);
       }
       else return "data empty"
}
sortingfunction(arr)
