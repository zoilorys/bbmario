var dataUrl = 'http://localhost:3300/get';

var listItemView = Mn.View.extend({
    tagName: 'li',
    className: 'list-item',

    attributes: function() {
        return {
            id: this.model.get('id'),
        };
    },

    template: function(data) {
        return '<div class="list-item-title">' +
                data.title + " " + data.answer
            '</div>';
    },
})

var listView = Mn.CollectionView.extend({
    tagName: 'ul',
    className: 'list',
    childView: listItemView,

    onAttach: function() {
        var target = this.el.querySelector(this.getOption('itemToScrollTo'));

        var topPosition = target.getBoundingClientRect().top;
        var offset = window.pageYOffset;
        var scrollDistance = topPosition - offset;
        var duration = 200;
        var step = 10;

        var steps = duration/step;
        var stepSize = scrollDistance/steps;

        var i = 1;
        var timer = setInterval(function() {
            window.scrollBy(0, stepSize);

            if (i === steps) clearInterval(timer);
            i++;
        }, step);
    },
});


var wrapperView = Mn.View.extend({
    className: 'wrapper',

    regions: {
        list: '#list',
    },

    ui: {
        input: '.input'
    },

    events: {
        'click .trigger': 'showList',
    },

    template: function(model) {
        return '<input class="input" />' +
            '<button class="trigger">SHOW</button>' +
            '<div id="list"></div>';
    },

    showList: function() {
        var scrollTo = this.ui.input.val().trim() || '#q9';
        $.ajax({url:dataUrl}).then((response) => {
            this.getRegion('list').show(new listView({
                itemToScrollTo: scrollTo,
                collection: new Backbone.Collection(response)
            }));
        });
    },

});

document.getElementById('app').appendChild(new wrapperView().render().el);