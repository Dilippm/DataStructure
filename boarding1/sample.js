let obj = [
    {
      name:"Ameen",
      mark : [
        {
          subject:"Maths",
          marks:30
        },
        {
          subject:"Malayalam",
          marks:45
        },
        {
          subject:"Physics",
          marks:35
        },
        {
          subject:"Chemistry",
          marks:38
        },
      ]
    },
    {
      name:"Vishnu",
      mark : [
        {
          subject:"Maths",
          marks:56
        },
        {
          subject:"Malayalam",
          marks:37
        },
        {
          subject:"Physics",
          marks:45
        },
        {
          subject:"Chemistry",
          marks:44
        },
      ]
    },
    {
      name:"Jaseel",
      mark : [
        {
          subject:"Maths",
          marks:43
        },
        {
          subject:"Malayalam",
          marks:40
        },
        {
          subject:"Physics",
          marks:39
        },
        {
          subject:"Chemistry",
          marks:29
        },
      ]
    },
    {
      name:"Adhil",
      mark : [
        {
          subject:"Maths",
          marks:49
        },
        {
          subject:"Malayalam",
          marks:37
        },
        {
          subject:"Physics",
          marks:28
        },
        {
          subject:"Chemistry",
          marks:29
        },
      ]
    }
  ]
let result= obj.map((item)=>{
   let marks = item.mark.filter((obj)=>{
    return obj.marks>40
            
   })
        return {
            name: item.name,
            marks:JSON.stringify(marks)
        }
})
console.log(result);