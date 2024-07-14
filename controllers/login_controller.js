var helper = require('./../helpers/helpers')

module.exports.controller = (app, io, socket_list) => {

    const msg_success = "successfully"
    const msg_fail = "fail"

    const car_location_obj = {

    }

    app.post('/api/car_join', (req, res) => {
        helper.Dlog(req.body);
        var reqObj = req.body;

        helper.CheckParameterValid(res, reqObj, ['uuid', 'lat', 'long', 'degree', 'socket_id'], () => {

            socket_list['us_' + reqObj.uuid] = { 'socket_id': reqObj.socket_id }

            car_location_obj[reqObj.uuid] = {
                'uuid': reqObj.uuid, 'lat': reqObj.lat, 'long': reqObj.long, 'degree': reqObj.degree
            }

            io.emit("car_join", {
                "status": "1",
                "payload": {
                    'uuid': reqObj.uuid, 'lat': reqObj.lat, 'long': reqObj.long, 'degree': reqObj.degree
                }
            })

            res.json({ "status": "1", "payload": car_location_obj, "message": msg_success })

        })

    })

    app.post('/api/car_update_location', (req, res) => {
        helper.Dlog(req.body);
        var reqObj = req.body;

        helper.CheckParameterValid(res, reqObj, ['uuid', 'lat', 'long', 'degree', 'socket_id'], () => {

            socket_list['us_' + reqObj.uuid] = { 'socket_id': reqObj.socket_id }

            car_location_obj[reqObj.uuid] = {
                'uuid': reqObj.uuid, 'lat': reqObj.lat, 'long': reqObj.long, 'degree': reqObj.degree
            }

            io.emit("car_update_location", {
                "status": "1",
                "payload": {
                    'uuid': reqObj.uuid, 'lat': reqObj.lat, 'long': reqObj.long, 'degree': reqObj.degree
                }
            })

            res.json({ "status": "1", "message": msg_success })

        })

    })

}