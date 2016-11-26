//var _ = require()

var Monitoring = function() {

    var data = [];

    this.addData = function(item) {
        data.push(item);
    }

    this.printIrregularities = function() {
        console.log('These dates you had irregular heart rates\n');

        var irregularities = [];

        data.forEach(function(item) {
            if (item.rate > 90) {
                console.log(item.date.toDateString() + ': ' + item.rate + ' beats per minute');
            }
            if (item.rate < 50) {
                console.log(item.date.toDateString() + ': ' + item.rate + ' beats per minute');
            }
        });
    }

}

var monitor = new Monitoring();

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

for (var i = 1; i<=100; i++) {
    var currentDate = new Date(10,12,2016)
    currentDate.setDate(currentDate.getDate() + i);
    monitor.addData({date : currentDate, rate : getRandomArbitrary(45,95)});
}

monitor.printIrregularities();

