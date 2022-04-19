d3.csv("./resources/data.csv", function(err, rows){

    function unpack(rows, key) {
        return rows.map(function(row) { return row[key]; });
    }

    // These are the graphs.
    var s1_time_series = {
        type: "scatter",
        mode: "lines",
        name: 'Sensor 1',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 1'),
        line: {color: '#17BECF'}
    }

    var s2_time_series = {
        type: "scatter",
        mode: "lines",
        name: 'Sensor 2',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 2'),
        line: {color: '#17BEB0'}
    }

    var s3_time_series = {
        type: "scatter",
        mode: "lines",
        name: 'Sensor 3 ',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 3'),
        line: {color: '#17BEA0'}
    }

    var s1_bar = {
        type: 'bar',
        name: 'Sensor 1',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 1'),
        line: {color: '#000000'}
    }

    var s2_bar = {
        type: 'bar',
        name: 'Sensor 2',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 2'),
        line: {color: '#000000'}
    }

    var s3_bar = {
        type: 'bar',
        name: 'Sensor 3',
        x: unpack(rows, 'Measurement Date'),
        y: unpack(rows, 'Sensor 3'),
        line: {color: '#000000'}
    }

    var data = [s1_time_series, s2_time_series, s3_time_series,
        s1_bar, s2_bar, s3_bar];

    var layout = {
    title: 'Water Level vs. Time For Sensors',
    barmode: 'group',
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
