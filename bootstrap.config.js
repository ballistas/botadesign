/**
 * Created by pakunert on 08.08.2016.
 */


module.exports={
  styleLoader: require('extract-text-webpack-plugin').extract('style-loader', 'css-loader!less-loader'),
  scripts:{
    'carousel':true,
    'tooltip':true,
    'popover':true,
    'dropdown':true,
    'collapse':true,
    'scrollspy':true,
    'transition':true
  },
  styles:{
    "mixins": true,

    "normalize": true,

    "scaffolding": true,
    "type": true,
    "grid": true,
    "forms": true,
    "buttons": true,

    "component-animations": true,
    "glyphicons": true,
    "dropdowns": true,
    "button-groups": true,
    "input-groups": true,
    "navs": true,
    "navbar": true,
    "breadcrumbs": true,
    "pagination": true,
    "pager": true,
    "labels": true,
    "badges": true,
    "jumbotron": true,
    "thumbnails": true,
    "alerts": true,
    "progress-bars": true,
    "media": true,
    "list-group": true,
    "panels": true,
    "wells": true,
    "close": true,

    "modals": true,
    "tooltip": true,
    "popovers": true,
    "carousel": true,

    "utilities": true,
    "responsive-utilities": true

  }
}