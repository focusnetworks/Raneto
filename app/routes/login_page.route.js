
'use strict';

function route_login_page (config) {
  return function (req, res, next) {

    return res.render('login', {
      layout      : null,
      lang        : config.lang,
      rtl_layout  : config.rtl_layout
    });

  };
}

// Exports
module.exports = route_login_page;
