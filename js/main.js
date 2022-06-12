$("#rightside-nav .sub-menu > a").click(function(e) {
    $("#rightside-nav ul ul").slideUp(), $(this).next().is(":visible") || $(this).next().slideDown(),
    e.stopPropagation()
});
