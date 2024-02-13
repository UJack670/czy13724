import React from 'react'
import ReactJSBox from 'react-jsbox'
import App from './App'

$ui.render({
    props: {
        title: 'runtime browser'
    },
    views: [
        {
            type: 'view',
            props: {
                id: 'root'
            },
            layout(make, view) {
                make.edges.equalTo(view.super.safeArea)
            },
            events: {
                layoutSubviews(sender) {
                    ReactJSBox.render(<App />, sender)
                }
            }
        }
    ]
})





































// Adding a dummy plugin commit(14)
// Adding a dummy stoverride commit(11)
// Adding a dummy sgmodule commit(17)
