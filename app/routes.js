module.exports = function (router) {

  // lap-name
  router.post('/lpa-name', function(req, res) {
    res.redirect('/lpa-age')
  })

  // lap-email
  router.post('/lpa-age', function(req, res) {
    res.redirect('/lpa-email')
  })

  // lap-email
  router.post('/lpa-email', function(req, res) {
    res.redirect('/lpa-postcode')
  })

  // lpa-postcode
  router.post('/lpa-postcode', function(req, res) {
    res.redirect('/lpa-select-address')
  })

  // lpa-select address
  router.post('/lpa-select-address', function(req, res) {
    res.redirect('/lpa-adress-confirm')
  })

  // lpa-confirm-address
  router.post('/lpa-adress-confirm', function(req, res) {
    res.redirect('/lpa-sign')
  })


  // lpa-sign
  router.post('/lpa-sign', function(req, res) {
    res.redirect('/lpa-check-answers-page')
  })


  // lpa-check-answers
  router.post('/lpa-sign', function(req, res) {
    res.redirect('/lpa-check-answers-page')
  })



  // lpa-results-confirmationpage
  router.post('/lpa-check-answers-page', function(req, res) {
    res.redirect('/lpa-confirmation-page')
  })

  // simulating addresses
router.post('/lpa-postcode', function(req, res) {
  req.session.data['addresses'] = [
    '1 Park Farm Cottages, Villa Road, Cambridge, CB249NZ',
    '2 Park Farm Cottages, Villa Road, Cambridge, CB249NZ',
    '3 Park Farm Cottages, Villa Road, Cambridge, CB249NZ',
    '4 Park Farm Cottages, Villa Road, Cambridge, CB249NZ',
    '5 Park Farm Cottages, Villa Road, Cambridge, CB249NZ',
    '6 Park Farm Cottages, Villa Road, Cambridge, CB249NZ'
  ]
  res.redirect('/lpa-select-address')
})


}