const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({ new: true, runValidators: true })

BillingCycle.route('count', (req, res, next) => {
    BillingCycle.count((err, val) => {
        if (err) {
            res.status(500).json({ errors: [error] })
            return;
        }

        res.json({ val })
    })
})

module.exports = BillingCycle