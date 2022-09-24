var dateapp = new Vue({
    el: "#app",
    data: {
      CalendarPage: true,
      CurrentDate: 1,
      dates: [
        {
          name: 1,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "1st August 2022",
          quote:"Work hard , play hard"
        },
        {
          name: 2,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "2nd August 2022",
          quote:"Never Give up"
        },
        {
          name: 3,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "3rd August 2022",
          quote:"Dont Settle"
        },
        {
          name: 4,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "4th August 2022",
          quote:"Nothing is Impossible"
        },
        {
          name: 5,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "5th August 2022",
          quote:"You can totally do this."
        },
        {
          name: 6,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "6th August 2022",
          quote:"Grow through what you go through."
        },
        {
          name: 7,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "7th August 2022",
          quote:"Persistence guarantees that results are inevitable."
        },
        {
          name: 8,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "8th August 2022",
          quote:"Do it. With love."
        },
        {
          name: 9,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "9th August 2022",
          quote:"Never stop dreaming."
        },
        {
          name: 10,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "10th August 2022",
          quote:"Seek the seeker."
        },
        {
          name: 11,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "11th August 2022",
          quote:"Be a voice. Not an echo."
        },
        {
          name: 12,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "12th August 2022",
          quote:"The best is yet to come."
        },
        {
          name: 13,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "13th August 2022",
          quote:"Choose happy."
        },
        {
          name: 14,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "14th August 2022",
          quote:"Open your mind. Get up off the couch. Move."
        },
        {
          name: 15,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "15th August 2022",
          quote:"You matter."
        },
        {
          name: 16,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "16th August 2022",
          quote:"Dream without fear. love without limits."
        },
        {
          name: 17,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "17th August 2022",
          quote:"If it matters to you, you’ll find a way."
        },
        {
          name: 18,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "18th August 2022",
          quote:"Do it with passion or not at all."
        },
        {
          name: 19,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "19th August 2022",
          quote:"You can if you think you can."
        },
        {
          name: 20,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "20th August 2022",
          quote:"Leave no stone unturned."
        },
        {
          name: 21,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "21st August 2022",
          quote:"Dream big. Pray bigger."
        },
        {
          name: 22,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "22nd August 2022",
          quote:"Prove them wrong."
        },
        {
          name: 23,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "23rd August 2022",
          quote:"Good things happen to those who hustle."
        },
        {
          name: 24,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "24th August 2022",
          quote:"Take the risk or lose the chance."
        },
        {
          name: 25,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "25th August 2022",
          quote:"I can and I will."
        },
        {
          name: 26,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "26th August 2022",
          quote:"Try Again. Fail again. Fail better."
        },
        {
          name: 27,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "27th August 2022",
          quote:"When nothing goes right, go left."
        },
        {
          name: 28,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "28th August 2022",
          quote:"You can totally do this."
        },
        {
          name: 29,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "29th August 2022",
          quote:"Don’t tell people your plans. Show them your results."
        },
        {
          name: 30,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "30th August 2022",
          quote:"Stay foolish to stay sane"
        },
        {
          name: 31,
          text: "",
          emotion: 0,
          share: [false, false, false],
          date: "31th August 2022",
          quote:"No pressure, no diamonds"
        },
      ],
    saveText:"",
    },
  watch:{
    saveText: function(val){
        this.dates[this.CurrentDate -1].text=val;

    },
    saveShare:function (val){
        console.log(val);
    }
}
});


  
