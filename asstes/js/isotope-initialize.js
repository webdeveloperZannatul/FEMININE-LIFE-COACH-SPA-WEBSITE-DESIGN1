$(window).load(function() {
    var $portfolio = $('.masonary');
    $portfolio.isotope({
        masonry: {}
    });

    var $portfolio2 = $('.masonary2');
    $portfolio2.isotope({
        masonry: {
            columnWidth: 1
        }
    });


    var $optionSets = $('.options .option-set'),
        $optionLinks = $optionSets.find('a');

    $optionLinks.click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if ($this.hasClass('selected')) {
            return false;
        }
        var $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');
        var options = {},
            key = $optionSet.attr('data-option-key'),
            value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
            // changes in layout modes need extra logic
            changeLayoutMode($this, options)
        } else {
            // otherwise, apply new options
            $portfolio.isotope(options);
        }

        return false;
    });

});