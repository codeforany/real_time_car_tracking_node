var helper = require('./../helpers/helpers')

module.exports.controller = (app, io, socket_list) => {

    const msg_success = "successfully"
    const msg_fail = "fail"

    io.on('connection', (client) => {

        client.on('UpdateSocket', (data) => {
            helper.Dlog("UpdateSocket :- " + data);
            var jsonObj = JSON.parse(data);

            helper.CheckParameterValidSocket(client, "UpdateSocket", jsonObj, ['uuid'], () => {

                socket_list['us_' + jsonObj.uuid] = { 'socket_id': client.id};

                helper.Dlog(socket_list);

                client.emit('UpdateSocket', { 'status': '1', 'message': msg_success })

            })

        })

    })
}