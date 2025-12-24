
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.DsOoIYnp.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.8MsYkguj.js","/cdn/shopifycloud/checkout-web/assets/c1/locale-es-legacy.BlokZ1ys.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.B6rwcODm.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.T0Cm96fw.js","/cdn/shopifycloud/checkout-web/assets/c1/RememberMeDescriptionText-legacy.BkscMgeo.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.DU4XfWDJ.js","/cdn/shopifycloud/checkout-web/assets/c1/PaymentButtons-legacy.GjvfLLDT.js","/cdn/shopifycloud/checkout-web/assets/c1/StockProblemsLineItemList-legacy.DzOiBw5Z.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalPickup-legacy.BkEvCRBf.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayButtonClassName-legacy.DN6kzMUN.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.CM6WHGHw.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.CcHjY9Lt.js","/cdn/shopifycloud/checkout-web/assets/c1/useAddressManager-legacy.Dhi6C3I3.js","/cdn/shopifycloud/checkout-web/assets/c1/useShopPayPaymentRequiredMethod-legacy.Dvg6VSjL.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.BXnFwRLS.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.NqRVaYbi.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.BQQZ_u6g.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.sBESE2Tz.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.C8NgHOun.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.DXqf9qhE.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.A4xcxj4w.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0654/7836/1302/files/descubredesierto_x320.png?v=1654281895"];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  