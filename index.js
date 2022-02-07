d3.csv("./resources/data.csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    // These are the graphs.
    var trace1 = {
        type: "scatter",
        mode: "lines",
        name: 'Sensor 1',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 1'),
        line: {color: '#17BECF'}
    }

    var trace2 = {
        type: "scatter",
        mode: "lines",
        name: 'Sensor 2',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 2'),
        line: {color: '#17BEB0'}
    }

    var trace3 = {
        type: "scatter",
        mode: "lines",
        name: 'Sensor 3 ',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 3'),
        line: {color: '#17BEA0'}
    }

    var data = [trace1, trace2, trace3];

    var layout = {
    title: 'Water Level vs. Time For Sensors',
    };

    Plotly.newPlot('myDiv', data, layout);
});

function change_graphic(sensor) {
    if (sensor == undefined) {
        sensor = 0;
    }

    item = document.getElementById("graph")
    if (sensor == 0) {
        item.src = "./resources/south_texas_map_sensors.png";
    } else if (sensor == 1) {
        item.src = './resources/south_texas_map_sensor_1.png';
    } else if (sensor == 2) {
        item.src = "./resources/south_texas_map_sensor_2.png";
    } else if (sensor == 3) {
        item.src = "./resources/south_texas_map_sensor_3.png";
    } 
}

function on_click(sensor) {
    item = document.getElementById("text_area_1");

    if (sensor == 1) {
        item.value = "This is Sensor 1 located at position x1.";
    } else if (sensor == 2) {
        item.value = "This is Sensor 2 located at position x2.";
    } else if (sensor == 3) {
        item.value = "This is Sensor 3 located at position x3.";
    }

    change_graphic(sensor);
}
