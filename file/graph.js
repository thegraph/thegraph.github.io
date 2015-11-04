//Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#token').getAttribute('value');

var app = new Vue({

    el: '#ourgraph',

    data: {
        helo: 'mantap',

        deadline : 'November 10 2015 11:00:50 UTC+0200',

        days: '',

        hours: '',

        minutes: '',

        seconds: ''


    },

    ready: function  () {
        
        this.updateClock();
        setInterval(this.updateClock,1000);

    },

    methods:{
        updateClock: function(){
            var t = this.getTimeRemaining(this.deadline);

            this.days = t.days;
            this.hours = t.hours;
            this.minutes = t.minutes;
            this.seconds = t.seconds;

            
          },

          getTimeRemaining: function(endtime){
              t = Date.parse(endtime) - Date.parse(new Date());
              seconds = Math.floor( (t/1000) % 60 );
              minutes = Math.floor( (t/1000/60) % 60 );
              hours = Math.floor( (t/(1000*60*60)) % 24 );
              days = Math.floor( t/(1000*60*60*24) );
              return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
              };
            }
    }

});

