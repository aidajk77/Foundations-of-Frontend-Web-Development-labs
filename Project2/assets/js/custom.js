$(document).ready(function () {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({ pageNotFound: "error_404" }); // initialize
  app.route({
    view: "about",
    load: "about.html",
  });
  app.route({
    view: "features",
    load: "features.html",
  });
  app.route({
    view: "faq",
    load: "faq.html",
  });
  app.route({
    view: "testimonials",
    load: "testimonials.html",
  });
  app.route({
    view: "pricing",
    load: "pricing.html",
  });
  app.route({
    view: "contact",
    load: "contact.html",
  });
  

  // run app
  app.run();
});