//Active nav styling
function headerNavActive () {
    $("nav li a").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("active");
        }
    });

    $(".nav-trigger").on("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(".nav-block").toggleClass("nav-block-open");
    });

    $(".nav-block").on("click", function (e) {
        e.stopPropagation();
    });

    $(".banner-img-block").imagesLoaded(function () {
        $(".banner-img").addClass("banner-img-animate");
    });

    $('.button-email-us').magnificPopup({
        type: 'inline',
        midClick: true,
        fixedContentPos: true
    });

    var panelList = $('#draggablePanelList');
    panelList.sortable({
        // Only make the .panel-heading child elements support dragging.
        // Omit this to make then entire <li>...</li> draggable.
        handle: '.panel-heading',
        update: function () {
            $('.panel', panelList).each(function (index, elem) {
                var $listItem = $(elem),
                    newIndex = $listItem.index();

                // Persist the new indices.
            });
        }
    });
}

